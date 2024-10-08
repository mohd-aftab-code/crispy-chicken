// utils/orderUtils.js

export function formatOrderDetails(orderDetails) {
    const { userDetails, cartItems, subTotal, orderingMethod, paymentMethod, orderId } = orderDetails;

    // Start building the formatted order details
    let formattedDetails = `**Order Confirmation**\n\n`;

    // Order ID section
    formattedDetails += `**Order ID:** ${orderId}\n\n`; // Include Order ID here

    // Customer Information section
    formattedDetails += `**Customer Information:**\n`;
    formattedDetails += `- **Name:** ${userDetails.name}\n`;
    formattedDetails += `- **Email:** ${userDetails.email}\n`;
    formattedDetails += `- **Phone:** ${userDetails.phone}\n`;
    formattedDetails += `- **Address:** ${userDetails.address}\n\n`;

    // Order Details section
    formattedDetails += `**Order Details:**\n`;
    formattedDetails += `- **Ordering Method:** ${orderingMethod}\n`;
    formattedDetails += `- **Payment Method:** ${paymentMethod}\n`;
    formattedDetails += `- **Selected Day:** ${userDetails.selectedDay || 'Not Specified'}\n`; // Updated here
    formattedDetails += `- **Selected Time:** ${userDetails.selectedTime || 'Not Specified'}\n\n`; // Updated here

    // Items Ordered section
    formattedDetails += `**Items Ordered:**\n`;
    cartItems.forEach(item => {
        formattedDetails += `  - **Name:** ${item.name}\n`;
        formattedDetails += `    **Size:** ${item.size}\n`;
        formattedDetails += `    **Quantity:** ${item.quantity}\n`;
        formattedDetails += `    **Price:** $${item.price.toFixed(2)}\n\n`;
    });

    // Subtotal section
    formattedDetails += `**Subtotal:** $${subTotal.toFixed(2)}\n`;

    return formattedDetails;
}
