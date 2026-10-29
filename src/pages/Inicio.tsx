import Header from '@/components/layout/Header'
import Hero from '@/components/hero/Hero'
import PlansSummary from '@/components/sections/PlansSummary'
import About from '@/components/sections/About'
import Indicators from '@/components/sections/Indicators'
import Allies from '@/components/sections/Allies'
import News from '@/components/sections/News'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/layout/Footer'

export default function Inicio() {
  return (
    <main className="pt-[80px]">
      <Header />
      <Hero />
      <About />
      <PlansSummary />
      <Indicators />
      <Allies />
      <News />
      <FinalCta />
      <Footer />
    </main>
  )
}
