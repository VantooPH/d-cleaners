import { motion } from "framer-motion";
import {
  LuClock3,
  LuMail,
  LuMapPin,
  LuPhone,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function QuoteContact() {
  return (
    <motion.aside
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="h-fit rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9 lg:sticky lg:top-28"
    >
      <motion.div variants={fadeUp}>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#29A4C3]/15 text-[#29A4C3]">
          <LuSparkles size={23} />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Let&apos;s talk about your space.
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          Have questions or prefer to discuss your request directly?
          Reach out using any of the options below.
        </p>
      </motion.div>

      <div className="mt-8 space-y-4">
        <motion.a
          variants={fadeUp}
          href="tel:+639000000000"
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/15 text-[#29A4C3]">
            <LuPhone size={18} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Phone
            </p>

            <p className="mt-1 font-semibold text-white">
              +63 900 000 0000
            </p>
          </div>
        </motion.a>

        <motion.a
          variants={fadeUp}
          href="mailto:hello@example.com"
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/15 text-[#29A4C3]">
            <LuMail size={18} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Email
            </p>

            <p className="mt-1 break-all font-semibold text-white">
              hello@example.com
            </p>
          </div>
        </motion.a>

        <motion.div
          variants={fadeUp}
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/15 text-[#29A4C3]">
            <LuMapPin size={18} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Service Area
            </p>

            <p className="mt-1 text-sm font-semibold leading-6 text-white">
              Your City &amp; surrounding areas
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        className="mt-8 border-t border-white/10 pt-7"
      >
        <div className="flex items-center gap-3">
          <LuShieldCheck
            size={19}
            className="text-[#FFCC52]"
          />

          <p className="text-sm font-semibold text-white">
            Professional service
          </p>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <LuClock3
            size={19}
            className="text-[#FFCC52]"
          />

          <p className="text-sm font-semibold text-white">
            Flexible scheduling
          </p>
        </div>
      </motion.div>
    </motion.aside>
  );
}

export default QuoteContact;