import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuCheck,
} from "react-icons/lu";

import QuoteContact from "./QuoteContact";

const services = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Furniture Cleaning",
  "Carpet Cleaning",
  "Other",
];

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  preferredDate: "",
  message: "",
};

function QuoteForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-[#FBFFFF] px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#29A4C3] focus:ring-4 focus:ring-[#29A4C3]/10";

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <QuoteContact />

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
        >
          {submitted ? (
            <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#29A4C3]/10 text-[#29A4C3]">
                <LuCheck size={30} />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-slate-950">
                Request received.
              </h2>

              <p className="mt-4 max-w-md leading-7 text-slate-600">
                Thank you for your request. We&apos;ll review the
                details you provided and get back to you.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData(initialFormData);
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                Send another request
                <LuArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#29A4C3]">
                  Request Details
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Get your request started.
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Tell us a little about yourself, the space, and the
                  service you&apos;re looking for.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="09XX XXX XXXX"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Email Address
                    <span className="ml-1 font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#29A4C3]">
                  Service Details
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Service Needed
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Preferred Date
                      <span className="ml-1 font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="location"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Cleaning Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Area, neighborhood, building, etc."
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Tell Us More
                      <span className="ml-1 font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the space, size, areas that need attention, or anything else we should know."
                      className={`${inputClass} resize-none leading-6`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#29A4C3] px-7 py-4 font-semibold text-white shadow-lg shadow-[#29A4C3]/20 transition-all hover:-translate-y-0.5 hover:bg-[#238fa9] hover:shadow-xl"
                >
                  Send Quote Request

                  <LuArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  By submitting this form, you&apos;re requesting
                  contact regarding your service needs.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteForm;