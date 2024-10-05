import React from 'react';

const FooterLocations = () => {
    return (
        <div className="bg-gray-50 text-gray-800 py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8"> {/* Adjust padding for smaller screens */}
                {/* Footer Locations */}
                <div className="text-5xl pb-10 text-center font-black capitalize">
                    Locations
                </div>
                <div className="flex justify-between flex-wrap">
                    {[ // Locations Data...
                        {
                            city: "Clio",
                            address: "4323 W Vienna Rd, Clio, MI 48420",
                            mapsLink: "https://maps.app.goo.gl/1LZhGGQkNgGACFRH8",
                            reviewLink: "https://maps.app.goo.gl/mPHXXJFPxkxuTNYx9",
                            carryOutLink: "https://online.skytab.com/27a9f8ffb6c026e3cd788427bb7be984"
                        },
                        {
                            city: "Wixom",
                            address: "49078 W Pontiac Trail, Wixom, MI 48393",
                            mapsLink: "https://maps.app.goo.gl/kaG58qjmSZaWZK5D6",
                            reviewLink: "https://maps.app.goo.gl/NaQxnFLp31SRfnd96",
                            carryOutLink: "https://online.skytab.com/7ab0345563715d5eaba68fc5167afe2e"
                        },
                        {
                            city: "Roseville",
                            address: "18125 E. 10 Mile Rd, Roseville, MI 48066",
                            mapsLink: "https://maps.app.goo.gl/7n1FnKLzstCq41my7",
                            reviewLink: "https://maps.app.goo.gl/vAm8bdR31JEWFN547",
                            carryOutLink: "https://online.skytab.com/9006db71259cc460f96ec7e79a9de919"
                        },
                        {
                            city: "Waterford",
                            address: "7660 Highland Rd, Waterford Twp, MI 48327",
                            mapsLink: "https://maps.app.goo.gl/wTPmaEiR6tDT4FSeA",
                            reviewLink: "https://maps.app.goo.gl/EXVbNvP8a75dYPSi7",
                            carryOutLink: "https://online.skytab.com/51ecccdb9209beca59f5fbd773f9badb"
                        },
                        {
                            city: "Novi",
                            address: "39601 Grand River Avenue, Novi, MI 48375",
                            mapsLink: "https://maps.app.goo.gl/8xsah8pCXRUoDc3Y6",
                            reviewLink: "https://maps.app.goo.gl/kXqgve2Jz9e1ovDd6",
                            carryOutLink: "https://online.skytab.com/1a0d94fa53f1e6a854e1eba59b776b62"
                        },
                    ].map((location, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 box-border p-4 mb-6"> {/* Responsive width */}
                            <h4 className="text-lg font-extrabold uppercase">{location.city}, MI</h4>
                            <div className="mt-2 text-sm mb-3" style={{ overflowWrap: 'break-word' }}>
                                <a href={location.mapsLink} target="_blank" rel="noopener noreferrer" className="text-gray-800">
                                    {location.address}
                                </a>
                            </div>
                            <p className="flex flex-col sm:flex-row items-start"> {/* Updated to align items to the start */}
                                <a
                                    href={location.reviewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Google reviews"
                                    className="w-8 h-8 bg-[#c10e38] rounded-full flex items-center justify-center mr-2"
                                >
                                    <svg
                                        className="text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M23.65 12.49c-1.47 0-2.84.13-4.19.39-3.45.62-6.56 2.25-9.01 4.67l-1.1-1.1C11.78 12.31 17.16 9.66 23 9.66c3.66 0 7.11 1.16 9.94 3.18l-1.65 1.65c-2.25-1.63-4.96-2.73-7.69-2.73-2.59 0-4.82 1.04-6.5 2.66-.33.34-.63.7-.89 1.08-1.05.07-2.06.35-3.02.82-.14.05-.28.1-.42.14C8.5 19.4 6 25.65 6 32c0 2.75.75 5.33 2.16 7.61l1.1-1.1c-1.02-1.5-1.63-3.34-1.63-5.5 0-3.57 2.37-7.12 5.82-8.78 1.02-.6 2.17-.93 3.38-.93 2.66 0 5.09 1.2 6.74 3.08.15.18.31.34.47.49l1.6-1.6C26.67 14.22 25.22 12.49 23.65 12.49z"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href={location.carryOutLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-[#c10e38] text-sm py-2 px-4 rounded-full font-bold uppercase mt-2 sm:mt-0 sm:ml-2"
                                >
                                    Carry Out
                                </a>
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterLocations;
