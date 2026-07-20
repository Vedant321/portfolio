import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? 'bg-[var(--color-paper)]/90 backdrop-blur border-b border-[var(--color-paper-line)]' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-[var(--font-display)] font-semibold text-lg text-[var(--color-heading)] flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="9" fill="none" stroke="var(--color-amber)" strokeWidth="1.5" />
            <line x1="16" y1="2" x2="16" y2="8" stroke="var(--color-amber)" strokeWidth="1.5" />
            <line x1="16" y1="24" x2="16" y2="30" stroke="var(--color-amber)" strokeWidth="1.5" />
            <line x1="2" y1="16" x2="8" y2="16" stroke="var(--color-amber)" strokeWidth="1.5" />
            <line x1="24" y1="16" x2="30" y2="16" stroke="var(--color-amber)" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="2" fill="var(--color-teal)" />
          </svg>
          VS
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-[var(--color-ink-soft)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--color-heading)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Vedant_Shinde_UB_Resume1.pdf"
          download
          className="hidden md:inline-block font-mono text-xs px-4 py-2 border border-[var(--color-heading)] text-[var(--color-heading)] hover:bg-[var(--color-heading)] hover:text-[var(--color-paper)] transition-colors"
        >
          Resume ↓
        </a>

        <button
          className="md:hidden text-[var(--color-heading)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--color-paper)] border-b border-[var(--color-paper-line)] px-6 pb-4">
          <ul className="flex flex-col gap-4 font-mono text-sm text-[var(--color-ink-soft)]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/Vedant_Shinde_UB_Resume1.pdf" download className="text-[var(--color-heading)]">
                Resume ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
