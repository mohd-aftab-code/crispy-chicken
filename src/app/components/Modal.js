"use client";
import React, { useState } from 'react';
import MenuPopup from './MenuPopup'; // Import the MenuPopup component

const Modal = ({ isOpen, onClose, carryOutAddress }) => {
    if (!isOpen) return null;

    const [isOrderProcessing, setIsOrderProcessing] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOrderNowClick = () => {
        setIsOrderProcessing(true);
        setIsMenuOpen(true); // Open the menu popup
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false); // Close the menu when done
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded shadow-md max-w-xs sm:max-w-sm w-full">
                <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">You are about to place an order at:</h1>
                <p className="font-semibold text-center">{carryOutAddress}</p> {/* Show the selected address here */}
                <div className="mt-4 flex flex-col sm:flex-row justify-center">
                    <button
                        className="mr-0 sm:mr-2 mb-2 sm:mb-0 px-4 py-2 bg-[#c10e38] text-white rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleOrderNowClick}
                    >
                        Order Now
                    </button>
                </div>

                {isMenuOpen && <MenuPopup onClose={handleCloseMenu} />} {/* Render MenuPopup when isMenuOpen is true */}
            </div>
        </div>
    );
};

export default Modal;
