export default function FeatureCard({ icon: Icon, title, description, color }) {
  return (
    <article className="flex items-start gap-7 transition duration-300 hover:-translate-y-1">
      <div className={`flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full ${color}`}>
        <Icon className="h-9 w-9 text-white" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-display text-2xl font-medium text-ink">{title}</h3>
        <p className="mt-3 max-w-[260px] leading-[26px] text-mute">{description}</p>
      </div>
    </article>
  )
}
