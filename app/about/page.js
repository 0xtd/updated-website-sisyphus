import OurMissionAndVisionSection from "../../components/About/OurMissionAndVisionSection";
import HeroSection from "../../components/About/HeroSection";
import React from "react";
import OurTeamSection from "../../components/About/OurTeamSection";
import AchievementSection from "../../components/About/AchievementSection";
import CustomHead from "../../utils/CustomHead";

const About = () => {
  return (
    <>
      <CustomHead
        title="Meet Our Team and Mission at Kolkata's Most Trusted Web Development and Digital Marketing Agency"
        description="Get to know our dedicated team and our commitment to providing top-notch yet affordable web development and digital marketing services in Kolkata. Discover how we can elevate your online presence today"
        keywords="Meet the Team Behind Your Affordable Online Presence, Our Team Provides Best Digital Solutions in Kolkata"
      />
      <main>
        <HeroSection />
        <OurMissionAndVisionSection />
        <OurTeamSection />
        <AchievementSection />
      </main>
    </>
  );
};

export default About;
