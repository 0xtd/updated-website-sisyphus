import Image from "next/image";
import React from "react";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";

const HeroSection = () => {
  return (
    <div className="container m-auto px-6 py-8 md:py-14 font-Poppins">
      <div className="md:flex justify-between items-center">
        <div className="min-w-[48%]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
            Harness the{" "}
            <span className="text-callToAction font-bold">Power</span> of
            Technology to{" "}
            <span className="text-callToAction font-bold">Achieve</span> Your{" "}
            <span className="text-callToAction font-bold">Business</span> Goals.
          </h1>
          <br />
          <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
            Technology revolution services help businesses adopt the latest
            technologies to improve efficiency, productivity, and customer
            experience. We specialize in Website Development and Digital
            Marketing
          </p>
        </div>
        <Image
          src="/assets/images/services/hero.png"
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
    </div>
  );
};

export default HeroSection;
