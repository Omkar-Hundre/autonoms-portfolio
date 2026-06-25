import { useState } from "react";

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="reveal border-b border-border last:border-b-0">
      {/* Collapsed Row */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left py-6 md:py-8 flex items-start md:items-center gap-4 md:gap-6 group cursor-pointer"
      >
        {/* Index */}
        <span className="font-mono text-xs text-text-muted mt-1 md:mt-0 shrink-0 w-8">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
            <h3 className="font-display font-semibold text-lg md:text-xl text-text-primary group-hover:text-accent transition-colors duration-200 truncate">
              {project.title}
            </h3>
            <span className="font-mono text-[11px] text-text-muted tracking-wide uppercase shrink-0">
              {project.category}
            </span>
          </div>
          <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-2 max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Expand icon */}
        <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border group-hover:border-accent group-hover:text-accent transition-all duration-200">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
          >
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      {/* Expanded Detail */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-12 md:pl-14 pb-8 pr-4 flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Text and Tech */}
          <div className="flex-1 min-w-0">
            {/* Long description */}
            {project.longDescription && (
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 max-w-2xl">
                {project.longDescription}
              </p>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-stone mb-3">
                  Key highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech + Links row */}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 bg-bg-muted text-text-muted rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 ml-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Image Preview */}
          {project.image && (
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-xl bg-bg-muted group/image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
