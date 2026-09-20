import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutCoverage from "../components/about/AboutCoverage";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <main className="overflow-hidden bg-[#FBFFFF] text-slate-900">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCoverage />
      <AboutCTA />
    </main>
  );
}

export default About;