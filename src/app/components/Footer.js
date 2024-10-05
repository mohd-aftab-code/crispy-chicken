import Image from 'next/image';
import logo from '../images/fooLogo.png';

const Footer = () => {
    return (
        <div className="py-10 md:py-20 bg-[#2c1013] w-full">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col md:flex-row justify-between text-gray-400">
                    {/* First Column */}
                    <div className="flex flex-col w-full md:w-1/3 mb-8 md:mb-0 text-left">
                        <a href="./" title="Home" className="text-gray-400 no-underline">
                            <Image
                                loading="lazy"
                                src={logo}
                                alt="1111 Crispy Chicken & Burgers Logo"
                                title="1111 Crispy Chicken & Burgers Logo"
                                width={250}
                                height={40}
                                className="mx-auto md:mx-0 mb-4" // Adjusted margin for better spacing
                            />
                        </a>
                        <h3 className="text-white text-base md:text-lg font-bold mb-4">
                            <a href="./" className="no-underline text-white">
                                11/11 Crispy Chicken <span className="hidden sm:inline">& Burgers</span>
                            </a>
                        </h3>
                        <ul className="flex justify-center space-x-4 md:space-x-5 mb-4">
                            {/* Social Media Links */}
                            <li>
                                <a
                                    href="https://www.facebook.com/CrispyChickenBurgers/"
                                    target="_blank"
                                    title="Facebook"
                                    className="w-10 h-10 md:w-12 md:h-12 bg-[#c90e38] rounded-full flex items-center justify-center no-underline"
                                >
                                    <i className="fab fa-facebook text-white text-sm md:text-xl"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/1111crispychickenandburgers/"
                                    target="_blank"
                                    title="Instagram"
                                    className="w-10 h-10 md:w-12 md:h-12 bg-[#c90e38] rounded-full flex items-center justify-center no-underline"
                                >
                                    <i className="fab fa-instagram text-white text-sm md:text-xl"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/crispy11chicken"
                                    target="_blank"
                                    title="X"
                                    className="w-10 h-10 md:w-12 md:h-12 bg-[#c90e38] rounded-full flex items-center justify-center no-underline"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="h-4 w-4 md:h-5 md:w-5 text-white"
                                    >
                                        <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col w-full md:w-1/3 text-left pt-5">
                        <h4 className="text-white text-lg md:text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="./" className="text-white text-lg md:text-2xl font-bold mb-2">Home</a>
                            </li>
                            <li>
                                <a href="./menu" className="text-white text-lg md:text-2xl font-bold mb-2">Menu</a>
                            </li>
                            <li>
                                <a href="./location" className="text-white text-lg md:text-2xl font-bold mb-2">Location</a>
                            </li>
                            <li>
                                <a
                                    href="./order"
                                    className="inline-block bg-red-600 text-white text-lg md:text-2xl font-bold py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-red-700 transition duration-300"
                                >
                                    Order Now
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="flex flex-col w-full md:w-1/3 text-left pt-5">
                        <h4 className="text-white text-lg md:text-xl font-bold mb-4">Box Meals</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">Classic Burger</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">Cheeseburger</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">Grilled Chicken Burger</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">Double Patty Burger</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">Veggie Burger</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">BBQ Chicken Burger</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-white text-lg md:text-2xl font-bold mb-2">Fish Burger</a>
                            </li>
                            <li>
                                <a href="mailto:info@crispychicken.com" className="text-white text-lg md:text-2xl font-bold mb-2">Spicy Chicken Burger</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-white mt-10 md:mt-12 text-sm md:text-base">
                    &copy; {new Date().getFullYear()} 11/11 Crispy Chicken & Burgers. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
