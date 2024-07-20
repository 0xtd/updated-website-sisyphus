import React from "react";
import Link from "next/link";

const CallToActionButton = ({ btnText }) => {
  {
    /*This button should used inside a flex container, otherwise you will see unexpected behavior */
  }
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[42px] h-[42px] md:w-[80px] md:h-[80px] border-2 border-callToAction rounded-full bg-callToActionDark"></div>
      </div>
      <Link
        href="/contact"
        className="block transform-right animate-spin z-40 text-[16px] font-medium md:text-[26px] font-Josefin"
        style={{ animationDuration: 10 + "s" }}
      >
        {btnText}
      </Link>
    </div>
  );
};

export default CallToActionButton;
