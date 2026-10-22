---
name: sim-diseno
description: Dirección visual y sistema de diseño de la web institucional de S.I.M. (Servicios Integrales para Mascotas). Úsalo cuando haya que definir o implementar colores, tipografía, retícula y espaciado, hero interactivo con ruleta de beneficios, botones, tarjetas, formularios, iconografía, animaciones o assets visuales.
---

# S.I.M. · Skill de Diseño

**Documento de origen:** S.I.M. · Especificación de diseño web (Documento de dirección visual y componentes).
**Alcance de esta skill:** todo lo visual: dirección creativa, color, tipografía, retícula, hero, ruleta, componentes de UI, iconografía, animaciones y assets.
**Skills hermanas:** `sim-arquitectura` (estructura del sitio, secciones y archivos) y `sim-especificacion` (objetivos, requisitos, stack, accesibilidad y checklist).

---

## 0. Dirección creativa

Una experiencia moderna, profesional y cercana. El azul debe predominar para transmitir confianza; el verde se reserva para destacar acciones y conservar el reconocimiento de la marca. La fotografía y las microinteracciones acercan la experiencia al cuidado de perros y gatos.

Paleta de portada: Azul profundo · Azul SIM · Azul cielo · Verde SIM · Blanco.

### Estado del documento
Especificación propuesta a partir de la referencia visual compartida y las preferencias indicadas. Los colores son valores recomendados para la interfaz; deben contrastarse con los archivos oficiales del manual de marca antes de producción.

### Principios de diseño (visuales)
- **Predominio azul:** usar los azules como estructura visual principal y el verde corporativo como acento.
- **Emoción equilibrada:** perros y gatos deben conectar con el visitante sin que la página parezca infantil.
- **Movimiento con propósito:** las animaciones orientan la mirada y explican relaciones; no distraen ni retrasan el contenido.
- **Fidelidad de marca:** utilizar el logotipo oficial sin deformarlo y verificar los valores exactos del manual compartido.
- **Confianza primero:** información clara, diseño ordenado, condiciones visibles y señales institucionales consistentes.
- **Conversión clara:** facilitar el recorrido desde conocer SIM hasta comparar planes, resolver dudas y solicitar afiliación.

---

## 1. Sistema de color

La interfaz se construye principalmente con azules y blancos. El verde se reserva para acciones principales y acentos. Los porcentajes son una guía aproximada de balance visual, no una restricción rígida.

| Nombre | HEX | Uso recomendado |
|---|---|---|
| Azul profundo | `#07345B` | Fondos oscuros, footer, capas de contraste y elementos destacados. |
| Azul institucional | `#03497D` | Títulos, navegación, iconos principales y enlaces. |
| Azul cielo | `#48AFE8` | Detalles, estados activos, líneas decorativas y acentos secundarios. |
| Verde SIM | `#7AB929` | CTA principal, indicadores y detalles de identidad. |
| Blanco | `#FFFFFF` | Contenedores, tarjetas y zonas de descanso visual. |
| Azul muy claro | `#F1F7FC` | Fondos alternos y secciones suaves. |
| Azul niebla | `#E8F3FC` | Fondos de iconos, chips y elementos informativos. |
| Gris azulado | `#64748B` | Texto secundario, descripciones auxiliares. |
| Texto principal | `#172B3A` | Texto de lectura sobre fondos claros. |
| Borde suave | `#D9E5EF` | Bordes de tarjetas, inputs y divisores. |

### Distribución sugerida
- Fondos claros y blanco: aproximadamente **60–70 %** de la página.
- Azules oscuros e institucionales: aproximadamente **20–30 %**.
- Verde y azul cielo como acentos: aproximadamente **5–15 %**, según sección.

### Degradados
- Hero: degradado de azul institucional a azul cielo, con una capa adicional detrás del texto si la fotografía reduce el contraste.
- Usar transiciones suaves; evitar degradados saturados en todas las tarjetas.
- Ejemplo CSS: `linear-gradient(115deg, #03497D 0%, #48AFE8 100%)`.

### Contraste
- Comprobar contraste de texto y controles en el navegador.
- No colocar texto blanco sobre azul cielo claro sin una capa de contraste.
- No usar el verde como color de texto pequeño sobre blanco sin verificar legibilidad.

---

## 2. Tipografía y jerarquía

La referencia visual funciona con una sans serif geométrica, de formas limpias y legibles. La propuesta inicial mantiene **Poppins** para la interfaz y permite evaluar **Montaser Arabic** para títulos si el archivo de fuente autorizado está disponible y renderiza correctamente.

### Familias tipográficas
- **Títulos — Montaser Arabic (opción de marca):** usar únicamente si la familia y licencia están disponibles para web y su lectura es correcta en español. Si no está disponible, utilizar **Manrope** como alternativa contemporánea.
- **Texto, navegación y botones — Poppins:** familia principal para párrafos, etiquetas, botones, navegación, tarjetas y formularios. Pesos recomendados: 400 regular, 500 medium, 600 semibold y 700 bold.
- **Alternativa simple:** Manrope para títulos + Poppins para cuerpo. **No mezclar más de dos familias tipográficas** en la interfaz.

### Escala tipográfica sugerida

| Elemento | Escritorio | Móvil | Peso / interlineado |
|---|---|---|---|
| H1 hero | 54–68 px | 36–44 px | 600–700 / 1.0–1.1 |
| H2 sección | 36–44 px | 28–34 px | 600–700 / 1.15 |
| H3 tarjeta | 20–24 px | 18–22 px | 600 / 1.25 |
| Párrafo | 16–18 px | 15–17 px | 400 / 1.5–1.7 |
| Texto auxiliar | 13–14 px | 12–14 px | 400–500 / 1.4 |
| Botón | 14–16 px | 14–16 px | 600 / 1.0 |

### Reglas de composición tipográfica
- Usar frases cortas en el hero, máximo 2–4 líneas en escritorio.
- Limitar el ancho de párrafos largos para que no formen líneas excesivamente extensas.
- Evitar texto centrado en bloques largos; reservarlo para mensajes breves o indicadores.
- No usar mayúsculas sostenidas en párrafos; reservarlas para etiquetas cortas si procede.

---

## 3. Retícula, dimensiones y espaciado

- Ancho máximo de contenido recomendado: **1280–1360 px** en escritorio.
- Contenedor exterior del hero: margen de 16–24 px en escritorio; 12–16 px en tablet; 0–8 px en móvil según composición.
- Espaciado basado en una escala de 4/8 px: **8, 12, 16, 24, 32, 48, 64 y 80 px**.
- Radio de tarjetas: **18–24 px**. Radio de contenedores principales: **24–32 px**.
- Separación entre secciones: **80–112 px** en escritorio y **48–72 px** en móvil.
- Alinear títulos, tarjetas y CTA a la misma retícula; no desplazar cada sección sin una razón visual.
- Usar espacio en blanco como componente de diseño, no llenar cada área con iconos o textos.

---

## 4. Hero principal (composición visual)

Es el componente de mayor importancia visual. Debe aproximarse a la referencia compartida: fondo exterior azul pálido con formas abstractas; contenedor blanco amplio y redondeado; navegación integrada; panel hero azul con gato realista a la derecha, texto a la izquierda y beneficios en órbita.

### Composición
- Altura visual objetivo: `100svh` o al menos **680–760 px** en escritorio, sin obligar a ocultar los CTA debajo del pliegue.
- Fondo exterior: `#E8F3FC` o un degradado muy claro, con formas orgánicas y líneas curvas SVG de baja opacidad.
- Marco exterior: blanco, radio 24–32 px, sombra azul muy tenue.
- Panel interior: azul degradado, radio 22–28 px y recorte controlado de la imagen.
- Columna de texto: aproximadamente **42–48 %** del ancho útil.
- Columna de mascota e interacción: aproximadamente **52–58 %**, dejando espacio para órbitas y etiquetas.
- El rostro del gato no debe quedar tapado por textos, órbitas gruesas o botones.

### Copy sugerido (propuesta editorial; SIM debe aprobarlo antes de publicar)
- **Título:** “El bienestar de tu mascota, nuestra prioridad.”
- **Descripción:** “Planes de atención veterinaria para perros y gatos, con el respaldo que tu familia necesita.”
- **CTA principal:** “Conoce nuestros planes”
- **CTA secundario:** “Contáctanos”

---

## 5. Ruleta de beneficios alrededor del gato

Crear una órbita circular o elíptica con etiquetas de beneficios. La mascota permanece relativamente estable mientras las etiquetas se desplazan verticalmente según la posición del mouse.

- Beneficios iniciales configurables: **Red de aliados, Atención veterinaria, Planes para tu mascota y Acompañamiento.**
- La posición vertical del cursor dentro del hero se normaliza y se convierte en un desplazamiento suave de la órbita.
- El movimiento debe ser **bidireccional**: cursor hacia arriba y hacia abajo generan desplazamiento opuesto.
- Aplicar suavizado/interpolación para que no haya saltos bruscos ni sensibilidad excesiva.
- El elemento más cercano a la posición activa aumenta ligeramente su opacidad y escala; los secundarios se atenúan.
- Las etiquetas incluyen icono, texto breve, fondo blanco o azul muy claro, borde sutil y sombra suave.
- Las órbitas se dibujan en SVG/CSS con líneas finas en blanco o azul claro y opacidad reducida.
- No bloquear el movimiento del cursor ni hacer que el texto cambie tan rápido que no pueda leerse.
- El clic en un beneficio puede abrir una breve explicación o llevar a la sección pertinente, siempre con contenido aprobado.
- En móvil, permitir swipe o controles accesibles; no depender del hover.

---

## 6. Hero interactivo: detalles de movimiento

### Estados y comportamiento
- **Reposo inicial:** mostrar un beneficio activo y los demás con menor opacidad para que la idea de interacción sea evidente.
- **Movimiento:** transformar la posición del puntero en desplazamiento limitado de la órbita; evitar rotaciones infinitas demasiado rápidas.
- **Activo:** escala aproximada 1.00–1.04, opacidad 1.0 y sombra ligera.
- **Secundario:** opacidad aproximada 0.45–0.75 según distancia; escala 0.94–0.98.
- **Entrada:** título y descripción con fade + translateY de 12–20 px, 450–700 ms, con retrasos cortos entre elementos.
- **Imagen:** fade suave y zoom inicial muy leve; evitar movimiento continuo fuerte del gato.
- **Accesibilidad:** respetar `prefers-reduced-motion`; en ese modo, desactivar órbita ligada al mouse o sustituirla por selección discreta.
- **Rendimiento:** usar `transform` y `opacity` en lugar de animar propiedades que provoquen recalcular el layout.

### Tecnología sugerida
Si el proyecto utiliza React/Vite/TypeScript, implementar la órbita como componente independiente (por ejemplo, `BenefitsOrbit`). Usar CSS/SVG y `requestAnimationFrame` o una librería ya presente. No instalar una dependencia grande solo para desplazar cuatro etiquetas.

La interacción debe estar separada del contenido para que el equipo pueda editar los beneficios en un arreglo de datos.

---

## 7. Sistema de componentes

### 7.1 Botones

| Tipo | Apariencia | Uso | Estados |
|---|---|---|---|
| Primario | Verde `#7AB929`, texto blanco, radio 999 px/píldora | Afiliar / CTA principal | Hover: verde más oscuro, elevación leve; focus visible. |
| Secundario | Transparente o azul claro, borde blanco/azul | Contáctanos / acciones alternativas | Hover: fondo sutil; mantener contraste. |
| Terciario | Texto azul con flecha o icono | Ver detalles / leer más | Subrayado o desplazamiento mínimo de icono. |
| Icono | Círculo o cuadrado redondeado | WhatsApp u otra acción reconocible | Debe tener nombre accesible y área táctil suficiente. |

#### Especificación de botones
- Altura de botón estándar: **46–52 px** en escritorio; mínimo **44 px** de área táctil en móvil.
- Padding horizontal: **20–26 px**.
- Radio: píldora para CTA principales, 12–16 px para botones cuadrados solo si la identidad general lo requiere.
- Peso tipográfico: 600; tamaño 14–16 px.
- Transición: 180–240 ms ease-out.
- Focus de teclado visible y no eliminado.
- Deshabilitado: menor opacidad y sin animación de elevación; explicar por qué está deshabilitado si aplica.

### 7.2 Tarjetas
- **Tarjetas de planes:** fondo blanco, borde azul grisáceo, radio 20–24 px, padding 24–28 px.
- **Tarjetas de noticias:** imagen 16:9 arriba, texto abajo, sin sombra fuerte; hover con elevación ligera.
- **Tarjetas de indicadores:** fondo blanco o azul niebla, cifra grande, icono pequeño y etiqueta corta.
- **Tarjetas de beneficios:** cápsulas compactas, icono dentro de círculo azul y texto de una o dos líneas.
- No aplicar sombra intensa a todas las tarjetas; la profundidad debe ser jerárquica.
- Mantener altura visual consistente dentro de cada fila y CTA alineado en la parte inferior cuando sea posible.

### 7.3 Formularios
- Inputs de fondo blanco, borde `#D9E5EF`, radio 10–14 px, padding 12–16 px.
- Etiqueta visible encima del campo; no usar placeholder como única etiqueta.
- Focus con borde azul institucional y halo claro discreto.
- Errores en texto claro y específico junto al campo; no depender solo del rojo.
- Solicitar solo los datos necesarios para responder la solicitud.
- Incluir aviso de privacidad y consentimiento según el proceso oficial.

### 7.4 Iconografía
- Estilo lineal consistente, grosor visual similar y formas simples.
- Usar iconos SVG o una librería consistente; **no mezclar emojis, iconos 3D y lineales**.
- Color azul institucional por defecto; verde para acciones o estados destacados.
- Tamaños base: **18–24 px** en botones y etiquetas; **28–36 px** en tarjetas de beneficios.

---

## 8. Animaciones y estados de interacción

| Componente | Animación | Duración sugerida |
|---|---|---|
| Hero copy | Fade + desplazamiento vertical leve | 450–700 ms |
| Tarjetas | Elevación 3–5 px y sombra leve | 180–240 ms |
| Botones | Color, borde y flecha | 180–240 ms |
| Indicadores | Conteo progresivo una vez | 700–1200 ms |
| Logos aliados | Desplazamiento pausado y controlable | Continuo, lento |
| Aparición de secciones | Fade + translateY 12–20 px | 350–600 ms |

### Regla de movimiento
No animar cada elemento de forma distinta. Definir una pequeña familia de transiciones reutilizables. Respetar `prefers-reduced-motion` y garantizar que el contenido sea legible aunque la animación no se ejecute.

---

## 9. Assets visuales requeridos

- **Logotipo:** Logo oficial en SVG preferiblemente, o PNG transparente de alta resolución. No reconstruirlo con texto ni modificar proporciones.
- **Gato protagonista:** fotografía realista, alta resolución, fondo transparente/WebP o PNG. Gato de pelaje gris/blanco, ojos azules, mirada hacia el centro/izquierda y encuadre que deje espacio alrededor.
- **Iconos:** cuatro SVG consistentes: aliados (apretón de manos), atención veterinaria (estetoscopio), planes (huella), acompañamiento (corazón).
- **Fondos:** formas abstractas y órbitas preferiblemente en SVG/CSS, no imágenes pesadas.
- **Fotografías secundarias:** imágenes autorizadas para sección Nosotros, planes y noticias. Evitar repetir la misma foto en toda la página.

> Los nombres de archivo y su ubicación están en la skill `sim-arquitectura`. La imagen de gato debe exportarse con **transparencia real** si se quiere integrarla por encima del fondo azul.

---

## Instrucción para el agente
Implementa primero el sistema visual y el hero; valida el resultado contra la referencia. Si falta un asset oficial, deja una ruta claramente identificada y solicita el archivo en lugar de sustituirlo silenciosamente. No inventes información comercial ni enlaces.
