import SectionLabel from './SectionLabel';

const groups = [
  {
    label: 'ML & AI',
    items: ['Python', 'PyTorch', 'Scikit-Learn', 'MLflow', 'MLOps', 'Reinforcement Learning', 'LLMs', 'A/B Testing', 'GCP / Vertex AI', 'AWS'],
  },
  {
    label: 'Languages & Databases',
    items: ['SQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'PromQL', 'R', 'Databricks'],
  },
  {
    label: 'Tools & Infrastructure',
    items: ['Docker', 'FastAPI', 'Flask', 'Streamlit', 'Git', 'Jenkins', 'Grafana', 'Prometheus', 'Render'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel index="06" title="Skills" note="Instrumentation" />

      <div className="grid md:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.label} className="corner-frame border border-[var(--color-paper-line)] bg-[var(--color-panel)] shadow-sm p-5">
            <p className="font-mono text-[11px] text-[var(--color-teal)] mb-4 uppercase tracking-wider">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11.5px] px-2.5 py-1.5 border border-[var(--color-paper-line)] text-[var(--color-ink)] bg-[var(--color-paper)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
