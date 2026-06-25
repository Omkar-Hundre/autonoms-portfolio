import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Design elements */}
      <div className="deco-orb deco-orb-warm w-[400px] h-[400px] top-0 right-0" />
      <div className="deco-dots w-[200px] h-[200px] top-20 right-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-stone">
              Who we are
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mt-3 leading-tight">
              We join your team.
              <br />
              That's it.
            </h2>
          </div>

          {/* Right */}
          <div className="reveal space-y-6">
            <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed max-w-prose">
              Most places take a brief, go quiet, and come back weeks later
              with something that almost works. We don't do that.
            </p>
            <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed max-w-prose">
              We show up on your calls. Push to your repo. Fix the thing
              that broke at 11pm. We're in it with you — because it only
              works if we actually understand what you're building and why.
            </p>
            <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed max-w-prose">
              We've built everything from factory software used on shop floors
              to learning platforms with thousands of students. The common thread?
              Every one of those shipped, and every one of those has real people
              using it right now.
            </p>
          </div>
        </div>

        {/* Proof points */}
        <div className="reveal mt-16 p-8 md:p-10 rounded-2xl bg-bg-muted border border-border relative overflow-hidden">
          <div className="deco-noise" />
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "7 days → 5 min", text: "Quotation time cut for COSEM's factory floor" },
              { num: "1500+", text: "Concurrent connections handled by Zorabase engine" },
              { num: "3 units", text: "Industrial manufacturing plants running our software" },
              { num: "100%", text: "Projects delivered to production — zero shelved" },
            ].map((p) => (
              <div key={p.text}>
                <span className="font-display font-bold text-lg text-text-primary block mb-1">
                  {p.num}
                </span>
                <span className="font-body text-xs text-text-secondary leading-relaxed">
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="reveal-stagger grid sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
          {[
            {
              title: "We ship, not slide",
              body: "Every project ends with something deployed and working — not a PDF with screenshots.",
            },
            {
              title: "We stay until it's done",
              body: "No vanishing after kickoff. We're around for the bugs, the edge cases, and the 'can you also add this' moments.",
            },
            {
              title: "One team, whole stack",
              body: "Design, frontend, backend, servers, deployment. You don't need to hire five people. You need us.",
            },
          ].map((v) => (
            <div key={v.title} className="reveal">
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                {v.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
