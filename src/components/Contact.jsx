import SectionLabel from './SectionLabel';

const links = [
  { label: 'Email', value: 'vedantve@gmail.com', href: 'mailto:vedantve@gmail.com' },
  { label: 'LinkedIn', value: 'in/vedant-nilesh-shinde', href: 'https://linkedin.com/in/vedant-nilesh-shinde' },
  { label: 'GitHub', value: 'Vedant321', href: 'https://github.com/Vedant321' },
  { label: 'LeetCode', value: 'Vedant_12345', href: 'https://leetcode.com/u/Vedant_12345/' },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel index="07" title="Contact" note="+1 (716) 346-9092" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-[15px] leading-relaxed text-[var(--color-ink)] max-w-md">
            Open to Data Engineering, Data Science, and ML Engineering roles. If something
            here is relevant to what you're building, I'd like to hear about it.
          </p>
          <a
            href="mailto:vedantve@gmail.com"
            className="inline-block mt-6 font-mono text-sm px-5 py-3 bg-[var(--color-navy-deep)] text-[var(--color-paper)] hover:bg-[var(--color-navy)] transition-colors"
          >
            Email me →
          </a>
        </div>

        <div className="corner-frame border border-[var(--color-paper-line)] bg-white/50 divide-y divide-[var(--color-paper-line)]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 hover:bg-white transition-colors group"
            >
              <span className="font-mono text-xs text-[var(--color-ink-soft)] uppercase tracking-wider">
                {l.label}
              </span>
              <span className="font-mono text-sm text-[var(--color-navy-deep)] group-hover:text-[var(--color-teal)] transition-colors">
                {l.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-paper-line)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[var(--color-ink-soft)]">
        <span>© {new Date().getFullYear()} Vedant Shinde</span>
        <span>BUILT WITH REACT · TAILWIND · DEPLOYED ON VERCEL</span>
      </div>
    </footer>
  );
}
