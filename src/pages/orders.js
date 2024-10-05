// pages/api/orders.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { item, quantity } = req.body;
        // Handle order placement logic here (e.g., save to database, etc.)
        res.status(200).json({ message: 'Order placed successfully', item, quantity });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
