import Image from "next/image";
import React from "react";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className="container m-auto px-6 py-8 md:py-14 font-Poppins">
      <div className="md:flex justify-between items-center">
        <div className="min-w-[48%]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
            We Make <span className="text-callToAction font-bold">Your</span>{" "}
            Website Better.
          </h1>
          <br />
          <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
            Welcome to Sisyphus Infotech - Your Partner in Web Development,
            Software, and Application Services
          </p>
        </div>
        <Image
          src="/assets/images/about/about-hero.png"
          width={320}
          height={320}
          alt="hero graphic"
          className="md:ml-12 block mt-8 md:mt-0 w-full md:w-[320px]"
        />
      </div>
      <br />
      <br />
      <div className="flex justify-center items-center md:justify-start">
        <CallToActionButton btnText="Contact" />
      </div>
      <div className="mt-24 flex justify-center md:justify-start items-center">
        <div className="flex justify-start items-center">
          <TbTruckDelivery className="text-callToAction" size={30} />
          <div className="ml-4">
            <p className="uppercase font-semibold text-sm">On-time Delivery</p>
            <p className="text-xs text-secondary mt-1">
              We Know the value of time
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center ml-6">
          <VscWorkspaceTrusted className="text-callToAction" size={30} />
          <div className="ml-4">
            <p className="uppercase font-semibold text-sm">
              Quality Guaranteed
            </p>
            <p className="text-xs text-secondary mt-1">We believe in quality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
