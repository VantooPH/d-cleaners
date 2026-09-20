import { motion } from "framer-motion";
import {
  LuBadgeCheck,
  LuBuilding2,
  LuCheck,
  LuShieldCheck,
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function WhyUs() {
  const reasons = [
    {
      icon: LuShieldCheck,
      number: "01",
      title: "Reliable Service",
      text: "A straightforward cleaning service focused on your specific needs.",
    },
    {
      icon: LuBadgeCheck,
      number: "02",
      title: "Detailed Cleaning",
      text: "Cleaning options for everyday spaces as well as areas requiring deeper attention.",
    },
    {
      icon: LuBuilding2,
      number: "03",
      title: "Home & Office",
      text: "Services available for both residential and commercial spaces.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#29A4C3]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#FFCC52]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFCC52] sm:text-sm sm:tracking-[0.2em]"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Cleaning that fits
            <span className="block text-[#29A4C3]">
              your space and your needs.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
          >
            From everyday cleaning to specialized care, our services are
            designed for different spaces and cleaning requirements.
          </motion.p>
        </motion.div>

        {/* Reasons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                variants={fadeUp}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#29A4C3]/30 hover:bg-white/[0.06] sm:rounded-3xl sm:p-7"
              >
                {/* Number */}
                <div className="absolute right-5 top-5 text-xs font-bold tracking-widest text-white/20 sm:right-7 sm:top-7">
                  {reason.number}
                </div>

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/10 text-[#29A4C3] transition-all duration-300 group-hover:bg-[#29A4C3] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon size={21} />
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-1 flex-col sm:mt-6">
                  <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                    {reason.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-400 sm:mt-3 sm:text-base sm:leading-7">
                    {reason.text}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs font-semibold text-slate-500">
                  <LuCheck
                    size={15}
                    className="text-[#29A4C3]"
                  />

                  <span>Part of our service</span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
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
          className="mt-8 rounded-2xl border border-[#29A4C3]/20 bg-[#29A4C3]/5 p-5 sm:mt-10 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6"
        >
          <div>
            <p className="font-bold text-white">
              Need help choosing a service?
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Tell us about your space and what needs cleaning.
            </p>
          </div>

          <a
            href="/quote"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#FFCC52] px-6 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-[#ffd76f] sm:mt-0 sm:w-auto"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;