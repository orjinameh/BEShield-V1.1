export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-8">
      <h1 className="font-display font-bold text-2xl text-ink tracking-tight mb-8">Settings</h1>

      <div className="space-y-5">
        <SettingsGroup title="Monitoring">
          <SettingRow
            label="Active mailboxes"
            description="Mailboxes currently under continuous monitoring"
            action={<span className="text-sm font-medium text-ink">847</span>}
          />
          <SettingRow
            label="Risk threshold for auto-flag"
            description="Conversations above this threshold are automatically surfaced"
            action={
              <select className="bg-surface-raised border border-surface-border rounded-md text-sm text-ink px-3 py-1.5 focus:outline-none focus:border-signal">
                <option>Medium and above</option>
                <option>High and above</option>
                <option>Critical only</option>
              </select>
            }
          />
        </SettingsGroup>

        <SettingsGroup title="Verification">
          <SettingRow
            label="Minimum active nodes"
            description="Minimum detectors required for a valid consensus decision"
            action={
              <select className="bg-surface-raised border border-surface-border rounded-md text-sm text-ink px-3 py-1.5 focus:outline-none focus:border-signal">
                <option>3 nodes</option>
                <option>4 nodes</option>
                <option>5 nodes</option>
              </select>
            }
          />
          <SettingRow
            label="Adaptive node rotation"
            description="Randomize active verification subset per investigation"
            action={<Toggle defaultChecked />}
          />
        </SettingsGroup>

        <SettingsGroup title="Attestation">
          <SettingRow
            label="Stellar network"
            description="Blockchain network used for tamper-evident record keeping"
            action={<span className="text-sm font-medium text-ink">Mainnet</span>}
          />
          <SettingRow
            label="Auto-attest decisions"
            description="Automatically submit verdicts to the attestation layer"
            action={<Toggle defaultChecked />}
          />
        </SettingsGroup>
      </div>
    </div>
  );
}

function SettingsGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-surface-border rounded-xl overflow-hidden">
      <div className="px-6 py-3 bg-surface-raised border-b border-surface-border">
        <h2 className="text-xs font-semibold text-ink-tertiary uppercase tracking-widest">{title}</h2>
      </div>
      <div className="divide-y divide-surface-border">{children}</div>
    </div>
  );
}

function SettingRow({
  label,
  description,
  action,
}: {
  label: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-8 px-6 py-4">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-ink-tertiary mt-0.5">{description}</p>
      </div>
      <div className="flex-shrink-0">{action}</div>
    </div>
  );
}

function Toggle({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="sr-only peer"
      />
      <div className="w-9 h-5 bg-surface-border peer-checked:bg-signal rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
    </label>
  );
}
