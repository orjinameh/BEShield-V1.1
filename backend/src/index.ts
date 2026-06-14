// 1. FORCE PUBLIC DNS RESOLUTION (Put this at the very top to fix the Windows querySrv bug)
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '1.0.0.1']); 

import { startWorker } from './workers/worker';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import { Client } from './models/Client';
import { encrypt } from './utils/encryption';

dotenv.config();

const app = express();
app.use(express.json());

// Onboarding Endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, contractAddress } = req.body;

    if (!email || !password || !contractAddress) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const encryptedPassword = encrypt(password);

    const newClient = await Client.create({
      email,
      encryptedPassword,
      contractAddress
    });

    res.status(201).json({ 
      message: "Client successfully registered to BEShield", 
      clientId: newClient._id 
    });
  } catch (error: any) {
    console.error("Registration error:", error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already registered" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// Database Connection
mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(3000, () => {
      console.log("BEShield API running on port 3000");
      startWorker(); 
    });
  })
  .catch(err => console.error("Database connection error", err));