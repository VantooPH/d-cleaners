import { Link } from "react-router-dom";
import { LuArrowLeft, LuHouse } from "react-icons/lu";

const ErrorPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FBFFFF] px-6">
      <div className="w-full max-w-2xl text-center">
        <p className="text-[#29A4C3] font-semibold tracking-widest uppercase mb-4">
          Error 404
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto mb-10">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#29A4C3] text-white font-medium hover:opacity-90 transition"
          >
            <LuHouse size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <LuArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;