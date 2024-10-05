"use client"; // Next.js 13+ syntax for client components

import Image from 'next/image';
import img from '../images/classic-chicken-sandwich-combo-new.webp';
import { useState } from 'react';

const ClassicChickenSandwich = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const handleUberEatsOrder = async () => {
        setLoading(true);
        setError(null);
        setOrderSuccess(false);

        // Simulating order details
        const orderDetails = {
            item: 'Classic Chicken Sandwich Combo',
            quantity: 1,
        };

        // Simulate a successful order placement
        setTimeout(() => {
            // Simulating success
            setOrderSuccess(true);
            setLoading(false);
        }, 2000); // Simulate a delay of 2 seconds
    };

    return (
        <div className="py-12 w-full">
            <div className="w-11/12 md:w-3/4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section - Image */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-20">
                        <Image
                            loading="lazy"
                            src={img}
                            alt="Classic Chicken Sandwich Combo"
                            title="Classic Chicken Sandwich Combo"
                            className="w-full h-auto max-w-[900px] mx-auto"
                        />
                    </div>
                    {/* Right Section - Details */}
                    <div className="pr-6 w-full md:w-1/2">
                        <h2 className="m-0 text-3xl md:text-4xl font-black">Classic Chicken Sandwich Combo</h2>
                        <p className="mt-5 text-base md:text-lg leading-7 text-gray-800">Crispy Chicken, Lettuce, Tomato and Mayo.</p>
                        <p className="mt-0 text-base md:text-lg leading-7 text-gray-800">Includes: 1 Small Side & Fountain Drink.</p>
                        <p className="m-0 text-2xl md:text-3xl text-red-800 font-black leading-[1.5]">$11.99</p>
                        <div className="mt-4 flex justify-center md:justify-start">
                            <button
                                onClick={handleUberEatsOrder}
                                className="px-10 py-4 text-lg bg-red-600 text-white cursor-pointer font-bold rounded-full text-center uppercase transition duration-200 ease-in-out hover:bg-red-700"
                                disabled={loading}
                            >
                                {loading ? 'Placing Order...' : 'Order Now'}
                            </button>
                        </div>
                        {error && <p className="text-red-600">{error}</p>}
                        {orderSuccess && <p className="text-green-600">Order placed successfully!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassicChickenSandwich;
