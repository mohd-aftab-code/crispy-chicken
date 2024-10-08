"use client"
import React, { useState } from 'react';
import Modal from './Modal'; // Keep your Modal component if you still need it
import MenuPopup from './MenuPopup'; // Import the MenuPopup

const FooterLocations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState(null);
    const [currentAddress, setCurrentAddress] = useState(''); // State for the current address

    const handleCarryOutClick = (location) => {
        console.log('Selected Location:', location); // Log the selected location
        setCurrentMenu(location.city); // Set city name to currentMenu
        setCurrentAddress(location.address); // Store address if needed
        setIsModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentMenu(null); // Reset the current menu when closing
        setCurrentAddress(''); // Reset the current address when closing
    };

    const locations = [
        { city: "Clio", address: "4323 W Vienna Rd, Clio Htpp, MI 48420" },
        { city: "Wixom", address: "49078 W Pontiac Trail, Wixom, MI 48393" },
        { city: "Roseville", address: "18125 E. 10 Mile Rd, Roseville, MI 48066" },
        { city: "Waterford", address: "7660 Highland Rd, Waterford Twp, MI 48327" },
        { city: "Novi", address: "39601 Grand River Avenue, Novi, MI 48375" },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
                <div className="text-5xl pb-10 text-center font-black capitalize">Locations</div>
                <div className="flex justify-between flex-wrap">
                    {locations.map((location, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 box-border p-4 mb-6">
                            <h4 className="text-lg font-extrabold uppercase">{location.city}, MI</h4>
                            <div className="mt-2 text-sm mb-3" style={{ overflowWrap: 'break-word' }}>
                                <span className="text-gray-800 hover:underline">{location.address}</span>
                            </div>
                            <p className="flex flex-col sm:flex-row items-start">
                                <button
                                    onClick={() => handleCarryOutClick(location)} // Pass the location directly
                                    className="text-white bg-[#c10e38] text-sm py-2 px-4 rounded-full font-bold uppercase mt-2 sm:mt-0 sm:ml-2 hover:bg-[#a10b2d]"
                                >
                                    Carry Out
                                </button>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} carryOutAddress={currentAddress}>
                    <MenuPopup onClose={handleCloseModal} location={currentMenu} /> {/* Pass the location to MenuPopup */}
                </Modal>
            )}
        </div>
    );
};

export default FooterLocations;
