import { useReveal } from "../hooks/useReveal";
import { ACHIEVEMENTS } from "../data/achievements";

export default function Achievements() {
  const ref = useReveal();

  return (
    <section ref={ref} className="px-6 py-24 md:py-32 bg-bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-stone">
            Recognition
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mt-3 leading-tight">
            Competed. Won. Shipped.
          </h2>
        </div>

        {/* Achievement List */}
        <div className="reveal-stagger space-y-0 border-t border-border">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a.id}
              className="reveal flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border group"
            >
              {/* Position badge */}
              <div className="shrink-0 w-auto md:w-32">
                <span className="inline-block font-mono text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                  {a.position}
                </span>
              </div>

              {/* Title + Org */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-base text-text-primary group-hover:text-accent transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mt-0.5">
                  {a.description}
                </p>
              </div>

              {/* Org + Date */}
              <div className="shrink-0 text-right hidden md:block">
                <p className="font-body text-sm text-text-secondary">
                  {a.organization}
                </p>
                <p className="font-mono text-xs text-text-muted">{a.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
