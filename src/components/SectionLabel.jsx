export default function SectionLabel({ index, title, note }) {
  return (
    <div className="flex items-end justify-between mb-10 border-b border-[var(--color-paper-line)] pb-3">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-[var(--color-teal)]">{index}</span>
        <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-navy-deep)]">
          {title}
        </h2>
      </div>
      {note && (
        <span className="hidden sm:block font-mono text-[11px] text-[var(--color-ink-soft)] uppercase tracking-wider">
          {note}
        </span>
      )}
    </div>
  );
}
