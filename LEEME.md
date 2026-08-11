# Azul Marino · Sitio web (versión desde cero)

Sitio **estático**: son solo archivos. No usa WordPress, ni plugins, ni base de datos.
Para publicarlo alcanza con subir los archivos a cualquier hosting. Nada más.

## Archivos del proyecto

```
azulmarino-web/
├── index.html   ← el contenido de la página (textos y estructura)
├── styles.css   ← el diseño (colores, tipografías, tamaños)
├── script.js    ← idiomas (ES/EN/PT) y la reserva por WhatsApp
├── server.js    ← SOLO para verlo en tu compu mientras editás (no se sube)
├── assets/      ← acá van tus fotos
└── LEEME.md     ← este archivo
```

---

## 1) Ver la página en tu computadora (opcional, para probar)

Necesitás tener Node instalado. Abrí una terminal en esta carpeta y ejecutá:

```bash
node server.js
```

Después abrí en el navegador: **http://localhost:5188**

Para frenarlo, apretá `Ctrl + C` en la terminal.

> Nota: si abrís `index.html` haciendo doble clic, puede que **no se carguen bien
> los estilos ni el WhatsApp**. Por eso conviene usar `node server.js` para probar.

---

## 2) Poner tus fotos  ⭐ (lo más importante)

Hay **dos tipos** de fotos: las de cada habitación y las generales del sitio.

### A) Fotos de cada habitación (las más importantes)

Poné todas las fotos de cada suite dentro de su carpeta:

```
assets/habitaciones/doble-jardin/            <- fotos de Doble Jardín
assets/habitaciones/doble-superior/          <- fotos de Doble Superior
assets/habitaciones/doble-superior-jacuzzi/  <- fotos de Doble Superior + Jacuzzi
```

Podés poner **las fotos que quieras** en cada carpeta (con cualquier nombre).
La **primera** aparece como portada de la habitación en la home, y **todas** se
ven en la galería de la página de esa suite.

> Después de copiar las fotos, avisame y yo las conecto (es un renglón por suite
> en `script.js`). Si preferís hacerlo vos: en `script.js`, en `const ROOMS`,
> completá el array `images: []` con los nombres de archivo, por ejemplo:
> `images: ["frente.jpg", "bano.jpg", "terraza.jpg"]`.

### B) Fotos generales del sitio (portada, ambiente y galería)

Guardalas en la carpeta **`assets`** con estos nombres EXACTOS:

| Nombre del archivo                | Dónde aparece               |
|-----------------------------------|-----------------------------|
| `hero.jpg`                        | Foto grande de portada      |
| `exterior.jpg`                    | Foto de ambiente / exterior |
| `galeria-1.jpg` a `galeria-6.jpg` | Las 6 fotos de la galería   |

Después abrí `styles.css`, andá **al final del archivo** y borrá SOLO estas dos líneas:
- la que dice `/* ACTIVAR-FOTOS-INICIO */ /*`
- la que dice `*/ /* ACTIVAR-FOTOS-FIN */`

Al borrarlas, esas fotos aparecen y los recuadros grises desaparecen solos.

> Podés usar `.jpg`, `.png` o `.webp`.

---

## 3) Cambiar textos

- **Textos en un solo idioma / estructura general:** están en `index.html`.
- **Textos en los 3 idiomas (ES/EN/PT):** están en `script.js`, arriba de todo,
  dentro de `const I18N = { ... }`. Cada idioma tiene la misma lista de frases;
  buscá la frase que querés cambiar y editala en los 3 (`es`, `en`, `pt`).

---

## 4) Cambiar el número de WhatsApp / datos de contacto

- **Número de WhatsApp:** en `script.js`, primera línea útil:
  `const WHATSAPP_NUMBER = "59898949309";` (formato internacional, sin `+` ni espacios).
- **Teléfono, email, dirección y el botón verde flotante:** están en `index.html`,
  en la sección de **Contacto** y en el enlace `whatsapp-float` al final.

---

## 5) Publicar la página

Opción simple y gratuita (recomendada para empezar):

- **Netlify Drop:** entrá a https://app.netlify.com/drop y arrastrá la carpeta
  `azulmarino-web`. Te da una dirección al instante. Después podés conectar tu
  dominio `azulmarino.com.uy`.

Otras opciones: Cloudflare Pages, GitHub Pages, o el hosting que ya tengas
(subís los archivos por FTP a la carpeta pública). En todos los casos:
**no subas `server.js`** (es solo para probar en tu compu).

---

## Cómo funcionan las reservas

No hay pagos. Cuando alguien completa el formulario y toca **"Enviar por WhatsApp"**,
se abre WhatsApp con un mensaje ya escrito (nombre, fechas, huéspedes, habitación y
comentarios) dirigido a la posada. Ustedes responden confirmando disponibilidad y precio.
