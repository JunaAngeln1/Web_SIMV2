---
name: sim-arquitectura
description: Arquitectura del sitio web de S.I.M. (Servicios Integrales para Mascotas). Úsalo para definir el mapa del sitio, el menú, header y footer, el orden y contenido de cada sección de Inicio (planes, Nosotros, indicadores, aliados, noticias, CTA final) y la estructura de archivos y assets del proyecto.
---

# S.I.M. · Skill de Arquitectura de la Página

**Documento de origen:** S.I.M. · Especificación de diseño web.
**Alcance de esta skill:** estructura del sitio, navegación, componentes globales, secciones de Inicio y organización de archivos.
**Skills hermanas:** `sim-diseno` (estilos, color, tipografía, hero, componentes visuales) y `sim-especificacion` (objetivos, reglas de contenido, requisitos técnicos, stack y checklist).

---

## 1. Arquitectura del sitio

El menú principal tendrá **cuatro secciones informativas y una acción destacada de afiliación/contacto**. La afiliación puede ser una página independiente o un flujo externo, según el proceso oficial de SIM.

| Página | Contenido |
|---|---|
| **Inicio** | Resumen de planes, presentación institucional, cifras, aliados, noticias y llamadas a la acción. |
| **Planes** | Comparación, beneficios, condiciones, términos, exclusiones y calculadora de ahorro estimado. |
| **Nosotros** | Qué es SIM, misión, propuesta de valor, cifras, equipo o historia si existe material aprobado. |
| **Noticias** | Consejos de cuidado, prevención, novedades y contenido educativo. |
| **Contacto / Afiliación** | Canales oficiales, formulario de información y enlace al proceso de afiliación. |

### Nota de alcance
La estructura describe la arquitectura visual y de contenido. **No se deben inventar precios, coberturas, contactos, exclusiones ni afirmaciones de servicio.** Todo contenido contractual requiere aprobación de SIM.

---

## 2. Componentes globales

### 2.1 Header y navegación
- Header blanco, alto aproximado **76–92 px** en escritorio, con bordes redondeados cuando esté dentro del contenedor principal.
- Logotipo oficial a la izquierda; respetar proporción y zona de seguridad.
- Enlaces: **Inicio, Planes, Nosotros y Noticias**.
- Acciones a la derecha: acceso a **WhatsApp oficial** y CTA verde **“Afiliar a mi mascota”**.
- Enlace activo identificado con subrayado azul o indicador fino; no depender solo del color.
- Al desplazarse, puede permanecer *sticky* con una sombra ligera o borde inferior discreto.
- Móvil: menú compacto accesible; mantener visible un acceso a afiliación sin ocupar demasiado espacio.

### 2.2 Footer
- Fondo azul profundo `#07345B` con texto blanco y secundario en azul claro.
- Columnas: marca y descripción breve; navegación; contacto oficial; enlaces legales.
- Incluir términos y condiciones, política de privacidad y tratamiento de datos si existen documentos oficiales.
- Redes sociales únicamente si SIM tiene perfiles oficiales vigentes.
- **No inventar** teléfonos, correos, direcciones ni perfiles sociales.

---

## 3. Inicio: estructura sección por sección

Orden de las secciones: Hero → Planes resumidos → Nosotros → Indicadores → Aliados → Noticias → CTA final.

### 3.1 Hero principal
Componente de mayor importancia visual. Fondo exterior azul pálido con formas abstractas; contenedor blanco amplio y redondeado; navegación integrada; panel hero azul con gato realista a la derecha, texto a la izquierda y beneficios en órbita.

- Altura visual objetivo: `100svh` o al menos 680–760 px en escritorio, sin ocultar los CTA bajo el pliegue.
- Columna de texto ≈ 42–48 % y columna de mascota/interacción ≈ 52–58 %.
- El rostro del gato no debe quedar tapado por textos, órbitas gruesas o botones.
- Copy sugerido (requiere aprobación de SIM):
  - Título: “El bienestar de tu mascota, nuestra prioridad.”
  - Descripción: “Planes de atención veterinaria para perros y gatos, con el respaldo que tu familia necesita.”
  - CTA principal: “Conoce nuestros planes”
  - CTA secundario: “Contáctanos”
- Detalle visual y de movimiento del hero y la ruleta de beneficios: ver `sim-diseno` (secciones 4, 5 y 6).
- Beneficios de la ruleta (configurables en un arreglo de datos): Red de aliados, Atención veterinaria, Planes para tu mascota y Acompañamiento.

### 3.2 Planes resumidos
Colocar **inmediatamente después del hero**. Introducción corta y tarjetas uniformes con información esencial; la página Planes contiene los detalles completos.

- Tarjetas blancas sobre fondo `#F1F7FC` o blanco, borde `#D9E5EF`, radio 20–24 px y sombra muy suave.
- Cada tarjeta contiene: nombre del plan, precio o modalidad si está aprobado, **3–5 beneficios confirmados** y CTA “Ver plan”.
- **No inventar** coberturas, topes, descuentos, tiempos de carencia ni precios.
- El plan recomendado, si existe una recomendación comercial aprobada, puede usar un borde azul más visible; no marcar uno como mejor sin criterio real.
- Debajo, CTA secundario “Explorar todos los planes”.
- Hover: elevar 3–5 px, intensificar ligeramente la sombra y cambiar el borde; duración 180–240 ms.

### 3.3 Nosotros / ¿EPS para mascotas?
Composición en dos columnas: texto a la izquierda y fotografía real autorizada de mascota/profesional a la derecha. En móvil, apilar texto e imagen.

Texto base proporcionado:
> “Sí. Somos una Empresa Promotora de Servicios de Salud para perros y gatos. Nuestra misión es garantizar la prestación de servicios veterinarios a través de nuestros planes de atención y promover los diferentes servicios que se prestan en el sector veterinario del país. Sin importar su edad, raza ni preexistencias.”

### 3.4 Indicadores “Conoce a la manada”
- +4.000 mascotas afiliadas
- +250 convenios estratégicos
- +3.500 familias satisfechas

Mostrar tres bloques o tarjetas ligeras, con cifras grandes en azul institucional y etiquetas cortas. Se puede animar el conteo una sola vez al entrar en pantalla. **Confirmar vigencia de las cifras antes de publicar.**

### 3.5 Nuestros aliados
- Título recomendado: “Una red que trabaja por su bienestar”.
- Descripción breve que explique el valor de la red veterinaria, evitando textos empresariales genéricos.
- En el inicio: franja de logotipos autorizados con movimiento pausado o carrusel manual.
- CTA “Conoce nuestra red de aliados” para abrir el directorio completo.
- Directorio: filtros por ciudad o tipo de servicio **solo si existe información estructurada** para sostenerlos.
- Pausar el movimiento al hover/focus y permitir navegación por teclado.

### 3.6 Noticias y consejos
- Mostrar **tres noticias destacadas** en el inicio.
- Tarjeta editorial: imagen 16:9, categoría, título, fecha y enlace “Leer más”.
- Usar imágenes coherentes y de buena calidad; no reutilizar la misma imagen en todas las tarjetas.
- Temas posibles: prevención, cuidado responsable, bienestar animal y novedades de SIM; los artículos deben ser revisados antes de publicarse.

### 3.7 CTA final
Franja de fondo azul profundo o azul muy claro con título emocional, una frase de apoyo y dos acciones: **“Explorar planes”** y **“Solicitar información”**. El CTA de afiliación debe seguir siendo el principal.

Copy sugerido: “Ellos hacen parte de tu familia. Su bienestar también merece un plan.”

---

## 4. Estructura de archivos y assets

Los archivos sugeridos son **nombres objetivo, no recursos que ya existan**.

```
public/assets/sim-logo.svg
public/assets/sim-hero-cat.webp
public/assets/icons/allies.svg
public/assets/icons/veterinary-care.svg
public/assets/icons/pet-plans.svg
public/assets/icons/support.svg
public/assets/images/about-veterinary-team.webp
public/assets/images/news/...
```

### Assets requeridos (resumen)
- **Logotipo:** SVG preferiblemente, o PNG transparente de alta resolución; sin deformar ni reconstruir con texto.
- **Gato protagonista:** fotografía realista, alta resolución, WebP/PNG con transparencia real; gato gris/blanco, ojos azules, mirada hacia centro/izquierda, con espacio alrededor.
- **Iconos:** aliados (apretón de manos), atención veterinaria (estetoscopio), planes (huella), acompañamiento (corazón).
- **Fondos:** formas y órbitas en SVG/CSS.
- **Fotografías secundarias:** autorizadas, para Nosotros, planes y noticias; sin repetir la misma foto.

### Estructura de código recomendada
- Componentes independientes: Header, Hero, `BenefitsOrbit`, tarjetas de planes, noticias, formularios, Footer.
- Contenido editable en datos/configuración (por ejemplo, los beneficios de la ruleta en un arreglo).
- Si falta un asset oficial, dejar una ruta claramente identificada y solicitar el archivo.

---

## Instrucción para el agente
Inspecciona primero el proyecto existente (`package.json`, carpetas, componentes) y respétalo. Construye el hero y luego las demás secciones de Inicio en el orden indicado. No inventes información comercial ni enlaces.
