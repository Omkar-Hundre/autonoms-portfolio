import { useReveal } from "../hooks/useReveal";
import { SERVICES } from "../data/services";

const ICONS = {
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  smartphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  cpu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  "pen-tool": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>
  ),
};

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="relative px-6 py-24 md:py-32 bg-bg-dark text-text-inverse overflow-hidden">
      {/* Design elements */}
      <div className="deco-noise" />
      <div className="deco-grid" />
      <div className="deco-orb deco-orb-green w-[450px] h-[450px] -bottom-20 -left-20" />
      <div className="deco-ring w-[300px] h-[300px] top-20 -right-10 opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-stone-light">
            What we do
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-inverse mt-3 leading-tight max-w-lg">
            Here's what we actually build.
          </h2>
        </div>

        {/* Grid */}
        <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="reveal group relative card-lift rounded-2xl overflow-hidden border border-white/10 min-h-[320px] flex flex-col"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-40 group-hover:opacity-60"
                />
                {/* Dark gradient overlay so text remains perfectly readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white mb-6 shadow-xl">
                  {ICONS[service.icon]}
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 drop-shadow-md">
                  {service.title}
                </h3>

                <p className="font-body text-sm text-white/80 leading-relaxed mb-6 drop-shadow-sm">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[10px] uppercase tracking-wider text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {service.evidence}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
