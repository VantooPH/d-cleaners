import { motion } from "framer-motion";
import { LuImage, LuImages } from "react-icons/lu";

const galleryItems = [
  {
    title: "Home Cleaning",
    description: "Fresh and comfortable living spaces",
    image: null,
    size: "large",
  },
  {
    title: "Office Cleaning",
    description: "Clean and organized workspaces",
    image: null,
    size: "small",
  },
  {
    title: "Sofa Cleaning",
    description: "Deep cleaning for upholstered furniture",
    image: null,
    size: "small",
  },
  {
    title: "Deep Cleaning",
    description: "Detailed cleaning for spaces that need extra care",
    image: null,
    size: "large",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

function Gallery() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={itemVariants}
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#29A4C3] sm:text-sm sm:tracking-[0.2em]"
            >
              Our Work
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl"
            >
              See the difference.
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7"
          >
            Take a look at the spaces we've helped keep clean, fresh, and
            comfortable.
          </motion.p>
        </motion.div>

        {/* =====================================================
            GALLERY
        ===================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${
                item.size === "large"
                  ? "min-h-[280px] sm:min-h-[340px] lg:col-span-2 lg:row-span-2 lg:min-h-[520px]"
                  : "min-h-[220px] sm:min-h-[260px] lg:col-span-2 lg:min-h-[250px]"
              }`}
            >
              {/* Real image */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Placeholder until actual photos are available */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#29A4C3]/10 via-slate-50 to-[#FFCC52]/15">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <LuImage
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#29A4C3]"
                      />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-600">
                      {item.title}
                    </p>

                    <p className="mt-1 px-4 text-xs text-slate-400">
                      Photo coming soon
                    </p>
                  </div>
                </div>
              )}

              {/* Image overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent px-5 pb-5 pt-16 opacity-100 transition-opacity duration-300 sm:px-6 sm:pb-6">
                <p className="text-sm font-bold text-white sm:text-base">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-white/70 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;