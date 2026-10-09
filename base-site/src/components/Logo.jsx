import { Zap } from 'lucide-react'

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-4" aria-label="Base home">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand">
        <Zap className="h-6 w-6 fill-white text-white" strokeWidth={1.5} />
      </span>
      <span className="font-display text-[28px] font-medium leading-none text-ink">Base</span>
    </a>
  )
}
