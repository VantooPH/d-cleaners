import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";

import { testimonials } from "../../data/testimonials";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
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

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <LuStar
          key={index}
          size={16}
          strokeWidth={1.8}
          fill="currentColor"
          className="text-[#FFCC52]"
        />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="overflow-hidden bg-[#F4FBFC] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            variants={item}
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#29A4C3] sm:text-sm sm:tracking-[0.2em]"
          >
            Customer Feedback
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            A clean space speaks
            <span className="block text-[#29A4C3]">
              for itself.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base"
          >
            See what customers have to say about their experience.
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        {testimonials.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid gap-4 sm:mt-12 lg:mt-14 lg:grid-cols-2"
          >
            {testimonials.map((testimonial, index) => {
              const featured = index === 0;

              return (
                <motion.article
                  key={`${testimonial.name}-${index}`}
                  variants={item}
                  className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
                    featured
                      ? "border-[#29A4C3] bg-[#29A4C3] text-white shadow-xl shadow-[#29A4C3]/15 lg:col-span-2 lg:p-10"
                      : "border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <LuQuote
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-3 -top-3 ${
                      featured
                        ? "text-white/10"
                        : "text-[#29A4C3]/8"
                    }`}
                    size={110}
                    strokeWidth={1}
                  />

                  <div className="relative">
                    <Stars />

                    <blockquote
                      className={`mt-6 max-w-4xl font-medium tracking-tight ${
                        featured
                          ? "text-xl leading-8 sm:text-2xl sm:leading-9 lg:text-3xl lg:leading-10"
                          : "text-base leading-7"
                      }`}
                    >
                      “{testimonial.quote}”
                    </blockquote>

                    <div
                      className={`mt-8 border-t pt-5 ${
                        featured
                          ? "border-white/20"
                          : "border-slate-100"
                      }`}
                    >
                      <p
                        className={`font-bold ${
                          featured
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      >
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 sm:mt-12 lg:mt-14"
          >
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
              <LuQuote
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 text-[#29A4C3]/10"
                size={150}
                strokeWidth={1}
              />

              <div className="relative max-w-2xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFCC52] text-slate-950">
                  <LuQuote size={21} />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                  Your experience could be featured here.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  Customer reviews will appear here as the business
                  continues serving customers across Davao City.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;