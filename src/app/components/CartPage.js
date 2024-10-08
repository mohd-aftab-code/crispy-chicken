import React, { useState } from 'react';
import { FaPhone, FaPen, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const CartPage = ({ cartItems, onClose }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [selectedTime, setSelectedTime] = useState('1 PM');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items to the cart before placing the order.');
            return;
        }
    
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            alert('Please fill in all the details before placing the order.');
            return;
        }
    
        // Create a date object for the current year
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth(); // Month is 0-indexed in JS
        const currentDay = getDayOfWeek(selectedDay); // Custom function to get the correct day
    
        if (currentDay === null) {
            alert('Invalid day selected. Please try again.');
            return;
        }
    
        // Create a new date object
        const orderDate = new Date(currentYear, currentMonth, currentDay, getHour(selectedTime), 0);
    
        setSubmittedData({ ...formData, selectedDay, selectedTime, orderDate });
        setOrderSubmitted(true);
        setIsFormSubmitted(true);
    
        setFormData({ name: '', email: '', phone: '', address: '' });
        setIsFormVisible(false);
    };
    
    // Function to get the day number from the day name
    const getDayOfWeek = (dayName) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days.indexOf(dayName);
    };
    
    // Function to get the hour from the time string
    const getHour = (time) => {
        const hour = parseInt(time); // Get the hour part from the string
        return hour === 12 ? 0 : hour; // Convert 12 PM to 0 hours for Date object, otherwise return as is
    };
    
    
    const subTotal = cartItems.reduce((total, cartItem) => {
        const priceForSize = cartItem.item.prices[cartItem.size.toLowerCase()];
        return total + priceForSize * cartItem.quantity;
    }, 0);

   const handleOrderNow = async () => {
    if (!isFormSubmitted) return;

    const orderData = {
        userDetails: submittedData,
        cartItems: cartItems.map(cartItem => ({
            itemId: cartItem.item.id, // Assuming you have an id for each item
            name: cartItem.item.name,
            size: cartItem.size,
            quantity: cartItem.quantity,
            price: cartItem.item.prices[cartItem.size.toLowerCase()], // Price based on the selected size
        })),
        subTotal: subTotal,
        orderingMethod: 'Pickup',
        paymentMethod: 'Cash on Delivery',
        createdAt: new Date(),
    };

    try {
        const response = await fetch('/api/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderData }), // Send the structured orderData
        });

        const result = await response.json();
        if (result.success) {
            alert(`Order placed successfully! Order ID: ${result.orderId}`);
            console.log(result);
            onClose();
        } else {
            alert('Error placing the order. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while placing the order. Please try again.');
    }
};

    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl flex flex-col md:flex-row relative overflow-y-auto max-h-[90vh]">
                <button
                    className="absolute top-2 right-2 text-[#c10e38] font-bold text-2xl rounded-full p-2 bg-gray-200 hover:bg-gray-300"
                    onClick={onClose}
                >
                    X
                </button>

                <div className="w-full md:w-1/2 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-300">
                    <h3 className="text-lg font-bold mb-4">Delivery Details</h3>

                    <button
                        className="flex items-center mb-4 text-[#c10e38]"
                        onClick={() => setIsFormVisible(!isFormVisible)}
                    >
                        <FaPhone className="mr-2 text-xl transform rotate-90" /> {/* Rotate icon 90 degrees */}
                        <h1 className="mr-48 sm:mr-64">Contact</h1>
                        <span className="border border-gray-300 p-1 rounded ml-8">
                            <FaPen className=" text-[#c10e38]   cursor-pointer" />
                        </span>
                    </button>


                    {isFormVisible && (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                                className="border border-[#c10e38] rounded w-full p-2 mb-2"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                                className="border border-[#c10e38] rounded w-full p-2 mb-2"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone"
                                required
                                className="border border-[#c10e38] rounded w-full p-2 mb-2"
                            />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                required
                                className="border border-[#c10e38] rounded w-full p-2 mb-2"
                            />

                            <div className="mt-1">
                                <h4 className="font-bold flex items-center">
                                    <FaClock className="mr-2 text-yellow-500" />
                                    Available Time Choice
                                </h4>
                                <div className="flex items-center mt-2">
                                    <select
                                        className="border rounded p-2 mr-2"
                                        value={selectedDay}
                                        onChange={(e) => setSelectedDay(e.target.value)}
                                    >
                                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        className="border rounded p-2"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                    >
                                        {Array.from({ length: 12 }, (_, i) => {
                                            const hour = i + 1;
                                            return (
                                                <option key={hour} value={`${hour} PM`}>
                                                    {hour} PM
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="mt-4 w-full bg-[#c10e38] text-white rounded py-2">
                                Save
                            </button>
                        </form>
                    )}

                    {submittedData && (
                        <div className="mt-4 p-2 border border-gray-300 rounded">
                            <h4 className="font-bold">Saved Data:</h4>
                            <p>Name: {submittedData.name}</p>
                            <p>Email: {submittedData.email}</p>
                            <p>Phone: {submittedData.phone}</p>
                            <p>Address: {submittedData.address}</p>
                            <p>Selected Day: {submittedData.selectedDay}</p>
                            <p>Selected Time: {submittedData.selectedTime}</p>
                        </div>
                    )}

                    <div className="mt-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-[#c10e38]" />
                        <span className="font-bold">Ordering Method: Pickup</span>
                    </div>

                    <div className="mb-2 mt-2">
                        <label className="block mb-1">Payment Method:</label>
                        <select className="border rounded w-full p-2">
                            <option value="cash">Cash on Delivery</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-4 md:mt-0">
                    <h2 className="text-lg font-bold mb-4">Cart Details</h2>
                    <div className="overflow-y-auto h-[50vh] md:h-[60vh]"> {/* Adjust height for scroll */}
                        {cartItems.length > 0 ? (
                            <table className="w-full text-left border-collapse border border-gray-300">
                                <thead>
                                    <tr className="border-b">
                                        <th className="pb-2">Qty</th>
                                        <th className="pb-2">Item</th>
                                        <th className="pb-2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((cartItem, index) => {
                                        const priceForSize = cartItem.item.prices[cartItem.size.toLowerCase()];
                                        return (
                                            <tr key={index} className="border-b">
                                                <td className="py-1">{cartItem.quantity}</td>
                                                <td className="py-1">{cartItem.item.name}</td>
                                                <td className="py-1">{`$${priceForSize.toFixed(2)}`}</td>
                                            </tr>
                                        );
                                    })}
                                    <tr className="border-b">
                                        <td className="py-1" colSpan="2" align="right">Subtotal</td>
                                        <td className="py-1">{`$${subTotal.toFixed(2)}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p>No items in the cart.</p>
                        )}
                    </div>

                    <button
                        className="mt-4 w-full bg-[#c10e38] text-white rounded py-2"
                        onClick={handleOrderNow}
                        disabled={!isFormSubmitted}
                    >
                        Place Pickup Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
