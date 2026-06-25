import { useReveal } from "../hooks/useReveal";

const NUMBERS = [
  { value: "12+", label: "Projects shipped to production" },
  { value: "3", label: "Industries we've worked in" },
  { value: "7→5min", label: "Days of work turned to minutes (COSEM)" },
  { value: "1500+", label: "Concurrent users handled (Zorabase)" },
];

const CLIENTS = [
  {
    name: "Victoria Mobile Enterprises",
    type: "International Multi-Company Holding Brand",
    what: "Enterprise-level software solutions",
  },
  {
    name: "ComedKares",
    type: "Non-profit Organization",
    what: "Digital platform & website",
  },
  {
    name: "Bhuvan Info Systems",
    type: "Digital Agency",
    what: "REMS & full-scale ERP system",
  },
  {
    name: "Creative Hydraulics",
    type: "Manufacturing",
    what: "Factory quotation system (Desktop + Web)",
  },
  {
    name: "Hydropathy",
    type: "Manufacturing",
    what: "Industrial automation solutions",
  },
  {
    name: "Doortaq",
    type: "Logistics / Operations",
    what: "Operational software & web development",
  },
  {
    name: "ThinkSoul",
    type: "EdTech",
    what: "Learning management platform with real-time collaboration",
  },
  {
    name: "LeoCliq",
    type: "Creator Economy",
    what: "Mobile app + creator portal",
  },
];

export default function Numbers() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32 bg-bg-dark text-text-inverse overflow-hidden">
      {/* Design elements */}
      <div className="deco-noise" />
      <div className="deco-grid" />
      <div className="deco-orb deco-orb-stone w-[400px] h-[400px] -top-32 right-[10%]" />
      <div className="deco-orb deco-orb-blue w-[350px] h-[350px] bottom-0 left-[-100px]" />
      <div className="deco-ring w-[300px] h-[300px] bottom-[-50px] right-[-50px] opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Numbers */}
        <div className="reveal mb-20">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-stone-light">
            By the numbers
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-inverse mt-3 leading-tight mb-12">
            Small team. Real output.
          </h2>

          <div className="reveal-stagger grid grid-cols-2 lg:grid-cols-4 gap-8">
            {NUMBERS.map((n) => (
              <div key={n.label} className="reveal">
                <span className="font-display font-bold text-3xl md:text-4xl text-text-inverse block mb-1">
                  {n.value}
                </span>
                <span className="font-body text-sm text-text-inverse/70 leading-snug">
                  {n.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="reveal pt-12 border-t border-white/10">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-stone-light">
            People we've built for
          </span>
          <h3 className="font-display font-semibold text-xl text-text-inverse mt-3 mb-8">
            From factory floors to global holding brands.
          </h3>

          <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="reveal card-lift flex flex-col gap-1.5 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Initials circle */}
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-display text-xs font-bold text-text-inverse">
                      {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm text-text-inverse leading-tight truncate">
                      {c.name}
                    </p>
                    <p className="font-mono text-[10px] text-text-inverse/40 tracking-wide uppercase truncate">
                      {c.type}
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm text-text-inverse/70 leading-relaxed mt-1 line-clamp-2">
                  {c.what}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
