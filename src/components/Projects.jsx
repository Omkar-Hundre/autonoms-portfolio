import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";

const CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

export default function Projects() {
  const ref = useReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" ref={ref} className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Design elements */}
      <div className="deco-line deco-line-h top-0" />
      <div className="deco-orb deco-orb-stone w-[400px] h-[400px] top-40 right-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-stone">
            Selected work
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mt-3 leading-tight">
            Things we've shipped.
          </h2>
          <p className="font-body text-text-secondary mt-3 max-w-lg">
            Production systems used by real people — not mockups, not
            prototypes. Click any project to see what's under the hood.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-text-primary text-text-inverse border-text-primary"
                  : "bg-transparent text-text-secondary border-border hover:border-border-strong hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="reveal-stagger border-t border-border">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
