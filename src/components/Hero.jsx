import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center px-6 pt-16 overflow-hidden"
    >
      {/* Design elements */}
      <div className="deco-grid" />
      <div className="deco-orb deco-orb-green w-[500px] h-[500px] -top-40 -right-40" />
      <div className="deco-orb deco-orb-stone w-[300px] h-[300px] bottom-20 -left-20" />
      <div className="deco-ring w-[400px] h-[400px] -top-20 right-[15%]" />
      <div className="deco-ring w-[200px] h-[200px] bottom-40 left-[10%]" />

      {/* Mobile Background Image (Hidden on lg screens) */}
      <div className="absolute inset-0 z-0 lg:hidden pointer-events-none opacity-10">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Fade overlay so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/70 to-bg"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>

            {/* Main headline */}
            <h1 className="reveal font-display font-bold leading-[1.08] tracking-tight mb-8 bg-gradient-to-br from-[#1A1A1A] via-[#2A3A30] to-[#5A7A64] bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}>
              You've got the idea.
              <br />
              We've got the hands to build it.
            </h1>

            {/* Sub-text */}
            <p className="reveal font-body text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              We're a small team that sits beside you — writes the code,
              designs the screens, sets up the servers — and stays until
              it's live and people are using it.
            </p>

            {/* CTA */}
            <div className="reveal flex flex-wrap gap-4 items-center mb-20">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-7 py-3.5 bg-text-primary text-text-inverse rounded-full hover:bg-accent transition-colors duration-300"
              >
                Talk to us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                See what we've built
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column - Image */}
          <div className="reveal hidden lg:block relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-bg-muted shadow-2xl">
            <img
              src="/hero-bg.png"
              alt="Abstract premium shapes"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Subtle overlay gradient to blend image into the background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bg/20 to-transparent"></div>
          </div>
        </div>

        {/* Trust proof strip spanning full width */}
        <div className="reveal mt-20 md:mt-32 pt-10 border-t border-border">
          <div className="flex flex-wrap justify-between gap-x-10 gap-y-8 items-center max-w-5xl mx-auto px-4">
            <Proof value="12+" label="Production projects" />
            <Proof value="8+" label="Clients served" />
            <Proof value="3" label="Industries" />
            <Proof value="2024" label="Founded" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof({ value, label }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display font-bold text-xl text-text-primary">{value}</span>
      <span className="font-body text-xs text-text-muted">{label}</span>
    </div>
  );
}
