import Hero from "./_components/Hero";
import Services from "./_components/Services";
import CreativeMedia from "./_components/CreativeMedia";
import Marketing from "./_components/Marketing";
import Technology from "./_components/Technology";
import Animation from "./_components/animation";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CreativeMedia />
      <Marketing />
      <Technology />
    </div>
  );
}
