import { connectToDatabase } from '../../../utils/mongodb'; // Import the database connection utility
import nodemailer from 'nodemailer';
import { formatOrderDetails } from '../../../utils/orderUtils';

// Function to generate a unique order ID
function generateOrderId() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Random number between 1000 and 9999
    return `CRISPY-${randomNumber}`; 
}



// Function to send the order confirmation email to the customer
async function sendOrderConfirmationEmail(customerEmail, orderDetails) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail SMTP server
        port: 587, // Port for TLS
        secure: false, // Use TLS (not SSL)
        auth: {
            user: process.env.EMAIL_USER, // Gmail account email
            pass: process.env.EMAIL_PASS, // Gmail account password
        },
    });

    // Format order details into a string
    const formattedOrderDetails = formatOrderDetails(orderDetails);

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender email address
        to: customerEmail, // Recipient's email (customer)
        subject: '🎉 Order Confirmation - Your Order Details', // Subject line
        text: `
            Thank you for your order! We're excited to serve you. Here are your order details:\n\n
            ${formattedOrderDetails}\n
            If you have any questions, feel free to contact us.\n\n
            Best Regards,\n
            Your Restaurant Name
        `, // Email body with formatted order details
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Order confirmation email sent successfully to customer.');
    } catch (error) {
        console.error('Error sending email to customer:', error);
        throw new Error('Failed to send order confirmation email to customer');
    }
}

// Function to send order details to hotel management
async function sendOrderToManagement(orderDetails) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail SMTP server
        port: 587, // Port for TLS
        secure: false, // Use TLS (not SSL)
        auth: {
            user: process.env.EMAIL_USER, // Gmail account email
            pass: process.env.EMAIL_PASS, // Gmail account password
        },
    });

    // Format order details for management email
    const formattedOrderDetails = formatOrderDetails(orderDetails);
    const managementEmail = process.env.MANAGEMENT_EMAIL; // Add your hotel management email address in .env

    // Include the customer's address in the email body
    const address = orderDetails.userDetails.address || "Address not provided"; // Default message if address is not available
    const managementEmailBody = `
        A new order has been placed:\n\n
        ${formattedOrderDetails}\n
        **Customer Address:** ${address}\n\n
        Please take note of the details above and ensure timely processing of the order.\n\n
        Thank you!\n
        Your Restaurant Name
    `;

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender email address
        to: managementEmail, // Recipient's email (hotel management)
        subject: '🛎️ New Order Received - Order Details', // Subject line
        text: managementEmailBody, // Email body with formatted order details and address
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Order details email sent successfully to hotel management.');
    } catch (error) {
        console.error('Error sending email to hotel management:', error);
        throw new Error('Failed to send order details email to hotel management');
    }
}

// API handler function
export default async function handler(req, res) {
    const { db } = await connectToDatabase(); // Connect to MongoDB

    if (req.method === 'POST') {
        const { orderData } = req.body; // Extract order data from the request

        try {
            // Insert the order into the "orders" collection
            const orderId = generateOrderId(); // Generate unique order ID
            const newOrder = {
                ...orderData,
                orderId: orderId,
                createdAt: new Date(),
            };

            await db.collection('orders').insertOne(newOrder); // Save order in the database

            // Send order confirmation email to the customer
            await sendOrderConfirmationEmail(orderData.userDetails.email, newOrder);
            // Send order details to hotel management
            await sendOrderToManagement(newOrder);

            res.status(200).json({ success: true, orderId: orderId });
        } catch (error) {
            console.error('Error placing order:', error);
            res.status(500).json({ success: false, message: 'Error placing the order' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' }); // Reject non-POST requests
    }
}