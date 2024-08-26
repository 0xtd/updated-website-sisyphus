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
        title="Sisyphus Infotech | Affordable Digital Marketing, Website & App Development Solutions"
        description="Discover affordable digital services in Kolkata. We're your one-stop solution for high-quality online presence without breaking the bank"
        keywords="Elevate Your Online Presence with Sisyphus Infotech, Affordable Website, App Development & Digital Marketing in Kolkata"
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
