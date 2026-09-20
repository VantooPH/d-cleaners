import { motion } from "framer-motion";
import {
  LuBadgeCheck,
  LuBuilding2,
  LuCheck,
  LuHouse,
  LuImage,
} from "react-icons/lu";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: LuHouse,
    title: "Residential",
    description: "Homes and living spaces",
  },
  {
    icon: LuBuilding2,
    title: "Commercial",
    description: "Offices and workspaces",
  },
  {
    icon: LuBadgeCheck,
    title: "Specialized",
    description: "Deep cleaning services",
  },
];

const services = [
  "Routine cleaning",
  "Deep cleaning",
  "Furniture cleaning",
  "Mattress & bed cleaning",
];

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#FBFFFF] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Visual */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="relative order-2 mx-auto w-full max-w-lg lg:order-1 lg:max-w-none"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-100 sm:aspect-square sm:rounded-[2rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#29A4C3]/10 via-white to-[#FFCC52]/15" />

              {/* Photo placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-slate-200/80 sm:h-24 sm:w-24">
                    <LuImage
                      size={38}
                      strokeWidth={1.5}
                      className="text-slate-400 sm:size-[44px]"
                    />
                  </div>

                  <p className="mt-5 text-sm font-semibold text-slate-500">
                    Photo Placeholder
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Add a service photo here
                  </p>
                </div>
              </div>

              {/* Bottom information card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
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
                  duration: 0.55,
                  delay: 0.35,
                }}
                className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/10">
                    <LuBadgeCheck
                      size={19}
                      className="text-[#29A4C3]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Cleaning for every space
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Home, office & specialized services
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative block */}
            <div className="absolute -bottom-4 -right-3 -z-10 h-28 w-28 rounded-3xl bg-[#FFCC52]/50 sm:-bottom-5 sm:-right-5 sm:h-36 sm:w-36" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#29A4C3] sm:text-sm sm:tracking-[0.2em]"
            >
              About Our Services
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl"
            >
              A cleaner space starts with the right care.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8"
            >
              We provide practical cleaning solutions designed around
              different spaces, routines, and levels of care. From
              everyday upkeep to more detailed cleaning, the goal is
              simple: help make your space cleaner and more comfortable.
            </motion.p>

            {/* Service types */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm sm:block sm:p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/10 text-[#29A4C3] sm:h-10 sm:w-10">
                      <Icon size={18} />
                    </div>

                    <div className="sm:mt-3">
                      <p className="text-sm font-bold text-slate-900">
                        {feature.title}
                      </p>

                      <p className="mt-0.5 text-xs leading-5 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Key points */}
            <motion.div
              variants={fadeUp}
              className="mt-8 border-t border-slate-200 pt-7 sm:mt-9 sm:pt-8"
            >
              <p className="text-sm font-bold text-slate-900">
                What we can help with
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#29A4C3]/10">
                      <LuCheck
                        size={14}
                        strokeWidth={2.5}
                        className="text-[#29A4C3]"
                      />
                    </span>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;