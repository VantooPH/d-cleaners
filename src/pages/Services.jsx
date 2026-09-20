import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServiceTypes from "../components/services/ServiceTypes";
import ServicesCTA from "../components/services/ServicesCTA";

function Services() {
  return (
    <main className="overflow-hidden bg-[#FBFFFF] text-slate-900">
      <ServicesHero />
      <ServicesGrid />
      <ServiceTypes />
      <ServicesCTA />
    </main>
  );
}

export default Services;