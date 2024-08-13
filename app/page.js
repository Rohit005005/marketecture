import Hero from "./_components/Hero";
import Services from "./_components/Services";
import CreativeMedia from "./_components/CreativeMedia";
import Marketing from "./_components/Marketing";
import Technology from "./_components/Technology";
import Companies from "./_components/Companies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CreativeMedia />
      <Marketing />
      <Technology />
      <Companies/>
    </div>
  );
}
