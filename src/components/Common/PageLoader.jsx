import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const { pathname, search } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8FAFC] dark:bg-[#09090B]" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-[3px] border-blue-100 dark:border-blue-950" />
          <div className="absolute inset-0 animate-[spin_1.2s_linear_infinite] rounded-full border-[3px] border-transparent border-t-blue-600 border-r-violet-600" />
          <div className="absolute inset-[10px] animate-[spin_1.8s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-cyan-400 border-l-blue-400" />
          <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-black text-blue-600 dark:text-blue-400">R</span>
        </div>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-violet-600 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500" />
        </div>
        <div className="text-center">
          <p className="font-heading text-sm font-bold tracking-[0.28em] text-slate-800 dark:text-slate-100">RAHIMAX</p>
          <p className="mt-1 text-[11px] font-medium tracking-wide text-slate-400 dark:text-zinc-500">Preparing your experience</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
