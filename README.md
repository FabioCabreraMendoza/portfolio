# Portfolio de Fabio Cabrera Mendoza

Next.js 16 + Tailwind v4 + Motion. Web estática en español (`/`) e inglés (`/en/`).

## Editar el contenido

Todo el texto está en `src/content.ts`. Busca `TODO(Fabio)`:

- Correo y LinkedIn ya son los reales.
- Proyectos, experiencia, formación, stack e imágenes son de EJEMPLO. Sustitúyelos antes de publicar.
- Para añadir enlaces a un proyecto: `links: [{ label: "Demo", href: "https://..." }]`.
- Las imágenes son de `picsum.photos`. Cámbialas por capturas reales (ponlas en `public/` y usa `/mi-imagen.png`).

## Probar en local

```bash
npm install
npm run dev
```

## Desplegar en Vercel

1. Crea un repositorio vacío en github.com (por ejemplo `portfolio`), sin README ni .gitignore.
2. Desde esta carpeta, sube el código:

   ```bash
   git commit -m "Portfolio inicial"
   git remote add origin https://github.com/FabioCabreraMendoza/portfolio.git
   git push -u origin main
   ```

   Si Git pide tu identidad, ejecuta antes `git config user.name "Tu nombre"` y `git config user.email "tu-correo"`.
3. En vercel.com pulsa "Add New > Project" e importa el repositorio.
4. Vercel detecta Next.js solo. Pulsa "Deploy".

Alternativa por consola:

```bash
npx vercel
```

Obtendrás una URL del tipo `tu-proyecto.vercel.app`. Puedes cambiar el nombre en Project Settings > Domains.
