import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

function ServicesCTA() {
  return (
    <section className="px-5 pb-6 sm:px-6 sm:pb-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-slate-950 px-6 py-12 text-white sm:rounded-[2rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full bg-[#29A4C3]/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFCC52] sm:text-sm sm:tracking-[0.2em]">
              Need a Cleaning Service?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:mt-4 sm:text-5xl">
              Let's get your space cleaned.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
              Tell us about your space and what you need cleaned,
              and we'll help you find the right service.
            </p>

            <Link
              to="/quote"
              className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FFCC52] px-6 font-bold text-slate-950 transition-all active:scale-[0.98] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FFCC52]/20 sm:mt-8 sm:px-7"
            >
              Get a Quote

              <LuArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ServicesCTA;