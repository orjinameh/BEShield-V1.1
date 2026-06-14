import mongoose, { Schema } from 'mongoose';

const ClientSchema = new Schema({
  email: { type: String, required: true, unique: true },
  encryptedPassword: { type: String, required: true }, // Encrypted IMAP password
  contractAddress: { type: String, required: true },   // The Soroban Escrow Contract ID
  isActive: { type: Boolean, default: true },
  lastSync: { type: Date, default: null }
});

export const Client = mongoose.model('Client', ClientSchema);