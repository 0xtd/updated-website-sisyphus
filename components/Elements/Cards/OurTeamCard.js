"use client";

import Image from "next/image";
import React from "react";
import Carousal from "@itseasy21/react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 2, itemsToScroll: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5, itemsToScroll: 5 },
  { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
];

const OurTeamCard = ({
  isReverse = false,
  text,
  numberIconComponent,
  imgLinks = [],
}) => {
  return (
    <div
      className={`w-full mt-8 bg-secondary rounded p-6 lg:p-14 md:flex justify-between items-center ${
        isReverse ? "flex-row-reverse " : "flex-row"
      }`}
    >
      <div
        className={
          isReverse
            ? "flex flex-col justify-end items-end text-end md:pl-6"
            : "md:pr-6"
        }
      >
        {numberIconComponent}
        <p className="mt-6 text-base font-semibold font-Josefin">{text}</p>
      </div>
      <Carousal
        breakPoints={breakPoints}
        showArrows={false}
        className="mt-4 md:mt-0"
      >
        {imgLinks.map((img, index) => (
          <Image
            src={img}
            key={index}
            width={320}
            height={220}
            className="block w-[95%] h-[240px] rounded"
            alt="Team member photo"
          />
        ))}
      </Carousal>
    </div>
  );
};

export default OurTeamCard;
