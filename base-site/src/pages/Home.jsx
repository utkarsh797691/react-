import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}
