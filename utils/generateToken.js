const jwt = require('jsonwebtoken');

// Environment variables se private key aur application ID ko load karein
const privateKey = process.env.UBER_PRIVATE_KEY.replace(/\\n/g, '\n');

// Payload banayein
const payload = {
    iss: process.env.UBER_APPLICATION_ID, // Application ID
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // Token validity - 1 hour
};

// Token generate karein
try {
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
    console.log('Generated JWT:', token);
} catch (error) {
    console.error('Error generating JWT:', error);
}
