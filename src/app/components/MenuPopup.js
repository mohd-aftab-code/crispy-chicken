import React, { useState } from 'react';
import { FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import Image from 'next/image';
import CartPage from './CartPage';
import imgpopa from '../images/img-popap.jpg';

// Import your images from the src directory
import nachoFajitasImg from '../images/Nacho Fajitas.jpg';
import superNachoImg from '../images/Super Nacho.jpg';
import saladsImg from '../images/Salads.jpg';
import Ref from '../images/th.jpeg';

const MenuPopup = ({ onClose }) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false); // State to manage cart visibility
    const [showLocationPopup, setShowLocationPopup] = useState(false); // State for location pop-up

    const toggleCart = () => {
        setShowCart(!showCart); // Toggle cart visibility
    };

    const toggleLocationPopup = () => {
        setShowLocationPopup(!showLocationPopup); // Toggle location pop-up visibility
    };

    const menuItems = [
        {
            name: 'Nacho Fajitas',
            description: 'With grilled fajita-style steak or chicken, lettuce, tomatoes, bell peppers and onion, sour cream and guacamole.',
            prices: { small: 15.19, medium: 18.19, large: 21.19 },
            image: nachoFajitasImg,
        },
        {
            name: 'Super Nacho',
            description: 'With choice of ground beef, shredded chicken, or refried beans. With lettuce, tomatoes, sour cream, guacamole, shredded cheese, and chopped onions.',
            prices: { small: 13.49, medium: 16.49, large: 19.49 },
            image: superNachoImg,
        },
        {
            name: 'Salads',
            description: 'A variety of fresh salads with seasonal ingredients.',
            prices: { small: 12.59, medium: 15.59, large: 18.59 },
            image: saladsImg,
        },
        {
            name: 'Asada Fries',
            description: 'Your choice of ground beef, steak, chicken, pastor, chorizo or carnitas, refried beans. Topped with cheese, guacamole, tomato, and sour cream.',
            prices: { small: 14.09, medium: 17.09, large: 20.09 },
            image: Ref,
        },
    ];

    const addToCart = (item, size, quantity) => {
        setCart((prevCart) => [...prevCart, { item, size, quantity, image: item.image }]);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 w-full max-w-5xl rounded-lg shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">GRAND AZTECA - WEST BLOOMFIELD</h1>
                    <div className="flex items-center">
                        <div className="relative mr-10">
                            <FaShoppingCart className="text-3xl cursor-pointer" onClick={toggleCart} />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 bg-[#c10e38] text-white text-xs rounded-full px-1">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                        <FaMapMarkerAlt className="text-3xl cursor-pointer text-[#c10e38]" onClick={toggleLocationPopup} /> {/* Location icon */}
                        <button onClick={onClose} className="text-[#c10e38] font-bold text-xl ml-5 rounded-full p-2 bg-gray-200 hover:bg-gray-300 mr-2">
                            X
                        </button>
                    </div>
                </div>

                {/* Show CartPage when cart is open */}
                {showCart ? (
                    <CartPage cartItems={cart} onClose={toggleCart} />
                ) : (
                    <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
                        <div className="mb-6">
                            <Image
                                src={imgpopa} // Use the imported image
                                alt="Menu Image"
                                width={1000} // Adjust width as needed
                                height={90} // Adjust height as needed
                                className="rounded-md mb-4" // Optional styling, like rounded corners
                            />
                        </div>
                        <h1 className="text-3xl font-bold mb-4">Appetizers</h1>
                        {menuItems.map((item, index) => (
                            <div key={index} className="mb-6 border-b pb-4 flex items-start justify-between">
                                <div className="flex-grow ml-4">
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                                    <div className="flex justify-between mb-2 items-center">
                                        <select id={`size-${index}`} className="border rounded-md p-1">
                                            <option value="small">Small - ${item.prices.small.toFixed(2)}</option>
                                            <option value="medium">Medium - ${item.prices.medium.toFixed(2)}</option>
                                            <option value="large">Large - ${item.prices.large.toFixed(2)}</option>
                                        </select>
                                        <div className="flex items-center">
                                            <h4 className="mr-2 font-bold text-[#c10e38]">Qty:</h4>
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue="1"
                                                className="border rounded-md p-1 w-16 text-center"
                                                id={`quantity-${index}`}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const size = document.getElementById(`size-${index}`).value;
                                            const quantity = parseInt(document.getElementById(`quantity-${index}`).value);
                                            addToCart(item, size, quantity);
                                        }}
                                        className="bg-[#c10e38] text-white px-4 py-2 rounded-md transition duration-200 hover:bg-red-600"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="flex-shrink-0 ml-4 mr-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Show Location Popup */}
                {showLocationPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Select Your Location</h2>
                            <p className="mb-4">Please choose a location to continue your order.</p>
                            {/* Add location selection logic here */}
                            <button
                                onClick={toggleLocationPopup}
                                className="bg-[#c10e38] text-white px-4 py-2 rounded-md transition duration-200 hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuPopup;