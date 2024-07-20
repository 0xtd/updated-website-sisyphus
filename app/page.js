import ServicesSection from "../components/Home/ServicesSection";
import HeroSection from "../components/Home/HeroSection";
import TechStackSection from "../components/Home/TechStackSection";
import OurStrengthSection from "../components/Home/OurStrengthSection";
import OurWorkSection from "../components/Home/OurWorkSection";
import CustomHead from "../utils/CustomHead";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Sisyphus | Affordable Web Development and Digital Marketing Solutions"
        description="Discover affordable web development and digital marketing services in Kolkata. We're your one-stop solution for high-quality online presence without breaking the bank"
        keywords="Elevate Your Online Presence with Sisyphus, Affordable Web Development & Digital Marketing in Kolkata"
      />
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <OurWorkSection />
        <OurStrengthSection />
      </main>
    </>
  );
}
