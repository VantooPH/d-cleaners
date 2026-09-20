import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown, LuImage } from "react-icons/lu";

import { faqs } from "../../data/faqs";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="overflow-hidden bg-[#FBFFFF] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#29A4C3] sm:text-sm">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl">
              Everything you need to know before booking.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
              Have questions about our cleaning services, scheduling, or what
              to expect? Find the answers below.
            </p>

            <div className="mt-7 hidden h-px w-16 bg-[#FFCC52] lg:block" />
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 18,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#29A4C3]/30 bg-white shadow-md shadow-[#29A4C3]/5"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span
                      className={`text-sm font-semibold leading-6 transition-colors sm:text-base ${
                        isOpen ? "text-[#238fa9]" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#29A4C3] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <LuChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="h-px bg-slate-100" />

                          <p className="pt-4 text-sm leading-7 text-slate-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[16/7] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                    <LuImage
                      size={28}
                      strokeWidth={1.6}
                      className="text-slate-400"
                    />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-slate-500">
                    Image
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Add a photo here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;