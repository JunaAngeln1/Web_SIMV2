/**
 * src/components/calculator/LandingCalculator.tsx
 * Diseño publicitario estilo landing page para seguros veterinarios S.I.M.
 * Estética moderna, amigable, minimalista y profesional.
 * Diseño basado en especificación detallada: sin ilustraciones de animales,
 * paleta de colores de marca, tarjeta de factura como elemento central.
 *
 * Dimensiones: aprox. 870 × 727 px
 * Fondo: azul claro derivado de #48AFE8
 */

interface LandingCalculatorProps {
  className?: string
}

interface InvoiceRow {
  concepto: string
  precio: string
  especial?: boolean
  tipo?: 'pagar'
}

export function LandingCalculator({ className }: LandingCalculatorProps) {

  // Filas de factura
  const filasFactura: InvoiceRow[] = [
    { concepto: 'CIRUGÍA', precio: '$600.000' },
    { concepto: 'RAYOS X', precio: '$100.000' },
    { concepto: 'MEDICACIÓN', precio: '$20.000' },
    { concepto: 'TOTAL', precio: '$720.000' },
    { concepto: 'CON SIM AHORRA HASTA 80%', precio: '$576.000', especial: true },
    { concepto: 'TÚ PAGAS', precio: '$144.000', tipo: 'pagar' },
  ]

  return (
    <div
      className={[
        'w-full min-h-auto bg-[#EAF4FF] flex flex-col items-center justify-center p-8 py-[40px]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Encabezado principal */}
      <header className="text-center mb-6">
        <h1 className="text-[48px] font-bold tracking-tight leading-tight text-[#03497D] mb-2">
          Evita facturas<span className="text-[#11BFBF]"> inesperadas</span>
        </h1>
        <p className="text-[20px] text-[#7F9DB8] leading-[1.5] max-w-[850px] mx-auto">
          Ejemplo de ahorro con SIM. Los montos son referenciales y la cobertura real depende del plan contratado.
        </p>
      </header>

      {/* Tarjeta central de factura */}
      <div className="relative w-full max-w-[750px] bg-white rounded-[28px] shadow-suave border border-[#E8EEF3] p-[40px] flex flex-col items-center">
        {/* Título de la tarjeta */}
        <h2 className="text-[34px] font-bold text-[#03497D] mb-[28px] text-center">
          Factura veterinaria
        </h2>

        {/* Filas de factura */}
        <div className="w-full space-y-[14px]">
          {filasFactura.map((fila, i) => {
            const esEspecial = fila.especial
            const esPagar = fila.tipo === 'pagar'
            return (
              <div
                key={i}
                className={[
                  'flex items-center justify-between px-[30px] py-[32px] rounded-[24px] border border-transparent',
                  esEspecial
                    ? 'bg-[#8BA533] text-white font-bold'
                    : esPagar
                    ? 'bg-[#E8EEF3] text-[#03497D] font-semibold'
                    : 'bg-[#F0F4FF] border-[#03497D]/20 text-[#03497D] font-semibold',
                ].filter(Boolean).join(' ')}
              >
                <span className="text-[19px]">{fila.concepto}</span>
                <span className="text-[19px] font-semibold">{fila.precio}</span>
              </div>
            )
          })}
        </div>

        {/* Nota aclaratoria */}
        <p className="mt-[24px] text-[14px] text-[#7F9DB8] text-center max-w-[600px] leading-[1.5]">
          Los montos mostrados son un ejemplo ilustrativo. La cobertura y el porcentaje de reembolso
          varían según el plan contratado con S.I.M. Consulta los términos de tu póliza.
        </p>

        {/* Perforated bottom edge */}
        <div className="flex justify-center mt-[6px] mb-[8px]">
          <svg width="360" height="14" viewBox="0 0 360 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 18 }).map((_, i) => (
              <polygon
                key={i}
                points={`${i * 20},0 ${i * 20 + 9},7 ${i * 20 + 18},0`}
                fill="white"
                stroke="#B8C8D8"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}
