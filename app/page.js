import Hero from "./_components/Hero";
import Services from "./_components/Services";
import CreativeMedia from "./_components/CreativeMedia";
import Marketing from "./_components/Marketing";
import Technology from "./_components/Technology";
import Companies from "./_components/Companies";
import GroupPhotos from "./_components/GroupPhotos";
import Projects from "./_components/Projects";
import ReadyToBuild from "./_components/ReadyToBuild";
import WorkProcess from "./_components/WorkProcess";
import Testimonies from "./_components/Testimonies";
import Footer from "./_components/Footer";
import MarketingComponent from "./_components/MarketingComponent";
// import FixedLayout from "./_components/ServicesLayout";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FixedLayout /> */}
      <Services />
      <CreativeMedia />
      <Marketing />
      <Technology />
      <ReadyToBuild />
      <Projects />
      <WorkProcess />
      <GroupPhotos />
      <Testimonies />
      <div className="border-t border-gray-400"></div>
      <MarketingComponent />
      <Footer />
    </div>
  );
}
