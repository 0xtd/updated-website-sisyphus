import React from "react";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container m-auto px-6 py-8 md:py-14 font-Poppins">
      <div className="md:flex justify-between items-center">
        <div className="">
          <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
            We{" "}
            <span className="inline-block text-callToAction font-bold">
              Design
            </span>{" "}
            Dreams: <br /> Transforming ideas into{" "}
            <span className="inline-block text-callToAction font-bold">
              Digital Excellence.
            </span>{" "}
          </h1>
          <br />
          <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
            Affordable Web Development & Digital Marketing Services
          </p>
        </div>
        <Image
          src="/assets/images/hero.gif"
          width={420}
          height={420}
          alt="hero graphic"
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
