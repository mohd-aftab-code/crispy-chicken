"use client";
import Image from 'next/image';
import { useState } from 'react';
import logo1 from '../images/specials5.jpg';
import logo2 from '../images/specials3.jpg';
import logo3 from '../images/specials2.jpg';
import logo4 from '../images/cevapi-thursday.jpg';
import logo5 from '../images/specials2 (1).jpg';

const Specials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 1; // Change to display 1 item at a time on mobile

    const specials = [
        {
            src: logo1,
            title: 'Free Shake Upgrade with Any Combo',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo2,
            title: 'Happy Hour',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo3,
            title: 'Cevapi Thursday',
            location: 'Roseville',
        },
        {
            src: logo4,
            title: '3 PC Fried Chicken with Choice of Potato',
            location: 'Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo1,
            title: 'Free Shake Upgrade with Any Combo',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo2,
            title: 'Happy Hour',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo3,
            title: 'Cevapi Thursday',
            location: 'Roseville',
        },
        {
            src: logo4,
            title: '3 PC Fried Chicken with Choice of Potato',
            location: 'Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo1,
            title: 'Free Shake Upgrade with Any Combo',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo2,
            title: 'Happy Hour',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo3,
            title: 'Cevapi Thursday',
            location: 'Roseville',
        },
        {
            src: logo4,
            title: '3 PC Fried Chicken with Choice of Potato',
            location: 'Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo1,
            title: 'Free Shake Upgrade with Any Combo',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo2,
            title: 'Happy Hour',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo3,
            title: 'Cevapi Thursday',
            location: 'Roseville',
        },
        {
            src: logo4,
            title: '3 PC Fried Chicken with Choice of Potato',
            location: 'Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
        {
            src: logo5,
            title: 'Free Shake Upgrade with a Purchase of Any Combo Meal',
            location: 'Waterford Twp, Roseville, Wixom, Clio & Novi',
        },
    ];

    const totalSlides = Math.ceil(specials.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="py-12 bg-[#f6f3ee] relative">
            <div className="w-14/12 mx-auto">
                <div>
                    <p className="text-xs md:text-sm text-[#52a941] flex justify-center items-center mb-6 relative"> {/* Adjusted text size for mobile */}
                        {/* Left Arrow Button */}
                        <button className="z-10 bg-white rounded-full shadow p-2 mr-2 font-bold" onClick={prevSlide}>
                            ❮
                        </button>
                        <span className="flex items-center text-lg md:text-2xl pb-5 uppercase font-bold mx-4"> {/* Adjusted text size for mobile */}
                            <i className="fas fa-arrow-left mr-2 text-[#52a941]"></i>
                            Swipe side to side
                            <i className="fas fa-arrow-right ml-2 text-[#52a941]"></i>
                        </span>
                        {/* Right Arrow Button */}
                        <button className="z-10 bg-white rounded-full shadow font-bold p-2 ml-2" onClick={nextSlide}>
                            ❯
                        </button>
                    </p>

                </div>

                <div className="flex overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`, // Adjust for current slide
                            width: `${totalSlides * 100}%`, // Set width based on total slides
                        }}
                    >
                        {specials.map((item, index) => (
                            <div key={index} className="w-full p-6 sm:w-full"> {/* Full width on mobile */}
                                <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden" style={{ width: '400px', height: '400px', borderRadius: '15px 50px' }}>
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        title={item.title}
                                        width={400} // This is still the original width for aspect ratio
                                        height={400} // This is still the original height for aspect ratio
                                        className="w-full h-auto object-cover" // Use h-auto for responsive height
                                        style={{ borderRadius: '15px 50px' }} // Custom border-radius
                                        layout="responsive" // Ensures responsiveness
                                    />


                                    <h3 className="p-4 text-lg font-semibold text-black">
                                        <span className="text-base font-normal">{item.location}</span>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specials;
