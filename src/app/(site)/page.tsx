import AboutSection from "@/components/home/AboutSection";
import CoursesGrid from "@/components/home/CoursesGrid";
import EnrollBanner from "@/components/home/EnrollBanner";
import HeroSlider from "@/components/home/HeroSlider";
import StatsStrip from "@/components/home/StatsStrip";
import Testimonials from "@/components/home/Testimonials";
import ThreeColumnSection from "@/components/home/ThreeColumnSection";
import StructuredData from "@/components/seo/StructuredData";
import "@/styles/home.css";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="container">
        <HeroSlider />
        <StatsStrip />
        <EnrollBanner />
        <AboutSection />
        <CoursesGrid />
        <ThreeColumnSection />
        <Testimonials />
      </div>
    </>
  );
}
