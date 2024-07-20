"use client";

import React from "react";
import Carousal from "@itseasy21/react-elastic-carousel";
import Image from "next/image";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];

const OurWorkSection = () => {
  return (
    <div className="container m-auto px-6 pt-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction mb-6">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Proudly{" "}
          <span className="inline-block text-callToAction font-bold">
            Delivered
          </span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          We've got you covered for all your web development and web design
          services. We actively endeavors to deliver excellence every step of
          the way to ensure client satisfaction.
        </p>
      </div>
      {/* carousal */}
      <div>
        <Carousal breakPoints={breakPoints} showArrows={false}>
          <Image
            src="/assets/images/our-work/black-demo-astro.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
          <Image
            src="/assets/images/our-work/black-demo-bot.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
          <Image
            src="/assets/images/our-work/black-demo-int.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
          <Image
            src="/assets/images/our-work/evonica.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
          <Image
            src="/assets/images/our-work/kirtankotha.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
          <Image
            src="/assets/images/our-work/steroviz.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
          <Image
            src="/assets/images/our-work/vidyastu.png"
            width={500}
            height={250}
            className="w-full"
            alt="Work work"
          />
        </Carousal>
      </div>
    </div>
  );
};

export default OurWorkSection;
