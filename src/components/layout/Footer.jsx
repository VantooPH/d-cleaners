import {
  LuArrowUpRight,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#FBFFFF]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#29A4C3]">
                <span className="text-base font-bold text-white">
                  C
                </span>
              </div>

              <div>
                <p className="font-bold leading-none tracking-tight text-slate-950">
                  CleanSpace
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Cleaning Services
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Professional cleaning services designed to keep homes,
              condos, and workspaces clean, comfortable, and cared for.
            </p>

            <Link
              to="/quote"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#29A4C3] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#238fa9]"
            >
              Get a Quote

              <LuArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3.5">
              <Link
                to="/"
                className="w-fit text-sm text-slate-600 transition-colors hover:text-[#29A4C3]"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="w-fit text-sm text-slate-600 transition-colors hover:text-[#29A4C3]"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="w-fit text-sm text-slate-600 transition-colors hover:text-[#29A4C3]"
              >
                About Us
              </Link>

              <Link
                to="/quote"
                className="w-fit text-sm font-semibold text-[#29A4C3] transition-colors hover:text-[#238fa9]"
              >
                Get a Quote
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Contact
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="tel:+630000000000"
                className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#29A4C3]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-[#29A4C3]/10">
                  <LuPhone size={16} />
                </span>

                <span>+63 900 000 0000</span>
              </a>

              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#29A4C3]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-[#29A4C3]/10">
                  <LuMail size={16} />
                </span>

                <span className="break-all">
                  hello@example.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                  <LuMapPin size={16} />
                </span>

                <span>
                  Davao City, Philippines
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-[#29A4C3] hover:bg-[#29A4C3]/5 hover:text-[#29A4C3]"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-[#29A4C3] hover:bg-[#29A4C3]/5 hover:text-[#29A4C3]"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-slate-200 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CleanSpace. All rights reserved.
          </p>

          <p>
            Website by{" "}
            <span className="font-medium text-slate-600">
              Vantoo
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;