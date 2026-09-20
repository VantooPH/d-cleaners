import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import WhyUs from "../components/home/WhyUs";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <main className="overflow-hidden bg-[#FBFFFF] text-slate-900">
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

export default Home;