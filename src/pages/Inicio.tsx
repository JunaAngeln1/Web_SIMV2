import Header from '@/components/layout/Header'
import Hero from '@/components/hero/Hero'
import Benefits from '@/components/sections/Benefits'
import PlansSummary from '@/components/sections/PlansSummary'
import PetManager from '@/components/sections/PetManager'
import Allies from '@/components/sections/Allies'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FAQBanner from '@/components/sections/FAQBanner'

export default function Inicio() {
  return (
    <main className="pt-[80px]">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero principal */}
      <Hero />

      {/* 3. Franja de beneficios */}
      <Benefits />

      {/* 4. Nuestros planes */}
      <PlansSummary />

      {/* 5. Personal Pet Manager */}
      <PetManager />

      {/* 6. Red de atención */}
      <Allies />

      {/* 7. ¿Por qué elegir SIM? */}
      <WhyChooseUs />

      {/* 8. Preguntas frecuentes + Banner promocional */}
      <FAQBanner />
    </main>
  )
}
