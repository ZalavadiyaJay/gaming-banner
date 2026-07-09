"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[960px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-4xl font-extrabold text-on-background">Contact Us</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Have a question, feature request, or feedback? Drop us a line and we'll get back to you.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Contact form */}
          <div className="bg-surface-container border border-outline-variant/50 p-lg rounded-xl shadow-lg">
            {submitted ? (
              <div className="text-center py-xl flex flex-col items-center gap-sm">
                <span className="text-3xl text-emerald-500 font-data-mono">✓</span>
                <h3 className="font-bold text-on-background text-lg">Thank You!</h3>
                <p className="text-xs text-outline leading-relaxed">
                  Your message has been sent successfully. Our support team will get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-md text-xs text-outline">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-on-background">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-surface-container-low border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-on-background">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-surface-container-low border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-on-background">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-surface-container-low border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container"
                  >
                    <option>General Inquiry</option>
                    <option>Feature Request</option>
                    <option>Bug Report</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-on-background">Message</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-surface-container-low border border-outline-variant rounded p-sm text-sm outline-none text-on-background focus:border-primary-container resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm py-3 rounded-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact metadata */}
          <div className="flex flex-col gap-md justify-center">
            {[
              { title: "Email Support", desc: "Contact support directly for custom design inquiries.", value: "support@gamingbanner.com" },
              { title: "Response Window", desc: "Average email support response times.", value: "Within 24 to 48 hours" },
              { title: "Discord Guild", desc: "Join our creator community chat directly.", value: "Join GamingBanner Discord Server" },
            ].map((info, idx) => (
              <div key={idx} className="p-lg bg-surface-container-high/40 border border-outline-variant/40 rounded-xl flex flex-col gap-1">
                <span className="font-bold text-on-background text-sm">{info.title}</span>
                <p className="text-xs text-outline">{info.desc}</p>
                <span className="text-xs text-primary-container font-semibold mt-1 font-data-mono">{info.value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
