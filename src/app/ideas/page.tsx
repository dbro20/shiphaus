"use client";

import { useState } from "react";
import { attendees } from "@/data/attendees";
import { supabase } from "@/lib/supabase";

const projectFormats = [
  "Website / Web app",
  "iPhone app",
  "Mac app",
  "Chrome extension",
  "CLI tool",
  "API / Backend service",
  "Slack / Discord bot",
  "1-minute video",
  "Hardware / IoT",
  "Other",
];

export default function Ideas() {
  const [submitter, setSubmitter] = useState("");
  const [format, setFormat] = useState("");
  const [problem, setProblem] = useState("");
  const [hypothesis, setHypothesis] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitter || !format || !problem || !hypothesis) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const { error } = await supabase.from("ideas").insert({
      submitter,
      format,
      problem,
      hypothesis,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Error submitting idea:", error);
      setSubmitStatus("error");
    } else {
      setSubmitStatus("success");
      setFormat("");
      setProblem("");
      setHypothesis("");
    }
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            Submit Your Pitch
          </p>
          <h1 className="headline text-6xl md:text-7xl">Ideas</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Submitter dropdown */}
          <div className="animate-slide-up stagger-2">
            <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-3">
              Who are you?
            </label>
            <select
              value={submitter}
              onChange={(e) => setSubmitter(e.target.value)}
              required
              className="w-full p-4 bg-[var(--background)] border-bold text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">Select your name...</option>
              {attendees.map((person) => (
                <option key={person.name} value={person.name}>
                  {person.name}
                </option>
              ))}
            </select>
          </div>

          {/* Format dropdown */}
          <div className="animate-slide-up stagger-3">
            <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-3">
              What are you building?
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              required
              className="w-full p-4 bg-[var(--background)] border-bold text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">Select a format...</option>
              {projectFormats.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          {/* Problem textarea */}
          <div className="animate-slide-up stagger-4">
            <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-3">
              What problem are you solving?
            </label>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
              rows={4}
              placeholder="Describe the problem you want to tackle..."
              className="w-full p-4 bg-[var(--background)] border-bold text-lg resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] placeholder:text-[var(--muted)]/50"
            />
          </div>

          {/* Hypothesis textarea */}
          <div className="animate-slide-up stagger-5">
            <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-3">
              What hypothesis are you testing by building a product that solves this problem?
            </label>
            <textarea
              value={hypothesis}
              onChange={(e) => setHypothesis(e.target.value)}
              required
              rows={4}
              placeholder="What do you believe will happen if you solve this problem?"
              className="w-full p-4 bg-[var(--background)] border-bold text-lg resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] placeholder:text-[var(--muted)]/50"
            />
          </div>

          {/* Submit button */}
          <div className="animate-slide-up stagger-6">
            <button
              type="submit"
              disabled={isSubmitting || !submitter || !format || !problem || !hypothesis}
              className="w-full p-4 bg-[var(--foreground)] text-[var(--background)] text-lg font-bold border-bold hover:bg-[var(--accent-red)] hover:text-[var(--foreground)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Idea"}
            </button>
          </div>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-[var(--accent-green)] border-bold text-center font-medium animate-slide-up">
              Idea submitted! Feel free to submit another.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-[var(--accent-red)] border-bold text-center font-medium animate-slide-up">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
