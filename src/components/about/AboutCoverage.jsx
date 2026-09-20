import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const spaces = [
  "Homes",
  "Condos",
  "Offices",
  "Commercial Spaces",
];

function AboutCoverage() {
  return (
    <section className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFCC52]"
            >
              Where We Help
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Cleaning for the spaces that matter.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              From everyday living spaces to busy workplaces,
              cleaning services can be adapted to different
              environments, routines, and requirements.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-400"
            >
              Whether you need regular upkeep or a more focused
              cleaning service, the goal stays the same: a space
              that feels cleaner and easier to enjoy.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {spaces.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#29A4C3]/15">
                  <LuCheck
                    size={19}
                    strokeWidth={2.5}
                    className="text-[#29A4C3]"
                  />
                </div>

                <p className="mt-5 font-semibold text-white">
                  {item}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Cleaning services
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutCoverage;