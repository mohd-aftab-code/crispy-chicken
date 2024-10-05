// src/components/BigLukChicken.js
import React from 'react';
import Image from 'next/image';
import Burger from '../images/chicken-burger.webp';
import BackgroundBanner from '../images/bg.webp'; // Background image for the main content
import UpperBanner from '../images/line.webp'; // Upper banner image

const BigLukChicken = () => {
    return (
        <div className="relative w-full">
            {/* Combined Upper Banner and Main Content Section */}
            <div
                className="relative w-full flex flex-col items-center justify-center text-center md:text-left"
                style={{
                    backgroundImage: `url(${BackgroundBanner.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Upper Banner Overlay */}
                <div
                    className="absolute w-full h-[25vh] lg:h-[47vh] mt-72  items-center justify-center hidden lg:flex" // Hide on mobile and show on large screens
                    style={{
                        backgroundImage: `url(${UpperBanner.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Welcome Text for the Upper Banner */}
                </div>

                {/* Main Content with Burger Image */}
                <div className="relative box-border py-[40px] px-[10px] lg:py-[60px] lg:px-[40px] w-full"> {/* Adjusted padding for mobile */}
                    <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-[48px] lg:text-[65px] font-bold leading-[50px] lg:leading-[70px] mb-2 lg:mb-8 capitalize font-signlanguage ml-4"> {/* Increased mobile text size and added left margin */}
                                The Big Luk
                                <span className="block text-[56px] lg:text-[90px] font-normal mt-2 lg:mt-4 uppercase font-montserrat"> {/* Increased mobile text size */}
                                    Chicken
                                </span>
                            </h1>

                            <div className="mt-4 md:mt-8 w-full hidden md:flex justify-start"> {/* Hide on mobile, show on desktop */}
                                <a
                                    href="https://1111crispychicken.com/images/index/chicken-burger.webp"
                                    className="inline-block px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-[#c10e38] text-white text-base lg:text-lg font-bold capitalize transition-colors duration-300 hover:bg-[#a00d30]"
                                >
                                    Come Get Yours
                                    <span className="block text-xl lg:text-4xl uppercase">Big Luk Chicken</span>
                                </a>
                            </div>
                        </div>


                        {/* Image and Button Container */}
                        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start"> {/* Use flex-col for stacking and align left on desktop */}
                            <Image
                                src={Burger}
                                alt="Delicious Chicken Burger"
                                width={1000} // Adjusted for better visibility
                                height={800} // Adjusted for better visibility
                                className="max-w-full h-auto" // Responsive image
                            />

                            {/* Button conditionally hidden on desktop */}
                            <div className="mt-4 md:mt-8 block md:hidden w-full justify-start"> {/* Show on mobile, hide on desktop */}
                                <a
                                    href="https://1111crispychicken.com/images/index/chicken-burger.webp"
                                    className="inline-block px-8 lg:px-10 py-3 lg:py-4 rounded-full bg-[#c10e38] text-white text-base lg:text-lg font-bold capitalize transition-colors duration-300 hover:bg-[#a00d30]"
                                >
                                    Come Get Yours
                                    <span className="block text-xl lg:text-4xl uppercase">Big Luk Chicken</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigLukChicken;
