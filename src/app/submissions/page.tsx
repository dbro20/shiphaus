"use client";

import { useState, useEffect } from "react";
import { attendees } from "@/data/attendees";
import { supabase } from "@/lib/supabase";

type Submission = {
  id: number;
  submitter: string;
  project_name: string;
  project_link: string;
  created_at: string;
};

export default function Submissions() {
  const [showForm, setShowForm] = useState(false);
  const [submitter, setSubmitter] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setSubmissions(data);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitter || !projectName || !projectLink) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const { error } = await supabase.from("submissions").insert({
      submitter,
      project_name: projectName,
      project_link: projectLink,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Error submitting project:", error);
      setSubmitStatus("error");
    } else {
      setSubmitStatus("success");
      setProjectName("");
      setProjectLink("");
      setSubmitter("");
      fetchSubmissions();
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus("idle");
      }, 1500);
    }
  };

  const getAttendeeColor = (name: string) => {
    const attendee = attendees.find((a) => a.name === name);
    return attendee?.color || "var(--accent-blue)";
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            What We Shipped
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h1 className="headline text-6xl md:text-7xl">Submissions</h1>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-semibold border-bold hover:bg-[var(--accent-red)] hover:text-[var(--foreground)] transition-colors"
              >
                + Add New
              </button>
            )}
          </div>
        </div>

        {/* Form (collapsible) */}
        {showForm && (
          <div className="mb-12 p-8 border-bold bg-[var(--surface)] animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Submit Your Project</h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setSubmitStatus("idle");
                }}
                className="p-2 hover:bg-[var(--background)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submitter dropdown */}
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
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

              {/* Project name input */}
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                  placeholder="What did you build?"
                  className="w-full p-4 bg-[var(--background)] border-bold text-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] placeholder:text-[var(--muted)]/50"
                />
              </div>

              {/* Project link input */}
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                  Project Link
                </label>
                <input
                  type="url"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  required
                  placeholder="https://..."
                  className="w-full p-4 bg-[var(--background)] border-bold text-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] placeholder:text-[var(--muted)]/50"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting || !submitter || !projectName || !projectLink}
                className="w-full p-4 bg-[var(--foreground)] text-[var(--background)] text-lg font-bold border-bold hover:bg-[var(--accent-red)] hover:text-[var(--foreground)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Project"}
              </button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-[var(--accent-green)] border-bold text-center font-medium">
                  Project submitted! Ship it! 🚀
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-[var(--accent-red)] border-bold text-center font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        )}

        {/* Submissions list */}
        {isLoading ? (
          <div className="text-center py-12 text-[var(--muted)] font-mono">
            Loading submissions...
          </div>
        ) : submissions.length > 0 ? (
          <div className="animate-slide-up stagger-2">
            <div className="space-y-4">
              {submissions.map((submission) => (
                <a
                  key={submission.id}
                  href={submission.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-bold hover:bg-[var(--surface)] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold group-hover:text-[var(--accent-blue)] transition-colors">
                        {submission.project_name}
                      </h3>
                      <p className="text-sm font-mono text-[var(--muted)] mt-1">
                        by{" "}
                        <span style={{ color: getAttendeeColor(submission.submitter) }}>
                          {submission.submitter}
                        </span>
                      </p>
                    </div>
                    <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 border-bold bg-[var(--surface)]">
            <p className="text-xl font-medium text-[var(--muted)] mb-4">
              No submissions yet
            </p>
            <p className="text-[var(--muted)]">
              Be the first to ship something!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
