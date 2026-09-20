import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

import { services } from "../../data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Our Services"
            title="Cleaning made simple."
            description="Cleaning solutions for homes, offices, and the spaces that need a little extra care."
          />
        </div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-10 grid items-stretch gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="flex h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 rounded-2xl bg-[#29A4C3]/5 px-5 py-6 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6"
        >
          <div>
            <p className="font-bold text-slate-900">
              Not sure which service you need?
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Tell us what you need cleaned and we'll help you find the right
              service.
            </p>
          </div>

          <a
            href="/quote"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#29A4C3] px-5 text-sm font-bold text-white transition-all hover:bg-[#238fa9] sm:mt-0 sm:w-auto"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;