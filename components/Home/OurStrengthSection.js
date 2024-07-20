import React from "react";
import OurStrengthCard from "../Elements/Cards/OurStrengthCard";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";

const OurStrengthSection = () => {
  return (
    <div className="container m-auto px-6 py-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction mb-6">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Our{" "}
          <span className="inline-block text-callToAction font-bold">
            Strength
          </span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          If you are searching for a team rather than a company, you have
          certainly hit the right target!
        </p>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <OurStrengthCard
          title="Cost Effective"
          subTitle="One stop solution"
          imgPath="/assets/our-strength/cost.png"
        />
        <OurStrengthCard
          title="Dedicated"
          subTitle="Fully in-house team"
          imgPath="/assets/our-strength/dedicated.png"
        />
        <OurStrengthCard
          title="Service Oriented"
          subTitle="Always reachable"
          imgPath="/assets/our-strength/service.png"
        />
        <OurStrengthCard
          title="Detail Oriented"
          subTitle="Top quality grunted"
          imgPath="/assets/our-strength/detail.png"
        />
      </div>
      <div className="flex justify-center items-center mt-12 md:mt-16 md:justify-end">
        <CallToActionButton btnText="Contact" />
      </div>
    </div>
  );
};

export default OurStrengthSection;
