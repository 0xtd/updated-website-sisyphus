import React from "react";
import Image from "next/image";

const OurServiceCard = ({
  graphicUrl,
  iconUrl,
  title,
  subTitle,
  isReverse = false,
}) => {
  return (
    <div className="px-6 py-14">
      <div
        className={`flex flex-col ${
          isReverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center`}
      >
        <Image
          src={graphicUrl}
          width={420}
          height={420}
          alt="ux design graphic"
        />
        <div className="bg-secondary mt-6 md:mt-0">
          <div
            className={`flex ${
              isReverse ? "justify-start" : "justify-end"
            } items-start`}
          >
            <Image
              src={iconUrl}
              width={50}
              height={50}
              alt="ux icon"
              className="w-[30px]"
            />
          </div>
          <div className="p-4 lg:p-8">
            <h1 className="text-base md:text-lg font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-callToAction text-sm md:text-base lg:text-lg">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
