import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useNavigate,
} from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import logoImg from "@/assets/logo.webp";

const PageNotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage = "404";
  let errorTitle = "OFF THE MAP";
  let errorDetail =
    "The trail you're looking for doesn't exist or has been moved to a different peak.";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.status.toString();
    errorTitle = error.statusText.toUpperCase() || errorTitle;
    errorDetail = error.data?.message || errorDetail;
  }

  return (
    <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-[#050505] z-0" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#e02b34]/10 blur-[150px] rounded-full z-0" />

      <Link
        to="/"
        className="absolute top-8 left-8 z-50 transition-opacity hover:opacity-80"
      >
        <img src={logoImg} alt="Logo" className="h-10 w-auto" />
      </Link>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e02b34] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e02b34]"></span>
          </span>
          <span className="text-[11px] font-bold text-gray-200 uppercase tracking-widest">
            Expedition Alert
          </span>
        </div>

        <h1 className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-600 leading-none select-none tracking-tighter">
          {errorMessage}
        </h1>

        <div className="-mt-8 md:-mt-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            {errorTitle}
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-light">
            {errorDetail}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-[#e02b34] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-[#c0252c] active:scale-95 shadow-[0_0_20px_rgba(224,43,52,0.3)]"
            >
              <FaHome size={18} />
              <span>RETURN TO BASE</span>
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-all hover:bg-white/10 active:scale-95 backdrop-blur-md"
            >
              <FaArrowLeft size={16} />
              <span>PREVIOUS PEAK</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 flex items-center justify-center gap-6 text-zinc-700">
        <div className="h-px w-8 bg-zinc-800" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
          Lost In The Himalayas
        </span>
        <div className="h-px w-8 bg-zinc-800" />
      </div>
    </div>
  );
};

export default PageNotFound;
