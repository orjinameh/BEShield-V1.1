import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'node:dns';

// Force public DNS to prevent the Windows querySrv bug
dns.setServers(['1.1.1.1', '1.0.0.1']); 
dotenv.config();

import { Client } from './src/models/Client';

async function runPurge() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB for cleanup...");

    // This clears out the collection so you can start fresh
    const result = await Client.deleteMany({});
    console.log(`🧹 Success! Removed ${result.deletedCount} old testing records from the database.`);

  } catch (error) {
    console.error("Cleanup failed:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

runPurge();