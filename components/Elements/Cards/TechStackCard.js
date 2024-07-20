import Image from "next/image";
import React from "react";

const TechStackCard = ({ imgSrc, text }) => {
  return (
    <div className="m-4">
      <div className="p-8 border-2 flex justify-center items-center border-callToAction rounded-lg mb-4 md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[140px] xl:w-[200px]">
        <Image src={imgSrc} width={40} height={40} alt={text} />
      </div>
      <h1 className={`uppercase text-base text-center`}>{text}</h1>
    </div>
  );
};

export default TechStackCard;
