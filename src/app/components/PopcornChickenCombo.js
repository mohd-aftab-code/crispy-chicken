"use client"; // Next.js 13+ syntax for client components

import Image from 'next/image';
import img from '../images/popcorn-chicken-combo.webp'; // Update the path according to your project structure

const PopcornChickenCombo = () => {
    return (
        <div className="py-12 bg-[#f6f3ee] w-full">
            <div className="w-11/12 md:w-3/4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section - Image */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 mr-6 md:mr-20">
                        <Image
                            loading="lazy"
                            src={img}
                            alt="Popcorn Chicken"
                            title="Popcorn Chicken"
                            className="w-full h-auto max-w-[900px] mx-auto" // Increased max-width to 900px
                        />
                    </div>
                    {/* Right Section - Details */}
                    <div className="w-full md:w-1/2 pr-6">
                        <h2 className="m-0 text-3xl md:text-4xl font-black">Popcorn Chicken</h2> {/* Adjusted heading size */}
                        <p className="mt-2 text-lg md:text-2xl text-[#c10e38] italic">Original or Spicy</p> {/* Adjusted text size */}
                        <p className="mt-4 text-base md:text-lg leading-7 text-gray-800">
                            Comes with 1 Small Side &amp; Fountain Drink.<br />
                            Substitute a Milkshake Add $3.99 <br />
                            or Upgrade to a Large Side $2
                        </p>
                        <p className="m-0 text-2xl md:text-3xl text-[#5e150b] font-black leading-[1.5]">
                            $8.99 <span className="text-base md:text-lg text-gray-800 font-semibold">/ 8 Pieces</span>
                        </p>
                        <p className="m-0 text-2xl md:text-3xl text-[#5e150b] font-black leading-[1.5]">
                            $11.99 <span className="text-base md:text-lg text-gray-800 font-semibold">/ 12 Pieces</span>
                        </p>
                        <div className="mt-4 flex justify-center md:justify-start"> {/* Center on mobile, left-aligned on desktop */}
                            <a
                                href="locations.php"
                                className="px-10 py-4 text-lg bg-red-600 text-white cursor-pointer font-bold rounded-full text-center uppercase transition duration-200 ease-in-out hover:bg-red-700"
                            >
                                Order Now
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopcornChickenCombo;
