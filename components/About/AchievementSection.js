import React from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GiUnstableProjectile } from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";

const AchievementSection = () => {
  return (
    <div className="container m-auto px-6 py-8 md:py-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Our <span className="text-callToAction font-bold">Achievements</span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          Our achievements in web development and digital marketing are a
          testament to our ability to help businesses grow and succeed.
        </p>
      </div>

      <div className="flex justify-between items-center mt-14">
        <div className="flex flex-col justify-center items-center">
          <BiHappyHeartEyes className="text-callToAction" size={35} />
          <p className="text-sm md:text-base font-semibold uppercase text-textSecondary my-2 text-center">
            Happy Clients
          </p>
          <p className="text-2xl font-extrabold font-Poppins text-callToActionDark">
            25
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GiUnstableProjectile className="text-callToAction" size={35} />
          <p className="text-sm md:text-base font-semibold uppercase text-textSecondary my-2 text-center">
            Projects Completed
          </p>
          <p className="text-2xl font-extrabold font-Poppins text-callToActionDark">
            40
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineCoffee className="text-callToAction" size={35} />
          <p className="text-sm md:text-base font-semibold uppercase text-textSecondary my-2 text-center">
            Cup of Coffee
          </p>
          <p className="text-2xl font-extrabold font-Poppins text-callToActionDark">
            600
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
