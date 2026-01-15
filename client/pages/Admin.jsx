import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Admin() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await api.get("/subscribe");
        setEmails(res.data);
      } catch (err) {
        console.error("Error fetching emails:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-300">
        Loading emails...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-3xl mx-auto bg-slate-900/60 border border-slate-700 rounded-xl">
        <h1 className="text-xl font-semibold text-slate-100 px-6 py-4 border-b border-slate-700">
          Subscriber Emails
        </h1>

        {emails.length === 0 ? (
          <p className="text-slate-400 p-6">No emails found.</p>
        ) : (
          <ul className="divide-y divide-slate-700">
            {emails.map((item) => (
              <li
                key={item._id}
                className="px-6 py-3 text-slate-200"
              >
                {item.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
