import React from "react";
import OurTeamCard from "../Elements/Cards/OurTeamCard";
import { PiNumberCircleFiveBold } from "react-icons/pi";
import CallToActionButton from "../Elements/Buttons/CallToActionButton";

const OurTeamSection = () => {
  return (
    <div className="container m-auto px-6 py-8 md:py-14 font-Poppins">
      <div className="border-l-4 p-4 border-callToAction">
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] text-white capitalize">
          Our <span className="text-callToAction font-bold">Team</span>
        </h1>
        <p className="text-textSecondary text-base md:text-xl lg:text-3xl">
          A team united by shared values
        </p>
      </div>

      <OurTeamCard
        text="Professionals in our team"
        numberIconComponent={<PiNumberCircleFiveBold size={50} />}
        imgLinks={[
          "/assets/team-members/nirmalya.png",
          "/assets/team-members/priyam.png",
          "/assets/team-members/sharmistha.png",
          "/assets/team-members/arijit.png",
          "/assets/team-members/tushar.png",
        ]}
      />
      <div className="flex justify-end mt-14">
        <CallToActionButton btnText="Contact" />
      </div>
    </div>
  );
};

export default OurTeamSection;
