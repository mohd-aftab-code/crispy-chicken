"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo1 from '../slider-logo/1-box-meals-family-crispy-chicken-meals (1).jpg';
import logo2 from '../slider-logo/2-burgers-combos-menu.jpg';
import logo3 from '../slider-logo/4-specialty-chicken-waffle.jpg';
import logo4 from '../slider-logo/5-salads-chicken-caesar-salad.jpg';
import logo5 from '../slider-logo/6-kids-meals-kids-chicken-tenders-and-fries.jpg';
import logo6 from '../slider-logo/7-sides.jpg';
import logo7 from '../slider-logo/8-shakes-and-drinks.jpg';

const PackagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { href: "specialty.php", imgSrc: logo1, label: "specialty" },
    { href: "salads.php", imgSrc: logo2, label: "salads" },
    { href: "kids-meal.php", imgSrc: logo3, label: "kids meals" },
    { href: "sides.php", imgSrc: logo4, label: "sides" },
    { href: "shakes-drinks.php", imgSrc: logo5, label: "Shakes" },
    { href: "box-meals.php", imgSrc: logo6, label: "box meals" },
    { href: "burgers.php", imgSrc: logo7, label: "burgers" },
    // Duplicate items to create a continuous scroll effect
    { href: "chicken.php", imgSrc: logo2, label: "chicken" },
    { href: "shakes-drinks.php", imgSrc: logo5, label: "Shakes" },
    { href: "box-meals.php", imgSrc: logo6, label: "box meals" },
    { href: "kids-meal.php", imgSrc: logo3, label: "kids meals" },
    { href: "sides.php", imgSrc: logo4, label: "sides" },
    { href: "shakes-drinks.php", imgSrc: logo5, label: "Shakes" },
    { href: "box-meals.php", imgSrc: logo6, label: "box meals" },
    { href: "burgers.php", imgSrc: logo7, label: "burgers" },
    { href: "chicken.php", imgSrc: logo2, label: "chicken" },
    { href: "shakes-drinks.php", imgSrc: logo5, label: "Shakes" },
    { href: "box-meals.php", imgSrc: logo6, label: "box meals" },
    { href: "chicken.php", imgSrc: logo2, label: "chicken" },
    { href: "shakes-drinks.php", imgSrc: logo5, label: "Shakes" },
    { href: "box-meals.php", imgSrc: logo6, label: "box meals" },
    { href: "kids-meal.php", imgSrc: logo3, label: "kids meals" },
    { href: "sides.php", imgSrc: logo4, label: "sides" },
    { href: "shakes-drinks.php", imgSrc: logo5, label: "Shakes" },
    { href: "box-meals.php", imgSrc: logo6, label: "box meals" },
  ];

  const itemsPerView = 5; // Display five items at a time
  const totalItems = items.length;

  // Effect for automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < totalItems - itemsPerView) {
          return prevIndex + itemsPerView; // Move to the next set of items
        }
        return 0; // Loop back to the first set
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalItems]);

  return (
    <div className="py-8">
      <div className="w-14/12 mx-auto">
      

        <div className="relative overflow-hidden z-10 touch-action-manipulation">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentIndex * 100) / totalItems}%)` // Move based on the current index
            }}
          >
            {/* Render the items */}
            {items.map((item) => (
              <div key={item.label} className="flex-shrink-0 w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5"> {/* Responsive width */}
                <div className="mb-5 w-full h-64 sm:h-80 md:h-80 lg:h-80 xl:h-80"> {/* Increased height for larger images */}
                  <a href={item.href} className="text-gray-800 no-underline">
                    <Image
                      src={item.imgSrc}
                      alt={item.label}
                      title={item.label}
                      layout="responsive"
                      width={600}  
                      height={400}  
                      className="rounded-full"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
