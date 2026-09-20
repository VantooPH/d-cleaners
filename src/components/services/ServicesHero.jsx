import { motion } from "framer-motion";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#29A4C3]/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#FFCC52]/15 blur-3xl sm:h-80 sm:w-80"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mx-auto inline-flex items-center rounded-full border border-[#29A4C3]/20 bg-[#29A4C3]/5 px-4 py-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#238fa9] sm:text-xs sm:tracking-[0.18em]">
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.6rem] font-bold leading-[1.04] tracking-[-0.035em] text-slate-950 sm:mt-7 sm:text-6xl lg:text-7xl"
          >
            A cleaner space,
            <span className="block text-[#29A4C3]">
              without the hassle.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8"
          >
            From regular home cleaning to deeper treatments for
            furniture, carpets, and other spaces, find a service
            that fits what you need.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center"
          >
            <Link
              to="/quote"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#29A4C3] px-7 text-sm font-semibold text-white shadow-lg shadow-[#29A4C3]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#238fa9] hover:shadow-xl active:scale-[0.98] sm:w-auto sm:text-base"
            >
              Request a Quote

              <LuArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] sm:w-auto sm:text-base"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Service types */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-slate-500 sm:mt-10 sm:gap-x-7 sm:text-sm"
          >
            {[
              "Residential",
              "Commercial",
              "Specialized",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#29A4C3]/10">
                  <LuCheck
                    size={12}
                    className="text-[#29A4C3]"
                  />
                </span>

                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom visual divider */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.8,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-14 h-px max-w-xl bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:mt-16"
        />
      </div>
    </section>
  );
}

export default ServicesHero;