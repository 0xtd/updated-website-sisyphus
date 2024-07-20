import Image from "next/image";
import React from "react";

const OurMissionAndVisionSection = () => {
  return (
    <div className="container m-auto px-6 py-8 md:py-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Our <span className="text-callToAction font-bold">History</span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          Get to know more about us
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center">
        <Image
          src="/assets/images/about/about-history.png"
          width={320}
          height={320}
          alt="hero graphic"
          className="md:ml-12 block mt-8 md:mt-0 w-full md:w-[320px]"
        />
        <p className="text-textSecondary text-sm font-base mt-6 md:mt-0 md:ml-6 lg:ml-12 lg:pr-[280px]">
          In the fast-paced world of technology and digital innovation, Sisyphus
          Infotech emerges as a beacon of excellence, committed to providing
          top-notch services in web development, software and application
          development, and their respective maintenance. Founded in the year
          2023, Sisyphus Infotech has quickly established itself as a trusted
          name in the industry, thanks to its dedicated leadership and a team of
          highly skilled professionals.
          <br />
          <br />
          At Sisyphus Infotech, we specialize in website building and
          maintenance, both on the frontend and backend. We understand the
          significance of a well-crafted website in today's digital landscape.
          Whether you are looking to establish your online presence, revamp an
          existing website, or maintain and upgrade it, we have you covered.
        </p>
      </div>
    </div>
  );
};

export default OurMissionAndVisionSection;
