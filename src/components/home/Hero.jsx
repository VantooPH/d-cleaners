import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuCheck,
  LuClock3,
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
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBFFFF] pt-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-[#29A4C3]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-[#FFCC52]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[42%] top-[28%] h-24 w-24 rounded-full bg-[#29A4C3]/5 blur-2xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-20">
        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center rounded-full border border-[#29A4C3]/20 bg-white px-3.5 py-2 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#238fa9]">
              Professional Cleaning Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-5xl font-bold leading-[1.03] tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-[4.5rem]"
          >
            A cleaner space.
            <span className="block text-[#29A4C3]">
              A better everyday.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Professional cleaning services designed to keep homes,
            workplaces, and everyday spaces fresh, comfortable, and
            well cared for.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#29A4C3] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#29A4C3]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#238fa9] hover:shadow-xl hover:shadow-[#29A4C3]/25"
            >
              Get a Quote

              <LuArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#29A4C3]/30 hover:bg-slate-50"
            >
              Explore Services

              <LuArrowRight
                size={16}
                className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#29A4C3]"
              />
            </Link>
          </motion.div>

          {/* Trust points */}
          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/10">
                <LuShieldCheck
                  size={19}
                  className="text-[#29A4C3]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Reliable Service
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Care you can count on
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFCC52]/30">
                <LuClock3
                  size={19}
                  className="text-slate-800"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Flexible Scheduling
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Cleaning when you need it
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl shadow-slate-300/30">
            {/* Demo image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#29A4C3]/15 via-white to-[#FFCC52]/20" />

            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white shadow-lg ring-1 ring-slate-200/80 sm:h-24 sm:w-24">
                  <div className="h-11 w-11 rounded-xl bg-[#29A4C3]/10 sm:h-12 sm:w-12" />
                </div>

                <p className="mt-5 text-sm font-bold text-slate-700 sm:text-base">
                  Cleaning Services
                </p>

                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  A cleaner space starts here
                </p>
              </div>
            </div>

            {/* Image overlay */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/20 to-transparent" />

            {/* Demo coverage card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFCC52]">
                  <LuCheck
                    size={20}
                    className="text-slate-900"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Service coverage
                  </p>

                  <p className="mt-0.5 font-bold text-slate-900">
                    Homes • Offices • More
                  </p>
                </div>

                <div className="ml-auto hidden items-center gap-1.5 rounded-full bg-[#29A4C3]/10 px-3 py-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A4C3]" />

                  <span className="text-xs font-semibold text-[#238fa9]">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating service badge */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              y: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.9,
            }}
            className="absolute -left-5 bottom-24 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block lg:-left-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#29A4C3]/10">
                <LuCheck
                  size={19}
                  className="text-[#29A4C3]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Home & Office
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Cleaning available
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;