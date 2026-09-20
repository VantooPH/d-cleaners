function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#29A4C3]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;