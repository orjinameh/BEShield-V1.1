import Imap from 'node-imap';
import { simpleParser } from 'mailparser';

export const fetchUnreadEmails = async (config: { user: string; pass: string }) => {
  return new Promise((resolve, reject) => {
    const imap = new Imap({
      user: config.user,
      password: config.pass,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
    });

    const results: any[] = [];

    imap.once('ready', () => {
      imap.openBox('INBOX', false, (err, box) => {
        if (err) return reject(err);

        // Fetch only recent messages
        const f = imap.seq.fetch(`${box.messages.total}:*`, { bodies: ['HEADER', 'TEXT'] });
        
        f.on('message', (msg) => {
          msg.on('body', (stream) => {
            simpleParser(stream, (err, mail) => {
              if (!err) results.push(mail);
            });
          });
        });

        f.once('end', () => {
          imap.end();
        });
      });
    });

    imap.once('error', (err) => reject(err));
    imap.once('end', () => resolve(results));

    imap.connect();
  });
};