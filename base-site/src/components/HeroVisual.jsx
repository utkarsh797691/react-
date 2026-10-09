import { BarChart3, Code2, Palette, TrendingUp } from 'lucide-react'

const bars = ['h-10', 'h-16', 'h-12', 'h-20', 'h-14']

export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto mt-14 h-[340px] w-[340px] rounded-full bg-brand sm:h-[440px] sm:w-[440px] lg:absolute lg:left-1/2 lg:top-[-215px] lg:mx-0 lg:mt-0 lg:h-[780px] lg:w-[780px] xl:h-[900px] xl:w-[900px] xl:-top-[215px]"
    >
      <div className="absolute left-[8%] top-[34%] h-[48%] w-[48%] animate-float rounded-2xl bg-white shadow-2xl shadow-black/20 lg:left-[44%] lg:top-[28%] lg:h-[34%] lg:w-[30%]">
        <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-pink" /><span className="h-2.5 w-2.5 rounded-full bg-sun" /><span className="h-2.5 w-2.5 rounded-full bg-jade" />
          <span className="ml-3 h-2 flex-1 rounded-full bg-gray-100" />
        </div>
        <div className="space-y-3 p-4">
          <div className="h-3 w-2/3 rounded-full bg-ink/80" />
          <div className="h-2 w-full rounded-full bg-gray-100" />
          <div className="h-2 w-5/6 rounded-full bg-gray-100" />
          <div className="flex items-end gap-2 pt-2">
            {bars.map((h, i) => <span key={i} className={`w-full rounded-md ${h} ${i === 3 ? 'bg-brand' : 'bg-brand/25'}`} />)}
          </div>
        </div>
      </div>
      <div className="absolute right-[2%] top-[22%] flex animate-float-slow items-center gap-3 rounded-2xl bg-white p-3 shadow-xl lg:left-[40%] lg:right-auto lg:top-[18%]">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink"><Palette className="h-5 w-5 text-white" /></span>
        <div className="space-y-1.5"><div className="h-2 w-16 rounded-full bg-ink/70" /><div className="h-2 w-10 rounded-full bg-gray-200" /></div>
      </div>
      <div className="absolute bottom-[14%] right-[6%] flex animate-float items-center gap-3 rounded-2xl bg-white p-3 shadow-xl lg:bottom-[24%] lg:right-[10%]">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-jade"><TrendingUp className="h-5 w-5 text-white" /></span>
        <div className="space-y-1.5"><div className="h-2 w-14 rounded-full bg-ink/70" /><div className="h-2 w-9 rounded-full bg-gray-200" /></div>
      </div>
      <div className="absolute bottom-[12%] left-[16%] flex h-14 w-14 animate-float-slow items-center justify-center rounded-2xl bg-sun shadow-xl lg:bottom-[22%] lg:left-[38%]"><Code2 className="h-6 w-6 text-white" /></div>
      <div className="absolute right-[18%] top-[10%] flex h-12 w-12 animate-float items-center justify-center rounded-full bg-white/20 lg:right-[14%] lg:top-[34%]"><BarChart3 className="h-5 w-5 text-white" /></div>
      <span className="absolute left-[30%] top-[18%] h-4 w-4 rounded-full bg-white/40 lg:left-[44%] lg:top-[12%]" />
      <span className="absolute bottom-[8%] right-[30%] h-6 w-6 rounded-full border-2 border-white/40" />
    </div>
  )
}
