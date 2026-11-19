/**
 * src/data/news.ts
 *
 * Noticias y consejos de S.I.M.
 * Fuente única de verdad para la sección de noticias (inicio y página /noticias).
 *
 * Regla crítica (data/README.md): no inventar noticias institucionales reales.
 * Todo el contenido de este archivo es de ejemplo claramente identificable
 * hasta que SIM apruebe las publicaciones oficiales.
 */

export interface NewsItem {
  id: string
  category: string
  title: string
  description: string
  content: string
  date: string
  readTime: string
  image: string
  slug: string
}

export const news: NewsItem[] = [
  {
    id: 'noticia-destacada-1',
    category: 'Bienestar animal',
    title: 'Señales de estrés en mascotas y cómo ayudarlas',
    description:
      'Aprende a identificar los indicadores de ansiedad en perros y gatos, y qué acciones tomar para proteger su bienestar emocional.',
    content:
      'Las mascotas también experimentan estrés, aunque a veces lo manifiestan de formas sutiles. Cambios en el apetito, lamido excesivo, ocultarse más de lo habitual o alteraciones en el sueño pueden ser señales de alerta.\n\nEntre las causas más comunes se encuentran cambios de rutina, ruidos fuertes (como tormentas o fuegos artificiales), períodos prolongados de soledad y la llegada de nuevos miembros a la familia.\n\nAlgunas recomendaciones prácticas:\n- Mantén horarios constantes de comida y paseos.\n- Proporciona un espacio tranquilo donde tu mascota pueda refugiarse.\n- Usa feromonas o suplementos calmantes solo bajo indicación veterinaria.\n- Consulta a un profesional si los síntomas persisten más de dos semanas.\n\nEn SIM contamos con un plan de bienestar preventivo que incluye controles periódicos y orientación para el cuidado emocional de tu compañero.',
    date: 'Marzo 2026',
    readTime: '4 min de lectura',
    image: '/assets/images/news/noticia-bienestar.svg',
    slug: 'senales-estres-mascotas',
  },
  {
    id: 'noticia-destacada-2',
    category: 'Prevención',
    title: 'Cuidados esenciales para tu perro en primavera',
    description:
      'Revisión de vacunas, control de parásitos y recomendaciones de hidratación para la temporada de calor.',
    content:
      'La llegada de la primavera trae temperaturas más cálidas y mayor actividad al aire libre, lo que también implica nuevos riesgos para la salud de tu perro.\n\nEl control de parásitos internos y externos es fundamental en esta época. Pulgas, garrapatas y mosquitos se vuelven más activos y pueden transmitir enfermedades graves si no se previenen a tiempo.\n\nRecomendaciones clave:\n- Actualiza el calendario de vacunación y desparasitación con tu veterinario.\n- Evita paseos en las horas de mayor calor (entre las 11:00 y las 16:00).\n- Lleva siempre agua fresca y ofrece sombra durante las salidas.\n- Revisa las almohadillas de sus patas tras caminar en superficies calientes.\n- Mantén su cepillado frecuente para ayudar a regular la temperatura corporal.\n\nRecuerda que los planes de SIM incluyen campañas de prevención estacionales y acceso a la red de clínicas aliadas.',
    date: 'Febrero 2026',
    readTime: '5 min de lectura',
    image: '/assets/images/news/noticia-prevencion.svg',
    slug: 'cuidados-perro-primavera',
  },
  {
    id: 'noticia-destacada-3',
    category: 'Consejos',
    title: 'Alimentación balanceada para gatos adultos',
    description:
      'Nutrientes clave, porciones recomendadas y alimentos que deben evitarse para mantener a tu gato saludable.',
    content:
      'Una alimentación adecuada es la base de una vida larga y saludable para los gatos. A diferencia de los perros, los gatos son carnívoros estrictos y requieren nutrientes específicos que solo se encuentran en proteínas de origen animal.\n\nNutrientes esenciales:\n- Proteínas de alta calidad: fundamentales para el mantenimiento muscular.\n- Taurina: aminoácido crítico para la visión y el corazón.\n- Ácidos grasos Omega-3 y Omega-6: para piel y pelaje saludables.\n- Vitaminas A, D y E: en las proporciones adecuadas para felinos.\n\nAlimentos que deben evitarse:\n- Cebolla y ajo (pueden causar anemia).\n- Chocolate y cafeína.\n- Uvas y pasas.\n- Leche de vaca (muchos gatos son intolerantes a la lactosa).\n- Huesos cocidos (pueden astillarse y causar lesiones).\n\nLa cantidad de alimento depende de la edad, peso y nivel de actividad de tu gato. Consulta con tu veterinario para definir la porción ideal y evita dejar comida disponible todo el día para prevenir el sobrepeso.',
    date: 'Enero 2026',
    readTime: '3 min de lectura',
    image: '/assets/images/news/noticia-cuidado.svg',
    slug: 'alimentacion-gatos-adultos',
  },
  {
    id: 'noticia-destacada-4',
    category: 'Novedades SIM',
    title: 'Nuevos beneficios en la red de clínicas aliadas',
    description: 'Ampliamos la cobertura veterinaria con más centros de atención en todo el país.',
    content:
      'Como parte de nuestro compromiso con el acceso a la salud animal, SIM ha firmado nuevos acuerdos con clínicas veterinarias en varias regiones del país, ampliando la red de atención disponible para nuestros afiliados.\n\n¿Qué incluye esta ampliación?\n- Más de 50 nuevos centros veterinarios aliados.\n- Cobertura de consultas de control y urgencias en ciudades adicionales.\n- Descuentos exclusivos en exámenes de laboratorio e imágenes.\n- Acceso prioritario a campañas de vacunación y desparasitación.\n\nEsta expansión forma parte del plan de crecimiento de SIM para acercar los servicios veterinarios a más familias, sin importar su ubicación geográfica.\n\nPuedes consultar la lista completa de clínicas aliadas en el área de afiliados de nuestra página web o solicitarla a través de nuestra línea de atención al cliente.',
    date: 'Diciembre 2025',
    readTime: '2 min de lectura',
    image: '/assets/images/news/noticia-prevencion.svg',
    slug: 'nuevos-beneficios-clinicas-aliadas',
  },
]
