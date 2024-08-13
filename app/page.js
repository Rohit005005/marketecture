import Hero from "./_components/Hero";
import Services from "./_components/Services";
import CreativeMedia from "./_components/CreativeMedia";
import Marketing from "./_components/Marketing";
import Technology from "./_components/Technology";
import Companies from "./_components/Companies";
import GroupPhotos from "./_components/GroupPhotos";
import Projects from "./_components/Projects";
import ReadyToBuild from "./_components/ReadyToBuild";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      {/* <CreativeMedia />
      <Marketing />
      <Technology /> */}
      <ReadyToBuild/>
      <Projects/>
      <GroupPhotos/>
    </div>
  );
}
