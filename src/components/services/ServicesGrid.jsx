import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

import { services } from "../../data/services";

const fadeUp = {
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function ServicesGrid() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#29A4C3] sm:text-sm"
          >
            What We Offer
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-5xl"
          >
            Cleaning services made for your space.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8"
          >
            Choose the service that fits your needs, from everyday
            cleaning to more specialized care.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#29A4C3]/30 hover:shadow-xl hover:shadow-slate-200/60 active:scale-[0.99] sm:min-h-[285px] sm:rounded-3xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#29A4C3]/10 text-[#29A4C3] transition-all duration-300 group-hover:bg-[#29A4C3] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                    {ServiceIcon && <ServiceIcon size={21} />}
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.18em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {service.description}
                </p>

                <Link
                  to="/quote"
                  className="mt-6 inline-flex min-h-10 w-fit items-center gap-2 rounded-lg py-2 text-sm font-semibold text-[#238fa9] transition-colors hover:text-[#1c7f96]"
                >
                  Request a quote
                  <LuArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesGrid;