const crypto = require('crypto');

// Generate a random 256-bit (64-byte) hex string for the secret key
const secretKey = crypto.randomBytes(64).toString('hex');

console.log('Generated JWT Secret Key:', secretKey);