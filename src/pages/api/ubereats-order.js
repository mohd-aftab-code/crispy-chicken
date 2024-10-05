// pages/api/ubereats-order.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { authCode, orderDetails } = req.body;

        // Validate input
        if (!authCode) {
            return res.status(400).json({ success: false, error: 'Auth code is required.' });
        }
        if (!orderDetails) {
            return res.status(400).json({ success: false, error: 'Order details are required.' });
        }
        if (!process.env.UBER_APPLICATION_ID || !process.env.UBER_PRIVATE_KEY) {
            return res.status(500).json({ success: false, error: 'Missing environment variables.' });
        }

        try {
            const accessToken = await fetchAccessToken(authCode);
            const response = await fetch('https://api.uber.com/v1/eats/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(orderDetails),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.message || 'Failed to place order.');
            }

            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

// Function to fetch access token using authorization code
const fetchAccessToken = async (authCode) => {
    const response = await fetch('https://sandbox-login.uber.com/oauth/v2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: process.env.UBER_APPLICATION_ID,
            client_secret: process.env.UBER_PRIVATE_KEY,
            grant_type: 'authorization_code',
            redirect_uri: '<YOUR_REDIRECT_URI>', // Make sure to set this correctly
            code: authCode,
        }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data?.error || 'Failed to fetch access token.');
    }

    return data.access_token;
};
