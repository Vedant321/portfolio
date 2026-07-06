import SectionLabel from './SectionLabel';

const projects = [
  {
    id: 'P-01',
    title: 'RLAIF Flight Booking Dialogue Agent',
    desc: 'A 3-stage RLAIF pipeline fine-tuning Mistral-7B + LoRA via PPO on 5,000+ AirDialogue samples, with a Gemini simulator and AI judge scoring responses 1–10 — no human labelling required. Fixed float16 overflow and PPO ratio divergence with mixed-precision training and separate actor-critic optimizers.',
    stack: ['Vertex AI', 'PPO', 'LoRA', 'Mistral-7B', 'GCP'],
    link: 'https://github.com/Vedant321',
    linkLabel: 'GitHub profile ↗',
  },
  {
    id: 'P-02',
    title: 'Autonomous Warehouse Robot (RL)',
    desc: 'A Gymnasium-compliant warehouse environment built from scratch, with SARSA, Q-learning, and Deep Q-Network agents trained to pick and deliver under constraints — a 10% lift in episodic reward with stable performance under stochastic conditions.',
    stack: ['Gymnasium', 'DQN', 'SARSA', 'Q-Learning'],
    link: 'https://github.com/Vedant321/autonomous-warehouse-robot',
    linkLabel: 'View repo ↗',
  },
  {
    id: 'P-03',
    title: 'RL Stock Trading Agent',
    desc: 'Q-learning over two years of historical Nvidia data with $100k simulated capital — custom state and reward functions, tuned hyperparameters, and full performance visualization for risk-aware trading decisions.',
    stack: ['Q-Learning', 'Python', 'Pandas'],
    link: 'https://github.com/Vedant321/autonomous-trading-agent',
    linkLabel: 'View repo ↗',
  },
  {
    id: 'P-04',
    title: 'Supply Chain Data Pipeline',
    desc: 'An end-to-end pipeline ingesting 600,000+ records into a normalized 3NF PostgreSQL schema, with dbt transforming OLTP into a star-schema OLAP model and automated data-quality tests. Insights surfaced through a Streamlit dashboard deployed on Render.',
    stack: ['PostgreSQL', 'dbt', 'Python', 'Streamlit'],
    link: 'https://github.com/Vedant321/supply-chain-data-pipeline',
    linkLabel: 'View repo ↗',
  },
  {
    id: 'P-05',
    title: 'Online Retail Customer Analysis',
    desc: 'RFM feature engineering across 500k+ transactions, comparing Logistic Regression, XGBoost, and Random Forest for high-value customer targeting. Best model shipped via FastAPI, containerized with Docker, and hosted on Render for live inference.',
    stack: ['XGBoost', 'FastAPI', 'Docker', 'MLflow'],
    link: 'https://github.com/Vedant321/Online_Retail_Analysis',
    linkLabel: 'View repo ↗',
  },
  {
    id: 'P-06',
    title: 'LLM SQL Query Assistant',
    desc: 'A Streamlit app that turns plain-English questions into SQL against a 10k+ record movie dataset, so non-technical users can get answers without writing a query.',
    stack: ['LLM', 'Streamlit', 'SQL'],
    link: 'https://github.com/Vedant321/LLM_SQL_Query_Assistant',
    linkLabel: 'View repo ↗',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel index="04" title="Projects" note="6 systems, shipped end-to-end" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="corner-frame group border border-[var(--color-paper-line)] bg-[var(--color-panel)] shadow-sm p-5 flex flex-col hover:shadow-md hover:border-[var(--color-teal)] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] text-[var(--color-ink-soft)]">{p.id}</span>
              <span className="font-mono text-[11px] text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity">
                {p.linkLabel}
              </span>
            </div>
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-heading)] text-[17px] leading-snug mb-2">
              {p.title}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-soft)] flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[var(--color-paper-line)]">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-[10.5px] px-2 py-1 bg-[var(--color-paper)] text-[var(--color-ink)] border border-[var(--color-paper-line)]">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
