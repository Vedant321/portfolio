export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
      <div>
        <p className="font-mono text-xs text-[var(--color-teal)] mb-4 tracking-wider">
          FIG. 01 — PROFILE SCHEMATIC
        </p>
        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-[var(--color-navy-deep)]">
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
            className="font-mono text-sm px-5 py-3 bg-[var(--color-navy-deep)] text-[var(--color-paper)] hover:bg-[var(--color-navy)] transition-colors"
          >
            View projects →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-5 py-3 border border-[var(--color-navy-deep)] text-[var(--color-navy-deep)] hover:bg-white transition-colors"
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

      <div className="corner-frame border border-[var(--color-paper-line)] bg-white/40 p-4">
        <svg viewBox="0 0 420 380" className="w-full h-auto" role="img" aria-label="Diagram showing Vedant's background branching into experience, projects, skills, and education">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-ink-soft)" />
            </marker>
          </defs>

          {/* connecting lines */}
          <path d="M120,60 L120,150" stroke="var(--color-ink-soft)" strokeWidth="1.2" className="dash-flow" fill="none" markerEnd="url(#arrow)" />
          <path d="M120,150 L60,220" stroke="var(--color-ink-soft)" strokeWidth="1.2" className="dash-flow" fill="none" markerEnd="url(#arrow)" />
          <path d="M120,150 L180,220" stroke="var(--color-ink-soft)" strokeWidth="1.2" className="dash-flow" fill="none" markerEnd="url(#arrow)" />
          <path d="M120,150 L300,110" stroke="var(--color-ink-soft)" strokeWidth="1.2" className="dash-flow" fill="none" markerEnd="url(#arrow)" />
          <path d="M60,220 L60,300" stroke="var(--color-ink-soft)" strokeWidth="1.2" className="dash-flow" fill="none" markerEnd="url(#arrow)" />
          <path d="M180,220 L180,300" stroke="var(--color-ink-soft)" strokeWidth="1.2" className="dash-flow" fill="none" markerEnd="url(#arrow)" />

          {/* root node */}
          <g>
            <rect x="60" y="25" width="120" height="35" fill="var(--color-navy-deep)" />
            <text x="120" y="47" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="var(--color-paper)">VEDANT.SHINDE</text>
          </g>

          {/* core node */}
          <g>
            <circle cx="120" cy="150" r="4" fill="var(--color-teal)" className="blip" />
            <rect x="55" y="165" width="130" height="30" fill="none" stroke="var(--color-navy-deep)" strokeWidth="1.2" />
            <text x="120" y="184" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="var(--color-navy-deep)">CORE_SYSTEMS</text>
          </g>

          {/* branch: experience */}
          <g>
            <rect x="10" y="220" width="100" height="30" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1" />
            <text x="60" y="239" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9.5" fill="var(--color-ink)">EXPERIENCE</text>
            <rect x="10" y="300" width="100" height="46" fill="white" stroke="var(--color-amber)" strokeWidth="1.2" />
            <text x="60" y="319" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="var(--color-navy-deep)">Morgan</text>
            <text x="60" y="333" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="var(--color-navy-deep)">Stanley SRE</text>
          </g>

          {/* branch: education */}
          <g>
            <rect x="130" y="220" width="100" height="30" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1" />
            <text x="180" y="239" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9.5" fill="var(--color-ink)">EDUCATION</text>
            <rect x="130" y="300" width="100" height="46" fill="white" stroke="var(--color-teal)" strokeWidth="1.2" />
            <text x="180" y="319" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="var(--color-navy-deep)">MS Data Sci.</text>
            <text x="180" y="333" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="var(--color-navy-deep)">SUNY Buffalo</text>
          </g>

          {/* branch: projects/skills */}
          <g>
            <rect x="255" y="90" width="140" height="40" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1" />
            <text x="325" y="106" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9.5" fill="var(--color-ink)">RL · MLOPS · LLM</text>
            <text x="325" y="120" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9.5" fill="var(--color-ink)">DATA PIPELINES</text>
          </g>

          <circle cx="300" cy="110" r="3" fill="var(--color-red-pin)" className="blip" />

          <text x="10" y="370" fontFamily="IBM Plex Mono" fontSize="8" fill="var(--color-ink-soft)">SCALE 1:1 — REV. 2026</text>
        </svg>
      </div>
    </section>
  );
}
