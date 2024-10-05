"use client"; // Next.js 13+ syntax for client components


import imgBackground from '../images/tenders.jpg'; // Background image URL
// Update with the correct image path

const BoxTendersMeal = () => {
    return (
        <div 
            className="py-12 bg-cover bg-center md:block hidden" 
            style={{ backgroundImage: `url(${imgBackground.src})` }}  // Background applied via `src`
        >
            <div className="w-11/12 md:w-3/4 mx-auto">
                <div className=" mb-8">
                    <h3 className="text-4xl font-black">Box Tenders Meal</h3>
                    <div className="text-2xl mt-2 bg-red-600 text-white inline-block p-2 italic">Original or Spicy</div>
                    <p className="mt-5 text-lg text-gray-800">
                        Comes with Tenders, Small Side<br /> &amp; Fountain Drink.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row  md:justify-start">
                    <div className="flex flex-col  md:items-start mr-8">
                        <p className="text-3xl text-red-800 font-black">$10.99</p>
                        <p className="text-lg text-gray-800">3 pieces</p>
                    </div>
                    <div className="flex flex-col  md:items-start">
                        <p className="text-3xl text-red-800 font-black">$12.99</p>
                        <p className="text-lg text-gray-800">5 pieces</p>
                    </div>
                </div>
                <div className="mt-8 ">
                    <a 
                        href="locations.php" 
                        className="inline-block px-10 py-4 bg-red-600 text-white font-bold rounded-full text-lg uppercase transition duration-200 ease-in-out hover:bg-red-700"
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BoxTendersMeal;
