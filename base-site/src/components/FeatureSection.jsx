import { Globe, UserRound, UsersRound } from 'lucide-react'
import FeatureCard from './FeatureCard.jsx'

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
const features = [
  { title: '24/7 Support', icon: UserRound, color: 'bg-pink', description },
  { title: 'Take Ownership', icon: Globe, color: 'bg-jade', description },
  { title: 'Team Work', icon: UsersRound, color: 'bg-sun', description },
]

export default function FeatureSection() {
  return (
    <section id="features" className="relative z-10 pb-24 pt-8 lg:pt-[110px]">
      <div className="mx-auto grid max-w-[1326px] gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-10 xl:px-0">
        {features.map((f) => <FeatureCard key={f.title} {...f} />)}
      </div>
    </section>
  )
}
