import { motion } from "framer-motion";
import {
  LuCheck,
  LuMapPin,
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

const highlights = [
  "Reliable cleaning services",
  "Residential and commercial cleaning",
  "Specialized cleaning options",
  "Customer-focused service",
];

function AboutStory() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Visual */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#29A4C3]/10 via-white to-[#FFCC52]/20">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-white/60"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#29A4C3]/10"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 sm:h-20 sm:w-20" />

                <p className="mt-5 text-lg font-bold text-slate-800">
                  Professional Cleaning
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Care for everyday spaces
                </p>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFCC52]">
                  <LuMapPin
                    size={20}
                    className="text-slate-900"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Service Area
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Local residential & commercial spaces
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29A4C3]/10">
                <LuShieldCheck
                  size={20}
                  className="text-[#29A4C3]"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Dependable
                </p>

                <p className="text-xs text-slate-500">
                  Professional service
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="order-1 lg:order-2"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#29A4C3]"
          >
            Who We Are
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Cleaning that fits the way you live.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            A good cleaning service should do more than make a
            space look tidy. It should make your day easier and
            give you one less thing to worry about.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg leading-8 text-slate-600"
          >
            Our approach is built around dependable service,
            attention to detail, and understanding what each
            customer actually needs from their space.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#29A4C3]/10">
                  <LuCheck
                    size={15}
                    strokeWidth={2.5}
                    className="text-[#29A4C3]"
                  />
                </div>

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutStory;