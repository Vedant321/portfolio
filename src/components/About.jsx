import SectionLabel from './SectionLabel';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel index="02" title="About" note="Buffalo, NY" />
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
        <div className="space-y-5 text-[15px] leading-relaxed text-[var(--color-ink)]">
          <p>
            I spent four years at Morgan Stanley making sure other engineers' 2 a.m. pages
            never had to happen — building anomaly detection on messaging infrastructure,
            wiring up telemetry across fifty-plus microservices, and automating the
            triage work that used to eat a full shift. That's where I learned that a model
            is only useful once it's actually running in front of someone who needs it.
          </p>
          <p>
            Now I'm back in school at the University at Buffalo, focused on reinforcement learning,
            statistical learning, and how large language models work under the hood.
            Alongside coursework, I build end-to-end projects that combine data engineering and
            machine learning — a dbt and PostgreSQL pipeline modeling 600,000+
            supply chain records into a star schema, a Vertex AI pipeline fine-tuning an LLM with RLAIF,
            and a hackathon tool that pulls structured data out of research PDFs. I'd rather ship something
            small and real than leave it in a notebook.
          </p>
          <p>
            I'm looking for Data Engineering, Data Science, or ML Engineering roles where
            I can work close to production systems again.
          </p>
        </div>

        <div className="corner-frame border border-[var(--color-paper-line)] bg-[var(--color-panel)] shadow-sm p-5 font-mono text-[13px]">
          <p className="text-[var(--color-teal)] text-xs mb-3">// EDUCATION LOG</p>
          <div className="mb-4">
            <p className="text-[var(--color-heading)] font-medium">MS, Data Science</p>
            <p className="text-[var(--color-ink-soft)] text-xs">University at Buffalo · Aug 2025 – Dec 2026</p>
            <p className="text-[var(--color-ink-soft)] text-xs">GPA: 3.54 / 4.0</p>
          </div>
          <div className="mb-4">
            <p className="text-[var(--color-heading)] font-medium">BE, Information Technology</p>
            <p className="text-[var(--color-ink-soft)] text-xs">VPPCOE&VA, Mumbai · 2017 – 2021</p>
          </div>
          <div className="pt-3 border-t border-[var(--color-paper-line)] text-xs text-[var(--color-ink-soft)]">
            <p>Coursework: Machine Learning, Statistical Learning,</p>
            <p>Probability, Data Models & Query Languages, RL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
