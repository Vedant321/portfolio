export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
      <div>
        <p className="font-mono text-xs text-[var(--color-teal)] mb-4 tracking-wider">
          FIG. 01 — PROFILE SCHEMATIC
        </p>
        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-[var(--color-heading)]">
          Vedant Shinde
        </h1>
        <p className="mt-5 font-mono text-sm sm:text-base text-[var(--color-ink-soft)] max-w-lg">
          Data Scientist / ML Engineer — building systems that turn raw signals into
          decisions: anomaly detection, RL agents, and pipelines that run unattended.
        </p>
        <p className="mt-5 text-[15px] text-[var(--color-ink)] max-w-lg leading-relaxed">
          MS in Data Science candidate at the University at Buffalo, previously a Senior
          Associate in SRE Automation at Morgan Stanley, where I spent four years
          instrumenting production systems so failures show up on a dashboard before they
          show up in an incident channel.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="font-mono text-sm px-5 py-3 bg-[var(--color-heading)] text-[var(--color-paper)] hover:bg-[var(--color-amber)] transition-colors"
          >
            View projects →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-5 py-3 border border-[var(--color-heading)] text-[var(--color-heading)] hover:bg-[var(--color-heading)] hover:text-[var(--color-paper)] transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-[var(--color-ink-soft)]">
          <span>UNIVERSITY AT BUFFALO</span>
          <span>·</span>
          <span>EX-MORGAN STANLEY</span>
          <span>·</span>
          <span>BUFFALO, NY</span>
        </div>
      </div>

      <div className="relative">
        <div className="corner-frame border border-[var(--color-paper-line)] bg-[var(--color-panel)] shadow-sm p-3">
          <div className="relative overflow-hidden">
            <img
              src="/images/headshot.jpg"
              alt="Vedant Shinde"
              className="w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.05]"
            />
            {/* corner crosshairs on the photo itself */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="12" x2="4" y2="12" stroke="var(--color-amber)" strokeWidth="0.6" />
              <line x1="12" y1="0" x2="12" y2="4" stroke="var(--color-amber)" strokeWidth="0.6" />
              <line x1="100" y1="88" x2="96" y2="88" stroke="var(--color-teal)" strokeWidth="0.6" />
              <line x1="88" y1="100" x2="88" y2="96" stroke="var(--color-teal)" strokeWidth="0.6" />
            </svg>
            <span className="absolute top-2 right-2 font-mono text-[10px] px-2 py-0.5 bg-[var(--color-panel)]/90 text-[var(--color-ink-soft)] border border-[var(--color-paper-line)]">
              FIG. 01
            </span>
          </div>
          <div className="flex items-center justify-between mt-3 px-1 font-mono text-[10.5px] text-[var(--color-ink-soft)]">
            <span>V.SHINDE — DS/ML ENGINEER</span>
            <span>SCALE 1:1 · REV. 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
