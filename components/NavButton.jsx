import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const NavButton = ({ btnText }) => {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const arrow = arrowRef.current;

    // GSAP animation for hover effect
    button.addEventListener('mouseover', () => {
      gsap.to(arrow, {
        x: 3, // Move the arrow 8px to the right
        duration: 0.3,
        ease: "power2.out"
      });
    });

    button.addEventListener('mouseout', () => {
      gsap.to(arrow, {
        x: 0, // Reset the arrow position
        duration: 0.3,
        ease: "power2.out",
        backgroundColor: "white"
      });
    });

    return () => {
      button.removeEventListener('mouseover', () => {});
      button.removeEventListener('mouseout', () => {});
    };
  }, []);

  return (
    <button
      className="border border-white text-white flex flex-row items-center justify-between w-36 py-1 px-2 rounded-full text-sm focus:outline-none focus:shadow-outline hover:bg-white hover:text-black"
      ref={buttonRef}
    >
      {btnText}
      <span className="bg-white text-black rounded-full p-2" ref={arrowRef}>
        {/* Arrow icon - You can use a font icon or an SVG here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
};

export default NavButton;