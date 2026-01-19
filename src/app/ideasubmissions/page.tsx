"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Idea {
  id: number;
  submitter: string;
  problem: string;
  hypothesis: string;
  created_at: string;
}

export default function IdeaSubmissions() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIdeas() {
      const { data, error } = await supabase
        .from("ideas")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching ideas:", error);
      } else {
        setIdeas(data || []);
      }
      setLoading(false);
    }

    fetchIdeas();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            All Submissions
          </p>
          <h1 className="headline text-6xl md:text-7xl">Ideas</h1>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center text-[var(--muted)] animate-slide-up stagger-2">
            Loading submissions...
          </div>
        )}

        {/* Empty state */}
        {!loading && ideas.length === 0 && (
          <div className="text-center text-[var(--muted)] animate-slide-up stagger-2">
            No ideas submitted yet.
          </div>
        )}

        {/* Ideas list */}
        <div className="space-y-8">
          {ideas.map((idea, index) => (
            <div
              key={idea.id}
              className="border-bold p-6 animate-slide-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-lg font-bold">{idea.submitter}</span>
                <span className="text-sm font-mono text-[var(--muted)]">
                  {formatDate(idea.created_at)}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                  Problem
                </p>
                <p className="text-lg">{idea.problem}</p>
              </div>

              <div>
                <p className="text-sm font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                  Hypothesis
                </p>
                <p className="text-lg">{idea.hypothesis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
