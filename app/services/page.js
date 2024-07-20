import OurServicesSection from "../../components/Services/OurServicesSection";
import HeroSection from "../../components/Services/HeroSection";
import React from "react";
import CustomHead from "../../utils/CustomHead";

const Services = () => {
  return (
    <>
      <CustomHead
        title="Our Services | Affordable Web Development and Digital Marketing in Kolkata"
        description="Explore our comprehensive services for affordable web development and digital marketing in Kolkata. Discover how we can boost your online presence without breaking your budget."
        keywords="Empowering Your Digital Success through Full Stack Development, Best Digital Marketing Solutions at Affordable Budget, Make Your Website high ranking by best On Page SEO Solutions, Best Social Media Marketing"
      />
      <main className="overflow-hidden">
        <HeroSection />
        <OurServicesSection />
      </main>
    </>
  );
};

export default Services;
