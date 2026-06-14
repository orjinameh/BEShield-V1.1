import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function analyzePaymentIntent(emailSubject: string, emailBody: string) {
  const prompt = `
    You are a financial security auditor. Analyze the following email for payment fraud.
    You MUST respond with a raw JSON object and nothing else.
    
    JSON Schema:
    {
      "is_safe": boolean,
      "payment_amount": number (or null if none found),
      "reasoning": "short string explaining why"
    }

    Email Subject: ${emailSubject}
    Email Body: ${emailBody}
  `;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant", // Fast and efficient for JSON
      response_format: { type: "json_object" }, // Crucial: Forces JSON output
    });

    const responseContent = chatCompletion.choices[0]?.message?.content || "{}";
    const decision = JSON.parse(responseContent);

    console.log(`[AI Verdict] Safe: ${decision.is_safe} | Reason: ${decision.reasoning}`);
    return decision; // Returns { is_safe: true/false, payment_amount: 100, ... }

  } catch (error) {
    console.error("[AI Engine] Failed to parse analysis:", error);
    // Fail closed: If AI breaks, do NOT approve the transaction
    return { is_safe: false, reasoning: "AI parsing failure" };
  }
}