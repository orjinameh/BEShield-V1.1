import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
// Ensure ENCRYPTION_KEY in your .env is exactly 64 hex characters (32 bytes)
const KEY = Buffer.from(process.env.ENCRYPTION_KEY || '', 'hex'); 
const IV_LENGTH = 16; 

export function encrypt(text: string): string {
  if (KEY.length !== 32) throw new Error("ENCRYPTION_KEY must be 32 bytes (64 hex characters)");
  
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  // Return IV and encrypted text joined together
  return iv.toString('hex') + ':' + encrypted;
}

export function decrypt(text: string): string {
  if (KEY.length !== 32) throw new Error("ENCRYPTION_KEY must be 32 bytes (64 hex characters)");
  
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift() || '', 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
  let decrypted = decipher.update(encryptedText);
  // @ts-ignore
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  
  return decrypted.toString('utf8');
}