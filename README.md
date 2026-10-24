# PremioClub — landing de captación para club de premios

Una landing de una sola página, en español, diseñada para convertir visitas en miembros de un canal de WhatsApp de sorteos y retos diarios. Es una versión más simple y persuasiva del típico sitio de "club de premios": un mensaje claro, un solo objetivo (unirse) y pruebas de confianza en cada sección.

## Secciones

1. **Hero** con promesa principal, premio del día y botón a WhatsApp.
2. **Cuenta regresiva** al sorteo diario + cifras del club.
3. **Últimos ganadores** en una cinta animada.
4. **Cómo funciona** en 3 pasos.
5. **Registro rápido** (nombre + WhatsApp) con Netlify Forms y razones para confiar.
6. **Testimonios**, **preguntas frecuentes** y **CTA final**.
7. Botón fijo de WhatsApp en móviles.

## Personalización

Todo el contenido vive en `src/data/site.ts`: nombre de la marca, enlace del canal de WhatsApp (`whatsappUrl`), monto del premio, hora del sorteo, ganadores, cifras, pasos, testimonios y FAQ. La imagen principal está en `public/img/hero-premios.png`.

> Los ganadores, cifras y testimonios incluidos son datos de ejemplo. Reemplázalos por resultados reales y publica tus bases y condiciones antes de lanzar.

## Tecnologías

- TanStack Start + React 19
- Tailwind CSS 4
- Netlify Forms (registros), Netlify Image CDN (imagen optimizada)

## Desarrollo local

```bash
pnpm install
netlify dev   # emula Netlify Forms e Image CDN
pnpm test
```

Los registros aparecen en el panel de Netlify, en **Forms → registro-club**.
