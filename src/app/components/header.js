"use client"; // Mark this file as a Client Component
import { useState } from 'react'; // Import useState to manage state
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/decktop-logo.png';
import Footer from './Footer';

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    return (
        <div className="w-full border-b-2 border-gray-200 box-border relative">
            <div className="h-24 w-11/12 mx-auto flex items-center box-border">
                {/* Logo Section */}
                <div className="mr-5 flex items-start">
                    <Link href="/" title="Home">
                        <Image
                            loading="lazy"
                            src={logo}
                            alt="1111 Crispy Chicken & Burgers Logo"
                            width={250} // Increased width for a larger logo
                            height={100} // Increased height for a larger logo
                            className="block"
                        />
                    </Link>
                </div>

                <div className="flex items-center justify-between w-full">
                    <nav className="flex items-center">
                        {/* Navbar Links */}
                        <div className="hidden md:flex justify-center"> {/* Only show on medium screens and up */}
                            <ul className="flex space-x-4 w-full">
                                <li>
                                    <Link href="menu.php" className="text-black font-extrabold text-lg uppercase hover:text-red-600 transition duration-300">menu</Link>
                                </li>
                                <li>
                                    <Link href="locations.php" className="text-black font-extrabold text-lg uppercase hover:text-red-600 transition duration-300">locations</Link>
                                </li>
                                <li>
                                    <Link href="locations.php" className="ml-6 p-2 bg-[#c10e38] text-white font-extrabold rounded-full hover:bg-red-700 transition duration-300 text-lg">order now</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Right Section - Order Now, Social Media Links */}
                    <div className="hidden md:flex items-center"> {/* Only show on medium screens and up */}
                        <ul className="flex space-x-4 text-gray-600">
                            <li>
                                <Link href="/BoxMeals" className="text-[#c10e38] text-lg capitalize">box meals</Link>
                            </li>
                            <li>
                                <Link href="/Burger" className="text-[#c10e38] text-lg capitalize">burgers</Link>
                            </li>
                            <li>
                                <Link href="/Chicken" className="text-[#c10e38] text-lg capitalize">chicken</Link>
                            </li>
                            <li>
                                <Link href="/Specialty" className="text-[#c10e38] text-lg capitalize">specialty</Link>
                            </li>
                            <li>
                                <Link href="/Salads" className="text-[#c10e38] text-lg capitalize">salads</Link>
                            </li>
                            <li>
                                <Link href="/KisdMeals" className="text-[#c10e38] text-lg capitalize">kids meals</Link>
                            </li>
                            <li>
                                <Link href="/Sides" className="text-[#c10e38] text-lg capitalize">sides</Link>
                            </li>
                            <li>
                                <Link href="/Shakes" className="text-[#c10e38] text-lg capitalize">shakes</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Toggle Button for Sidebar (Only on Mobile) */}
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden ml-4 text-white bg-[#c10e38] p-2 rounded-full hover:bg-red-700 transition duration-300" // Removed fixed positioning
                    >
                        {isSidebarOpen ? '←' : '☰'} {/* Toggle between arrow and hamburger icon */}
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-3/4 bg-white z-40 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Scrollable Footer Content */}
                <div className="overflow-y-auto h-full p-4"> {/* Scrollable area */}
                    <Footer />
                </div>
            </div>

            {/* Overlay for blocking background when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={toggleSidebar} // Clicking outside closes the sidebar
                ></div>
            )}
        </div>
    );
};

export default Navbar;
