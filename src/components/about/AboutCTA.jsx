import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="px-5 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#29A4C3] to-[#238fa9] px-7 py-14 sm:rounded-[2rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#FFCC52]/10 blur-3xl"
        />

        <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFCC52]">
              Get Started
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to make your space feel better?
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Tell us what you need cleaned and we&apos;ll help you
              find the right service for your space.
            </p>
          </div>

          <Link
            to="/quote"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFCC52] px-7 py-4 font-bold text-slate-950 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FFCC52] focus:ring-offset-2 focus:ring-offset-[#29A4C3] active:scale-[0.98]"
          >
            Get a Quote

            <LuArrowRight
              size={18}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutCTA;