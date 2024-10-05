"use client"; // Next.js 13+ syntax for client components

import Image from 'next/image';
import img from '../images/chicken-pot-pie.webp'; // Update the path according to your folder structure

const ChickenPotPie = () => {
    return (
        <div className="py-12 w-full">
            <div className="w-11/12 md:w-3/4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section - Image */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center"> {/* Center image container */}
                        <Image 
                            loading="lazy" 
                            src={img} 
                            alt="Chicken Pot Pie" 
                            title="Chicken Pot Pie" 
                            className="w-full h-auto max-w-[900px]" // Full width, auto height
                        />
                    </div>
                    {/* Right Section - Details */}
                    <div className="flex flex-col justify-center pr-6 w-full md:w-1/2">
                        <h2 className="m-0 text-3xl md:text-4xl font-black">Chicken Pot Pie</h2>
                        <p className="mt-5 text-base md:text-lg leading-7 text-gray-800">
                            Specialty Chicken Meals.<br />
                            A Delicious Chicken Pie Made from Scratch with Chicken, Carrots, Peas, and Gravy in a Pie Crust.
                        </p>
                        <p className="m-0 text-2xl md:text-3xl text-red-800 font-black leading-[1.5]">$7.49</p>
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

export default ChickenPotPie;
