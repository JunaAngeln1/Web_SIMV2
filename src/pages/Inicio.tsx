import Header from '@/components/layout/Header'
import Hero from '@/components/hero/Hero'
import Benefits from '@/components/sections/Benefits'
import PlansSummary from '@/components/sections/PlansSummary'
import PetManager from '@/components/sections/PetManager'
import Allies from '@/components/sections/Allies'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import News from '@/components/sections/News'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/layout/Footer'
import SectionWave from '@/components/ui/SectionWave'

export default function Inicio() {
  return (
    <main className="pt-[80px]">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero principal */}
      <Hero />

      {/* Separador */}
      <SectionWave from="#ffffff" to="#F4F5F6" />

      {/* 3. Franja de beneficios */}
      <Benefits />

      {/* Separador */}
      <SectionWave from="#F4F5F6" to="#ffffff" />

      {/* 4. Nuestros planes */}
      <PlansSummary />

      {/* Separador */}
      <SectionWave from="#ffffff" to="#F4F5F6" />

      {/* 5. Personal Pet Manager */}
      <PetManager />

      {/* Separador */}
      <SectionWave from="#F4F5F6" to="#ffffff" />

      {/* 6. Red de atención */}
      <Allies />

      {/* Separador */}
      <SectionWave from="#ffffff" to="#E9F2DC" />

      {/* 7. ¿Por qué elegir SIM? */}
      <WhyChooseUs />

      {/* Separador */}
      <SectionWave from="#E9F2DC" to="#ffffff" />

      {/* 8. Preguntas frecuentes */}
      <News />

      {/* Separador */}
      <SectionWave from="#ffffff" to="#003047" />

      {/* 9. Banner de afiliación */}
      <FinalCta />

      {/* 10. Footer */}
      <Footer />
    </main>
  )
}
