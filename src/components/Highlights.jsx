import SectionLabel from './SectionLabel';

const items = [
  {
    tag: '2ND PLACE',
    color: 'var(--color-amber)',
    title: 'QBI Hackathon @ UCSF',
    date: 'Summer 2026',
    desc: 'Built HiveBlot with a team of nine over one weekend: a system that extracts protein targets, cell lines, antibodies, and experimental conditions directly from western blot figures in research papers, then makes it all searchable in plain language. Work that used to take a researcher a week now takes seconds.',
  },
  {
    tag: 'HACKATHON',
    color: 'var(--color-teal)',
    title: 'Databricks Data + AI Summit — "Apps & Agents for Good"',
    date: 'Summer 2026',
    desc: 'Built a healthcare-focused agent application on-site at the Databricks Hackathon, then spent the rest of the summit going deep on Lakehouse//RT and multi-agent orchestration with engineers from across the data community.',
  },
  {
    tag: 'CONFERENCE',
    color: 'var(--color-red-pin)',
    title: 'AWS Summit',
    date: 'Summer 2026',
    desc: 'Explored how AWS is scaling automated enterprise workflows with Amazon Quick and the Continuum security agent framework — production-grade infrastructure for autonomous agents.',
  },
  {
    tag: 'PUBLICATION',
    color: 'var(--color-navy-deep)',
    title: 'Drowsy Driver Detection — IRJET, Vol. 8',
    date: '2021',
    desc: 'A lightweight CNN eye-state classifier reaching 95% accuracy, built for edge deployment with a real-time alert pipeline triggering in under 150ms.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel index="05" title="Highlights" note="Hackathons · Conferences · Research" />

      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((it) => (
          <div key={it.title} className="corner-frame border border-[var(--color-paper-line)] bg-white/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="font-mono text-[10.5px] px-2 py-1 text-white"
                style={{ backgroundColor: it.color }}
              >
                {it.tag}
              </span>
              <span className="font-mono text-[11px] text-[var(--color-ink-soft)]">{it.date}</span>
            </div>
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-navy-deep)] text-[16px] mb-2 leading-snug">
              {it.title}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-soft)]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
