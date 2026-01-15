import { useState } from 'react';

export default function Navbar() {
  const scrollToEarlyAccess = () => {
    const el = document.getElementById("early-access");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
<nav
  className="
    sticky top-0 z-50 w-full
    px-4 sm:px-6 py-4
    backdrop-blur supports-[backdrop-filter]:bg-slate-950/60
    bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-emerald-950/90
    border-b border-emerald-500/20
    shadow-lg
  "
>

      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
          BentoVeda
        </div>
        
        <button
          onClick={scrollToEarlyAccess}
          className="px-4 sm:px-6 py-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Early Access
        </button>
      </div>
    </nav>
  );
}
