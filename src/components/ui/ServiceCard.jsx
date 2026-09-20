import { LuArrowRight, LuSparkles } from "react-icons/lu";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const Icon = service.icon || LuSparkles;

  return (
    <article className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-[#FBFFFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#29A4C3]/30 hover:shadow-xl hover:shadow-slate-200/50 sm:rounded-3xl sm:p-7">
      {/* Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#29A4C3]/10 text-[#29A4C3] transition-colors duration-300 group-hover:bg-[#29A4C3] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
        <Icon size={21} />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col sm:mt-6">
        <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
          {service.description}
        </p>

        {/* Push CTA to bottom */}
        <div className="mt-auto pt-6">
          <Link
            to="/quote"
            className="group/link inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#238fa9]"
          >
            Request a quote

            <LuArrowRight
              size={16}
              className="transition-transform duration-200 group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;