import { motion } from "framer-motion";
import {
  LuHeartHandshake,
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

const values = [
  {
    icon: LuShieldCheck,
    title: "Reliability",
    text: "We aim to provide dependable cleaning services that customers can feel comfortable relying on.",
  },
  {
    icon: LuCheck,
    title: "Quality",
    text: "We pay attention to the details that help a space feel genuinely cleaner, fresher, and more comfortable.",
  },
  {
    icon: LuHeartHandshake,
    title: "Customer Care",
    text: "Every service starts with understanding what the customer needs and delivering with care.",
  },
];

function LuCheck({ size, ...props }) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function AboutValues() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#29A4C3]"
          >
            What Matters To Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Simple values. Quality service.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg leading-8 text-slate-600"
          >
            We focus on the things that matter when someone
            trusts us with their space.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                variants={fadeUp}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#29A4C3]/10 text-[#29A4C3]">
                  <Icon
                    size={23}
                    strokeWidth={1.9}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {value.text}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutValues;