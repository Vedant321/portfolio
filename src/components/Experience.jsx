import SectionLabel from './SectionLabel';

const bullets = [
  {
    metric: '−10+',
    text: 'Monthly incidents prevented by engineering production Python ETL pipelines for IBM MQ transaction flows with z-score anomaly detection, enabling early failure signals and supporting automated infrastructure scaling decisions.',
  },
  {
    metric: '−40%',
    text: 'Decision-making time for stakeholders across 15+ regulatory mandates by designing a centralized FastAPI data application and 15+ analytical datasets tracking 100,000+ daily EOD transactions, replacing manual reporting.',
  },
  {
    metric: '−30%',
    text: 'Operational toil by automating alert-parsing workflows that extracted asset signals from the data warehouse and auto-generated Jira tickets routed to 5 engineering squads, eliminating 10+ hours of manual daily ticket creation for production managers.',
  },
  {
    metric: '−10%',
    text: 'Mean-time-to-diagnose across production services by architecting a centralized Prometheus and Grafana telemetry pipeline ingesting logs from 50+ Java microservices using PromQL aggregations.',
  },
  {
    metric: '−10%',
    text: 'Deployment effort across 3 repositories by optimizing Jenkins CI/CD pipelines, removing redundant build steps, and standardizing repository structure.',
  },
  {
    metric: '5+',
    text: 'Code reviews conducted per week while leading 15+ sprints and mentoring 2 engineers, strengthening engineering standards, cross-team communication, and maintainability of Python & SQL data workflows.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel index="03" title="Experience" note="2021 — 2025" />

      <div className="grid md:grid-cols-[220px_1fr] gap-8">
        <div>
          <p className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-heading)]">
            Morgan Stanley
          </p>
          <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-1">
            Senior Associate — Python Developer (SRE)
          </p>
          <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-1">
            Mumbai, India
          </p>
          <p className="font-mono text-xs text-[var(--color-teal)] mt-3">
            Oct 2021 – Jul 2025
          </p>
        </div>

        <div className="space-y-5">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="flex gap-5 border-l-2 border-[var(--color-paper-line)] pl-5 relative"
            >
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-[var(--color-paper)] border-2 border-[var(--color-teal)] rounded-full" />

              <span className="font-mono text-sm text-[var(--color-amber)] font-medium w-16 shrink-0 pt-0.5">
                {b.metric}
              </span>

              <p className="text-[14.5px] leading-relaxed text-[var(--color-ink)]">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}