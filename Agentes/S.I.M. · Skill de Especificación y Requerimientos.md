---
name: sim-especificacion
description: Especificación y requerimientos de la web de S.I.M. (Servicios Integrales para Mascotas). Úsalo para objetivos y alcance, reglas de contenido y conversión, responsive y accesibilidad, requisitos técnicos y criterios de aceptación, stack de tecnologías recomendado, segunda fase y checklist previo a publicar.
---

# S.I.M. · Skill de Especificación y Requerimientos

**Documento de origen:** S.I.M. · Especificación de diseño web.
**Alcance de esta skill:** objetivo, reglas de contenido y confianza, responsive y accesibilidad, requisitos técnicos, stack, segunda fase, checklist e instrucciones para la IA de programación.
**Skills hermanas:** `sim-diseno` (sistema visual) y `sim-arquitectura` (estructura del sitio y archivos).

---

## 1. Objetivo y alcance

Diseñar la experiencia visual de la web institucional de S.I.M. (Servicios Integrales para Mascotas), dirigida a usuarios actuales y potenciales. La prioridad comercial es conseguir **nuevas afiliaciones** y facilitar **solicitudes de información**.

### Principios rectores
- **Confianza primero:** información clara, diseño ordenado, condiciones visibles y señales institucionales consistentes.
- **Predominio azul:** azules como estructura visual principal y verde corporativo como acento.
- **Emoción equilibrada:** perros y gatos conectan con el visitante sin que la página parezca infantil.
- **Conversión clara:** facilitar el recorrido desde conocer SIM hasta comparar planes, resolver dudas y solicitar afiliación.
- **Movimiento con propósito:** las animaciones orientan la mirada y explican relaciones; no distraen ni retrasan el contenido.
- **Fidelidad de marca:** logotipo oficial sin deformar y verificación de valores exactos frente al manual de marca.

### Nota de alcance
La estructura describe la arquitectura visual y de contenido. No se deben inventar precios, coberturas, contactos, exclusiones ni afirmaciones de servicio. Todo contenido contractual requiere aprobación de SIM.

---

## 2. Contenido, confianza y conversión

- CTA principal consistente: **“Afiliar a mi mascota”** o **“Conoce nuestros planes”**, según la ubicación.
- CTA secundario: **“Contáctanos”** o **“Solicitar información”**.
- Mantener accesibles las condiciones relevantes; no ocultar restricciones importantes tras interacciones decorativas.
- Mostrar cifras institucionales solo si están actualizadas y aprobadas.
- No usar testimonios, certificaciones, premios o logos de aliados sin autorización y evidencia.
- No afirmar cobertura universal ni ausencia de restricciones si los términos contractuales no lo confirman.
- El ahorro de la calculadora debe ser una **estimación con supuestos visibles**, nunca una garantía.
- Los enlaces de contacto deben apuntar a canales oficiales confirmados.

---

## 3. Diseño responsive y accesibilidad

- **Escritorio:** hero horizontal, texto a la izquierda y gato/órbita a la derecha.
- **Tablet:** reducir la escala del gato y la amplitud de la órbita; ajustar navegación y espaciado.
- **Móvil:** ordenar texto, CTA y mascota en vertical; reducir o simplificar órbitas; beneficios navegables por swipe o controles.
- No recortar ojos, orejas ni rostro de la mascota en puntos de quiebre.
- Probar al menos anchos de **360, 390, 768, 1024 y 1440 px**.
- Todos los controles deben funcionar con teclado; los enlaces y botones deben tener foco visible.
- Usar texto alternativo útil en imágenes informativas; imágenes puramente decorativas deben tener `alt` vacío.
- Verificar contraste, zoom al 200 %, navegación por teclado y movimiento reducido.

---

## 4. Requisitos técnicos y criterios de aceptación

- Inspeccionar el proyecto existente antes de cambiar estructura, librerías o configuración.
- Reutilizar componentes y estilos existentes si son adecuados.
- Mantener el contenido editable en datos/configuración cuando tenga sentido.
- Usar imágenes optimizadas y evitar saltos de layout mientras cargan.
- Implementar la órbita con `transform`/`opacity` y lógica de movimiento suavizada.
- Verificar consola, enlaces, navegación, responsive y estados hover/focus.
- Confirmar que el hero **no se convierte en imagen estática**: la ruleta debe responder realmente al mouse.
- Probar alternativa móvil y modo de movimiento reducido.
- Validar todas las cifras, textos comerciales, planes, precios, contactos y documentos legales con SIM.

---

## 5. Stack de tecnologías recomendado

La selección está pensada para desarrollar primero una web institucional visual, rápida y adaptable, con el hero interactivo y las secciones descritas. Antes de instalar dependencias, la IA de programación debe inspeccionar el proyecto existente y reutilizar las herramientas ya configuradas cuando sean adecuadas.

### 5.1 Stack principal

| Tecnología | Uso en el proyecto | Decisión |
|---|---|---|
| React + TypeScript | Componentes reutilizables para Header, Hero, ruleta, tarjetas, planes, noticias y formularios. Tipado para reducir errores. | Base recomendada si el proyecto ya usa React. |
| Vite | Servidor local de desarrollo y empaquetado del frontend. | Mantener si ya está configurado. |
| Tailwind CSS | Sistema consistente de colores, tipografía, espaciados, bordes, sombras y responsive. | Usar si ya existe o integrarlo si facilita mantener el diseño. |
| Motion para React | Animaciones de entrada, transiciones de tarjetas y movimiento suave de la ruleta de beneficios. | Opcional; no instalar si CSS/SVG cubre la necesidad. |
| Lucide React | Iconografía lineal coherente para navegación, huellas, contacto, aliados y servicios. | Recomendado para evitar mezclar estilos de iconos. |
| CSS + SVG | Degradados, órbitas, líneas decorativas, estados hover/focus y formas de fondo. | Preferirlo para elementos visuales ligeros. |
| Git + GitHub | Control de versiones, historial de cambios y respaldo del proyecto. | Recomendado. |
| Vercel o Netlify | Despliegue del sitio y publicación de actualizaciones desde el repositorio. | Elegir una sola plataforma para la primera versión. |

### 5.2 Tecnologías para una segunda fase
No es necesario incorporar backend o base de datos solo para diseñar y publicar la primera versión institucional. Añadir estas herramientas cuando exista un requerimiento real:

- **Supabase:** base de datos y servicios backend para guardar solicitudes o gestionar datos, después de definir permisos, seguridad y tratamiento de datos personales.
- **CMS:** para que el equipo publique noticias y artículos sin editar código. Elegirlo según quién administrará el contenido y con qué frecuencia.
- **Servicio de formularios o backend propio:** para recibir solicitudes de información y afiliación. No almacenar datos sensibles sin definir antes las medidas de seguridad y privacidad.
- **SEO:** metadatos por página, títulos y descripciones, sitemap, `robots.txt`, etiquetas Open Graph y datos estructurados cuando correspondan.

### 5.3 Alternativas y criterios de elección
- Para una web institucional sencilla, **React + Vite** es suficiente si ya existe ese proyecto. Si el SEO y el contenido editorial son prioridad desde el inicio, evaluar **Astro**; si se prevé una aplicación web más compleja, evaluar **Next.js**.
- La calculadora de ahorro puede ejecutarse inicialmente en el navegador con TypeScript, usando fórmulas y tarifas aprobadas por SIM. No debe presentar estimaciones como garantías.
- Las noticias pueden empezar con contenido local; pasar a un CMS cuando el equipo necesite gestionarlas de forma autónoma.
- Evitar instalar dependencias por moda. Cada paquete debe resolver una necesidad clara y mantenerse actualizado.

### 5.4 Instrucción para la IA de programación
Inspecciona primero `package.json`, la estructura de carpetas y los componentes existentes. No recrees el proyecto ni reemplaces dependencias sin justificación. Implementa el sistema visual y el hero interactivo primero; verifica responsive, teclado, movimiento reducido y consola. Después continúa con las secciones interiores. Documenta las dependencias añadidas y cualquier configuración pendiente.

---

## 6. Checklist antes de publicar

- ☐ Logotipo oficial correcto y sin deformaciones.
- ☐ Colores revisados frente al manual de marca original.
- ☐ Tipografías disponibles y cargando correctamente.
- ☐ Hero con composición similar a la referencia.
- ☐ Gato optimizado, sin fondo no deseado y sin recortes incorrectos.
- ☐ Ruleta de beneficios suave, legible y controlable.
- ☐ CTA principal y secundario apuntan a destinos reales.
- ☐ Tarjetas de planes usan información aprobada.
- ☐ Cifras institucionales verificadas.
- ☐ Aliados y fotografías utilizados con autorización.
- ☐ Footer con políticas y canales oficiales.
- ☐ Diseño probado en móvil, tablet y escritorio.
- ☐ Contraste, teclado y movimiento reducido comprobados.
- ☐ Rendimiento y consola revisados.
- ☐ Aprobación final de SIM para textos y condiciones.

---

## Instrucción final para la IA de programación
Implementa primero el sistema visual y el hero, valida el resultado contra la referencia y después construye el resto de Inicio. Respeta el proyecto existente. No inventes información comercial ni enlaces. Si falta un asset oficial, deja una ruta claramente identificada y solicita el archivo en vez de sustituirlo silenciosamente.
