import QuoteHero from "../components/qoute/QuoteHero";
import QuoteForm from "../components/qoute/QuoteForm";

function Quote() {
  return (
    <main className="overflow-hidden bg-[#FBFFFF] text-slate-900">
      <QuoteHero />
      <QuoteForm />
    </main>
  );
}

export default Quote;