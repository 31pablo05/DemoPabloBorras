# Pablo Borrás — Sitio web profesional

Stack: **Astro 4.x + Tailwind CSS + React Islands**  
Deploy: Vercel — [demo-pablo-borras.vercel.app](https://demo-pablo-borras.vercel.app)

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando               | Acción                                              |
| :-------------------- | :-------------------------------------------------- |
| `npm install`         | Instala dependencias                                |
| `npm run dev`         | Inicia servidor de desarrollo en `localhost:4321`   |
| `npm run build`       | Genera el sitio de producción en `./dist/`          |
| `npm run preview`     | Previsualiza el build localmente antes de desplegar |

## ✅ Checklist antes de salir a producción

### 🔴 Requiere datos del cliente
- [ ] Reemplazar `REEMPLAZAR_CON_API_KEY_WEB3FORMS` en `src/components/contacto/FormularioContacto.jsx`
- [ ] Reemplazar `REEMPLAZAR_VIDEO_1/2/3` con IDs reales de YouTube en `src/data/videos.js`
- [ ] Subir `/public/imagenes/libro/tapa-libro.jpg` (portada real del libro)
- [ ] Subir `/public/og/og-pablo-borras.jpg` (1200x630px para compartir en redes)
- [ ] Subir `/public/favicon.svg` e `/public/favicon.ico` reales
- [ ] Reemplazar `G-XXXXXXXXXX` con ID real de Google Analytics 4 en `src/layouts/Layout.astro`
- [ ] Actualizar eventos en `/eventos` con fechas reales
- [ ] Subir las 9 fotos de congresos a `/public/imagenes/congresos/`

### 🟡 Configuración de deploy
- [ ] Configurar dominio personalizado en Vercel
- [ ] Actualizar `SITE_URL` en `src/layouts/Layout.astro` con dominio real
- [ ] Conectar Sanity CMS para eventos y videos dinámicos

