import React from "react";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";
import { CgWebsite } from "react-icons/cg";
import { HiSpeakerphone } from "react-icons/hi";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const ServicesSection = () => {
  return (
    <div className="container m-auto px-6 pt-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Our{" "}
          <span className="inline-block text-callToAction font-bold">
            Services
          </span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          Discover affordable web development and digital marketing services in
          kolkata. We're your one-stop solution for high-quality online presence
          without breaking the bank.
        </p>
      </div>
      <div className="mt-14 md:flex justify-between items-center">
        <div className="bg-secondary p-4 rounded mb-8 md:mb-0 md:w-[33.3%] h-[210px]">
          <CgWebsite
            size={60}
            className="bg-primary p-4 rounded-full mt-[-40px]"
          />
          <div className="mt-4">
            <p className="text-white text-lg font-semibold capitalize md:text-base lg:text-lg">
              Website Development
            </p>
            <p className="text-sm text-callToAction font-normal mt-2">
              Building digital experiences that drive business outcomes, using
              the latest technologies and trends.
            </p>
          </div>
        </div>
        <div className="bg-secondary h-[210px] md:w-[33.3%] p-4 rounded mb-8 md:mb-0 md:mx-4 lg:mx-12">
          <HiSpeakerphone
            size={60}
            className="bg-primary p-4 rounded-full mt-[-40px]"
          />
          <div className="mt-4">
            <p className="text-white text-lg font-semibold capitalize md:text-base lg:text-lg">
              Digital Marketing
            </p>
            <p className="text-sm text-callToAction font-normal mt-2">
              Connecting with customers where they spend time online, using data
              and creativity to drive results.
            </p>
          </div>
        </div>
        <div className="bg-secondary p-4 h-[210px] md:w-[33.3%] rounded">
          <HiAdjustmentsVertical
            size={60}
            className="bg-primary p-4 rounded-full mt-[-40px] text-white"
          />
          <div className="mt-4">
            <p className="text-white text-lg font-semibold capitalize md:text-base lg:text-lg">
              Software Development
            </p>
            <p className="text-sm text-callToAction font-normal mt-2">
              Creating innovative solutions to meet evolving user needs, using
              agile methodologies and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
