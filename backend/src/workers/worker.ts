import cron from 'node-cron';
import { Client } from '../models/Client';
import { decrypt } from '../utils/encryption';
import { fetchUnreadEmails } from '../services/imapService';
import { analyzePaymentIntent } from '../services/aiService';
import { executeVerdict } from '../services/stellarService';

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Executes the verdict with a retry mechanism.
 * If Stellar returns a txBadSeq (collision), it waits and retries.
 */
async function executeVerdictWithRetry(contractAddress: string, isSafe: boolean, retries = 3): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      return await executeVerdict(contractAddress, isSafe);
    } catch (error: any) {
      const isBadSeq = error.message?.includes('txBadSeq') || error.toString().includes('txBadSeq');
      
      if (isBadSeq && i < retries - 1) {
        console.warn(`[Worker] Collision detected (txBadSeq). Retry ${i + 1}/${retries} in 5s...`);
        await sleep(5000); // Wait longer on collisions
        continue;
      }
      throw error;
    }
  }
}

export function startWorker() {
  console.log('[Worker] BEShield Background Engine Initialized.');

  // Run every 5 minutes
  cron.schedule('* * * * *', async () => {
    console.log('[Worker] Starting security sweep for active clients...');

    try {
      const activeClients = await Client.find({ isActive: true });

      if (activeClients.length === 0) {
        console.log('[Worker] No active clients found.');
        return;
      }

      for (const client of activeClients) {
        console.log(`[Worker] Scanning inbox for client: ${client.email}`);

        try {
          const plainPassword = decrypt(client.encryptedPassword);
          const unreadEmails: any = await fetchUnreadEmails({
            user: client.email,
            pass: plainPassword,
          });

          if (!unreadEmails || unreadEmails.length === 0) {
            continue;
          }

          for (const email of unreadEmails) {
            const subject = email.subject || 'No Subject';
            const body = (email.text || email.html || '').substring(0, 2500);

            console.log(`[Worker] Auditing email: "${subject}"`);

            try {
              const decision = await analyzePaymentIntent(subject, body);

              if (!decision || typeof decision.is_safe === 'undefined') {
                console.warn(`[Worker] Skipping: AI failed to provide a valid decision.`);
                continue;
              }

              if (client.contractAddress) {
                console.log(`[Worker] Relaying verdict to Stellar...`);
                
                // Using the retry logic instead of direct call
                const txResponse = await executeVerdictWithRetry(client.contractAddress, decision.is_safe);
                
                console.log(`[Worker] Verdict secured on-chain. Hash: ${txResponse.hash || txResponse}`);
                await sleep(2000); // Standard cool down
              }
            } catch (error: unknown) {
              const message = error instanceof Error ? error.message : String(error);
              console.error(`[Worker] Pipeline error for ${client.email}:`, message);
            }
          }

          await Client.updateOne({ _id: client._id }, { lastSync: new Date() });

        } catch (clientError) {
          console.error(`[Worker Error] Failed processing client ${client.email}:`, clientError);
        }
      }
    } catch (globalError) {
      console.error('[Worker Error] Critical error during background sweep:', globalError);
    }
  });
}