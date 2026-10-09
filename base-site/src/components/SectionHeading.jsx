export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <div className={`mb-10 ${className}`}>
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-semibold text-ink">{title}</h2>
    </div>
  )
}
