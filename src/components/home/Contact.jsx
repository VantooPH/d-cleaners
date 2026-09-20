import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuClock3,
  LuMapPin,
  LuMessageCircle,
  LuPhoneCall,
} from "react-icons/lu";
import { MdEmail } from "react-icons/md";

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

function Contact() {
  return (
    <section className="px-4 pb-6 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20"
        >
          {/* Content */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#29A4C3]"
            >
              Get a Quote
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Let's get your space clean.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base"
            >
              Tell us what you need and we'll help you find the right
              cleaning service for your space.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex items-center gap-2 text-sm text-slate-400"
            >
              <LuMapPin size={17} className="shrink-0 text-[#29A4C3]" />
              Serving your local area
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-3 flex items-center gap-2 text-sm text-slate-400"
            >
              <LuClock3 size={17} className="shrink-0 text-[#29A4C3]" />
              Flexible scheduling
            </motion.div>
          </div>

          {/* Contact Actions */}
          <motion.div variants={fadeUp} className="space-y-3">
            <a
              href="tel:+639123456789"
              className="group flex items-center gap-4 rounded-2xl bg-[#FFCC52] px-5 py-4 text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/10">
                <LuPhoneCall size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-60">
                  Call
                </p>

                <p className="mt-0.5 text-sm font-bold sm:text-base">
                  +63 912 345 6789
                </p>
              </div>

              <LuArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:bg-white/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#29A4C3]">
                <MdEmail size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="mt-0.5 truncate text-sm font-semibold text-white sm:text-base">
                  hello@example.com
                </p>
              </div>

              <LuArrowRight
                size={18}
                className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white"
              />
            </a>

            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:bg-white/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#29A4C3]">
                <LuMessageCircle size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Message
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                  Send us a message
                </p>
              </div>

              <LuArrowRight
                size={18}
                className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;