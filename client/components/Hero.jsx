import { useState } from 'react';

export default function Hero() {
  const scrollToEarlyAccess = () => {
    const el = document.getElementById("early-access");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
const scrollToIndianLine = () => {
  document
    .getElementById("indian-line")
    ?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-100/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 mt-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 text-center md:text-left">
            
            <span className="inline-block px-4 py-2 text-sm font-semibold text-slate-100 bg-slate-100/10 rounded-full border border-slate-100/20">
              Launching Soon
            </span>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent">
                BentoVeda
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-slate-300 font-light max-w-xl">
              Modern nutrition, inspired by{" "}
              <span className="font-semibold text-slate-100">
                Indian wisdom
              </span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToEarlyAccess}
                className="px-8 py-4 rounded-xl text-lg font-semibold text-slate-950 bg-slate-100 hover:bg-slate-300 hover:shadow-2xl hover:scale-105 transition-all"
              >
                Join Early Access
              </button>

              <button onClick = {scrollToIndianLine} className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-slate-100 text-slate-100 hover:bg-slate-100/10 transition-all">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 text-sm text-slate-300 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-100 rounded-full" />
                Free for early adopters
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-300 rounded-full" />
                No credit card required
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">

            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/10 via-slate-300/10 to-slate-100/10 blur-3xl rounded-full" />

            <div className="relative h-[420px] lg:h-[520px] bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-100/20 shadow-[0_40px_120px_-20px_rgba(241,245,249,0.15)] overflow-hidden">

              <img
                src="/hero2.png"
                alt="BentoVeda nutrition preview"
                className="w-full h-full object-contain p-10"
              />

              <div className="absolute top-8 right-8 w-52 bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl p-4 rotate-6 border border-slate-100/20">
                <div className="h-3 w-full bg-gradient-to-r from-slate-100 to-slate-300 rounded mb-3" />
                <div className="h-3 w-3/4 bg-slate-100/30 rounded mb-2" />
                <div className="h-3 w-1/2 bg-slate-100/20 rounded" />
              </div>

              <div className="absolute bottom-8 left-8 w-52 bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl p-4 -rotate-6 border border-slate-300/20">
                <div className="h-3 w-full bg-gradient-to-r from-slate-300 to-slate-100 rounded mb-3" />
                <div className="h-3 w-3/4 bg-slate-300/30 rounded mb-2" />
                <div className="h-3 w-1/2 bg-slate-300/20 rounded" />
              </div>
            </div>
          </div>

        </div>
      </div>

     
    </section>
  );
}
