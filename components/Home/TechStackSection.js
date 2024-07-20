import React from "react";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";
import TechStackCard from "../Elements/Cards/TechStackCard";
import Image from "next/image";

const TechStackSection = () => {
  return (
    <div className="container m-auto px-6 py-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction mb-6">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Technical{" "}
          <span className="inline-block text-callToAction font-bold">
            Stack
          </span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          Craft rich user experience and drive business growth with our
          top-notch MERN Stack and WordPress services.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap md:justify-between">
        <TechStackCard
          imgSrc="/assets/images/tech-stack/mongo.png"
          text="Mongo Db"
        />
        <TechStackCard
          imgSrc="/assets/images/tech-stack/express.png"
          text="Express Js"
        />
        <TechStackCard
          imgSrc="/assets/images/tech-stack/react.png"
          text="React Js"
        />
        <TechStackCard
          imgSrc="/assets/images/tech-stack/node.png"
          text="Node Js"
        />
        <TechStackCard
          imgSrc="/assets/images/tech-stack/next.png"
          text="Next Js"
        />
      </div>
      <div className="m-4">
        <div className="p-4 md:p-8 border-2 flex items-center border-callToAction rounded-lg mb-8 md:mb-14">
          <div className="mr-4 md:mr-8">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/assets/images/tech-stack/wp.png"
                width={50}
                height={50}
                alt="Wordpress logo"
              />
            </div>
            <h1 className="font-Josefin text-sm md:text-base">WordPress</h1>
          </div>
          <div className="border-l-2 px-4 md:px-8 border-callToAction">
            <h1 className={`uppercase text-sm md:text-base lg:text-xl mb-2`}>
              Less Budget?
            </h1>
            <p className="text-textSecondary text-sm md:text-base lg:text-lg">
              Get the best out of WordPress development service from us.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex justify-center items-center md:justify-end">
        <CallToActionButton btnText="Get Quote" />
      </div>
    </div>
  );
};

export default TechStackSection;
