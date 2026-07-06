import SectionLabel from './SectionLabel';

const bullets = [
  {
    metric: '−40%',
    text: 'Root-cause analysis time on MQ flows, after building z-score and standard-normal anomaly and volume-deviation models wired into Prometheus and Grafana — catching 10+ potential failures a month before they escalated.',
  },
  {
    metric: '100k+',
    text: 'Daily EOD transactions made trackable for senior management via a "Definition of Done" dashboard spanning 15+ OTC and ETD mandates, cutting decision-making time by 40%.',
  },
  {
    metric: '+25%',
    text: 'Log-stream anomaly detection accuracy, using Isolation Forest and Gaussian Mixture Models to reduce manual triage effort.',
  },
  {
    metric: '−30%',
    text: 'Operational toil, by automating an alert-parsing pipeline with regex-based asset detection that auto-files Jira tickets to the right squad.',
  },
  {
    metric: '50+',
    text: 'Java microservices made traceable end-to-end through a real-time log telemetry pipeline built on Prometheus Pushgateway and PromQL, cutting mean-time-to-diagnose by 10%.',
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
          <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-1">Senior Associate — SRE Automation</p>
          <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-1">Mumbai, India</p>
          <p className="font-mono text-xs text-[var(--color-teal)] mt-3">Oct 2021 – Jul 2025</p>
        </div>

        <div className="space-y-5">
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-5 border-l-2 border-[var(--color-paper-line)] pl-5 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-[var(--color-paper)] border-2 border-[var(--color-teal)] rounded-full" />
              <span className="font-mono text-sm text-[var(--color-amber)] font-medium w-16 shrink-0 pt-0.5">
                {b.metric}
              </span>
              <p className="text-[14.5px] leading-relaxed text-[var(--color-ink)]">{b.text}</p>
            </div>
          ))}
          <div className="flex gap-5 border-l-2 border-[var(--color-paper-line)] pl-5 relative">
            <span className="absolute -left-[7px] top-1 w-3 h-3 bg-[var(--color-paper)] border-2 border-[var(--color-teal)] rounded-full" />
            <span className="font-mono text-sm text-[var(--color-amber)] font-medium w-16 shrink-0 pt-0.5">
              −10%
            </span>
            <p className="text-[14.5px] leading-relaxed text-[var(--color-ink)]">
              Manual effort on critical workflows, after leading unit and chaos testing
              (Gremlin) across the DB, Asset Inventory, and Eligibility Engine for
              continuous monitoring of critical engine responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
