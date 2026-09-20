import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuCheck,
  LuShieldCheck,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const serviceTypes = [
  "Residential cleaning",
  "Condo cleaning",
  "Office and commercial cleaning",
  "Housekeeping",
  "Sofa, bed, and carpet cleaning",
];

const serviceHighlights = [
  {
    icon: LuCheck,
    title: "Thorough care",
    description:
      "Detailed cleaning for the spaces that matter to you.",
  },
  {
    icon: LuShieldCheck,
    title: "Reliable service",
    description:
      "A straightforward cleaning experience built around your needs.",
  },
];

function ServiceTypes() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#29A4C3]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FFCC52]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-full bg-[#29A4C3]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#238fa9] sm:text-xs">
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-4 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:mt-5 sm:text-5xl lg:text-[3.25rem]"
            >
              Cleaning that fits your space.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8"
            >
              From routine cleaning to more detailed care, choose
              a service based on the space you have and the level of
              cleaning you need.
            </motion.p>

            {/* Service list */}
            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4"
            >
              {serviceTypes.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#29A4C3]/10 transition-colors duration-200 group-hover:bg-[#29A4C3]/15">
                    <LuCheck
                      size={15}
                      strokeWidth={2.5}
                      className="text-[#29A4C3]"
                    />
                  </div>

                  <span className="text-sm font-medium leading-7 text-slate-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 border-t border-slate-200 pt-7 sm:mt-9 sm:grid-cols-2 sm:gap-5 sm:pt-8"
            >
              {serviceHighlights.map(
                ({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                      <Icon
                        size={17}
                        strokeWidth={1.9}
                        className="text-slate-700"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-9"
            >
              <Link
                to="/quote"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#29A4C3]/40 focus:ring-offset-2"
              >
                Tell us what you need

                <LuArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#29A4C3]/10 via-slate-50 to-[#FFCC52]/20 shadow-sm ring-1 ring-slate-200/70 sm:rounded-[2rem]">
              {/* Decorative shapes */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[24px] border-white/50"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#29A4C3]/10"
              />

              {/* Main visual */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white shadow-lg ring-1 ring-slate-200/80 sm:h-24 sm:w-24">
                    <div className="h-11 w-11 rounded-xl bg-[#29A4C3]/10 sm:h-12 sm:w-12" />
                  </div>

                  <p className="mt-5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    Cleaning Made Simple
                  </p>

                  <p className="mt-1.5 text-sm text-slate-500">
                    Practical care for everyday spaces
                  </p>
                </div>
              </div>

              {/* Floating coverage card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                      Service options
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-slate-900 sm:text-base">
                      Homes{" "}
                      <span className="text-slate-300">•</span>{" "}
                      Condos{" "}
                      <span className="text-slate-300">•</span>{" "}
                      Offices
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/10">
                    <LuCheck
                      size={19}
                      strokeWidth={2.5}
                      className="text-[#29A4C3]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating detail */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-5 right-4 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block lg:-right-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFCC52]/20">
                  <LuCheck
                    size={16}
                    strokeWidth={2.5}
                    className="text-amber-600"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Care for every space
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Flexible cleaning options
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceTypes;