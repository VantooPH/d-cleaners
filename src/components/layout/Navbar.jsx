import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuArrowRight,
  LuMenu,
  LuX,
} from "react-icons/lu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
          {/* Main Navbar */}
          <div className="flex h-16 items-center justify-between px-4 sm:h-[68px] sm:px-5">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group flex min-w-0 items-center gap-2.5"
              aria-label="CleanSpace home"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3] transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10">
                <span className="text-sm font-bold text-white">
                  C
                </span>
              </div>

              <div className="min-w-0">
                <p className="truncate text-[15px] font-bold leading-none tracking-tight text-slate-950 sm:text-base">
                  CleanSpace
                </p>

                <p className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400 xs:block sm:text-[10px]">
                  Cleaning Services
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "text-[#29A4C3]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#29A4C3]"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-x-4 -bottom-[1px] h-0.5 rounded-full bg-[#29A4C3]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              to="/quote"
              className="group hidden items-center gap-2 rounded-full bg-[#29A4C3] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#238fa9] hover:shadow-lg hover:shadow-[#29A4C3]/20 md:flex"
            >
              Get a Quote

              <LuArrowRight
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 active:scale-95 hover:bg-slate-50 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <LuX size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <LuMenu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
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
                  height: {
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.15,
                  },
                }}
                className="md:hidden"
              >
                <div className="border-t border-slate-100 px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
                  <nav className="space-y-1">
                    {links.map((link, index) => {
                      const active = isActive(link.href);

                      return (
                        <motion.div
                          key={link.href}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.04,
                            duration: 0.2,
                          }}
                        >
                          <Link
                            to={link.href}
                            onClick={closeMobileMenu}
                            className={`flex min-h-12 items-center rounded-xl px-4 text-[15px] font-medium transition-colors active:scale-[0.99] ${
                              active
                                ? "bg-[#29A4C3]/10 text-[#29A4C3]"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}

                    {/* Mobile CTA */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.12,
                        duration: 0.25,
                      }}
                      className="pt-2"
                    >
                      <Link
                        to="/quote"
                        onClick={closeMobileMenu}
                        className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#29A4C3] px-4 py-3 text-[15px] font-semibold text-white shadow-sm transition-all active:scale-[0.98] hover:bg-[#238fa9]"
                      >
                        Get a Quote

                        <LuArrowRight
                          size={17}
                          strokeWidth={2.2}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Navbar;