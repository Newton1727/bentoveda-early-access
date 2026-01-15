import { useState } from "react";
import api from "../api/axios"; 

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      setStatus("loading");

      const res = await api.post("/subscribe", { email });

      setStatus("success");
      setMessage(res.data.message || "Welcome aboard! Check your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <section
      id="early-access"
      className="relative px-6 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent">
              Join Early Access
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Be among the first to experience BentoVeda. Early adopters get
              exclusive benefits and help shape the future.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Free access during beta period",
                "Priority support and onboarding",
                "Influence product development",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-slate-100 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-100/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-slate-400 outline-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-100 text-slate-950 font-semibold rounded-xl hover:scale-105 transition disabled:opacity-50"
              >
                {status === "loading" ? "Signing up..." : "Get Early Access"}
              </button>

              {status !== "idle" && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    status === "success"
                      ? "bg-slate-100/10 border border-slate-100/20 text-slate-100"
                      : "bg-red-500/10 border border-red-500/20 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}

              <p className="text-xs text-slate-400 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
