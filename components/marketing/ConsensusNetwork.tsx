"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  label: string;
  type: "input" | "detector" | "consensus";
  active: boolean;
  alpha: number;
  targetAlpha: number;
}

interface Edge {
  from: number;
  to: number;
  flowOffset: number;
}

const DETECTOR_LABELS = ["DOM", "LANG", "BEH", "REL", "BANK", "HIST", "TXN"];

export function ConsensusNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;
    const W = 520;
    const H = 380;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(DPR, DPR);

    // Node layout
    const nodes: Node[] = [
      // Input
      { x: 260, y: 42, label: "REQUEST", type: "input", active: true, alpha: 1, targetAlpha: 1 },
      // Detectors — two rows
      { x: 80,  y: 155, label: "DOM",  type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      { x: 180, y: 155, label: "LANG", type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      { x: 280, y: 155, label: "BEH",  type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      { x: 380, y: 155, label: "REL",  type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      { x: 110, y: 245, label: "BANK", type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      { x: 260, y: 245, label: "HIST", type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      { x: 410, y: 245, label: "TXN",  type: "detector", active: false, alpha: 0.25, targetAlpha: 0.25 },
      // Consensus
      { x: 260, y: 340, label: "CONSENSUS", type: "consensus", active: false, alpha: 0.25, targetAlpha: 0.25 },
    ];

    const edges: Edge[] = [
      // Request → detectors
      { from: 0, to: 1, flowOffset: 0 },
      { from: 0, to: 2, flowOffset: 0 },
      { from: 0, to: 3, flowOffset: 0 },
      { from: 0, to: 4, flowOffset: 0 },
      { from: 0, to: 5, flowOffset: 0 },
      { from: 0, to: 6, flowOffset: 0 },
      { from: 0, to: 7, flowOffset: 0 },
      // detectors → consensus
      { from: 1, to: 8, flowOffset: 0.3 },
      { from: 2, to: 8, flowOffset: 0.5 },
      { from: 3, to: 8, flowOffset: 0.1 },
      { from: 4, to: 8, flowOffset: 0.7 },
      { from: 5, to: 8, flowOffset: 0.2 },
      { from: 6, to: 8, flowOffset: 0.6 },
      { from: 7, to: 8, flowOffset: 0.4 },
    ];

    // Which detector subsets to cycle through
    const SUBSETS = [
      [1, 3, 6, 8],
      [2, 4, 5, 8],
      [1, 2, 7, 8],
      [3, 5, 6, 8],
      [1, 4, 6, 7, 8],
      [2, 3, 5, 8],
    ];
    let subsetIdx = 0;
    let frame = 0;
    const CYCLE = 210;

    function applySubset(idx: number) {
      const active = new Set([0, ...SUBSETS[idx]]);
      nodes.forEach((n, i) => {
        n.targetAlpha = active.has(i) ? 1 : 0.18;
        n.active = active.has(i);
      });
    }
    applySubset(0);

    function drawNode(n: Node, alpha: number) {
      const { x, y, label, type } = n;
      const r = type === "consensus" ? 24 : type === "input" ? 20 : 17;

      if (!ctx) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Ring
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = n.active ? "#1C4FD8" : "#1A2540";
      ctx.lineWidth = n.active ? 1.5 : 1;
      ctx.fillStyle = n.active ? "#0C1830" : "#0C1424";
      ctx.fill();
      ctx.stroke();

      // Label
      ctx.font = `500 ${type === "consensus" ? "10px" : "9px"} 'Space Grotesk', system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = n.active ? "#F2F5FA" : "#4A5878";
      ctx.fillText(label, x, y);

      ctx.restore();
    }

    function drawEdge(e: Edge, t: number) {
      const a = nodes[e.from];
      const b = nodes[e.to];
      const active = a.active && b.active;
      const edgeAlpha = active ? 0.5 : 0.08;

      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = edgeAlpha;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = active ? "#1C4FD8" : "#1A2540";
      ctx.lineWidth = active ? 1 : 0.75;
      ctx.stroke();

      // Travelling dot on active edges
      if (active) {
        const progress = ((t * 0.6 + e.flowOffset) % 1);
        const px = a.x + (b.x - a.x) * progress;
        const py = a.y + (b.y - a.y) * progress;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#3B74FF";
        ctx.fill();
      }

      ctx.restore();
    }

    function tick() {
      frame++;
      const t = frame / 60;

      // Cycle subsets
      if (frame % CYCLE === 0) {
        subsetIdx = (subsetIdx + 1) % SUBSETS.length;
        applySubset(subsetIdx);
      }

      // Smooth alpha
      nodes.forEach((n) => {
        n.alpha += (n.targetAlpha - n.alpha) * 0.06;
      });

      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Draw all edges first
      edges.forEach((e) => drawEdge(e, t));

      // Draw all nodes
      nodes.forEach((n) => drawNode(n, n.alpha));

      rafRef.current = requestAnimationFrame(tick);
    }

    tick();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-xl border border-surface-border"
      aria-label="Animated Byzantine consensus network showing active verification nodes"
      role="img"
    />
  );
}
