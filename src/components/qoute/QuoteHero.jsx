import { motion } from "framer-motion";
import { LuSend } from "react-icons/lu";

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
      staggerChildren: 0.08,
    },
  },
};

function QuoteHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 lg:pb-20 lg:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#29A4C3]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#FFCC52]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#29A4C3]/20 bg-[#29A4C3]/5 px-4 py-2"
          >
            <LuSend
              size={15}
              className="text-[#29A4C3]"
            />

            <span className="text-sm font-semibold text-[#238fa9]">
              Request a Quote
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Tell us what you
            <span className="block text-[#29A4C3]">
              need cleaned.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Share a few details about your space and what you need.
            We&apos;ll use the information to understand your request
            and prepare the right service options.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteHero;