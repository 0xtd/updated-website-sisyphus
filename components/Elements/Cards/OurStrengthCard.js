import React from "react";
import Image from "next/image";

const OurStrengthCard = ({ title, subTitle, imgPath }) => {
  return (
    <div className="bg-secondary rounded h-[180px] p-6 w-[49%] mt-2 md:mt-4">
      <Image src={imgPath} alt={title} width={40} height={40} />
      <div className="mt-4 md:mt-6">
        <h1 className="text-base md:text-lg font-bold text-white">{title}</h1>
        <p className="text-xs md:text-sm font-normal text-callToAction">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default OurStrengthCard;
