import Header from '@/components/layout/Header'
import Hero from '@/components/hero/Hero'
import PlansSummary from '@/components/sections/PlansSummary'
import About from '@/components/sections/About'
import Indicators from '@/components/sections/Indicators'
import Allies from '@/components/sections/Allies'
import News from '@/components/sections/News'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import SectionWave from '@/components/ui/SectionWave'
import PawPattern from '@/components/ui/PawPattern'
import { LandingCalculator } from '@/components/calculator/LandingCalculator'

export default function Inicio() {
  return (
    <main className="pt-[80px]">
      <Header />
      <Hero />
      <About />
      <SectionWave from="#f1f7fc" to="#ffffff" />
      <PlansSummary />
      <SectionWave from="#ffffff" to="#EAF4FF" />
      <section
        data-section="calculadora-ahorro"
        aria-label="Calculadora de ahorro estimado"
        className="py-16 sm:py-20 bg-[#EAF4FF] relative overflow-hidden"
      >
        <PawPattern color="#03497D" opacity={0.04} />
        <Container className="relative">
          <LandingCalculator />
        </Container>
      </section>
      <SectionWave from="#EAF4FF" to="#ffffff" />
      <Indicators />
      <SectionWave from="#ffffff" to="#f1f7fc" />
      <Allies />
      <SectionWave from="#f1f7fc" to="#ffffff" />
      <News />
      <SectionWave from="#ffffff" to="#07345b" />
      <FinalCta />
      <Footer />
    </main>
  )
}
