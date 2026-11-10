/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: genera la carpeta /out, que Vercel sirve sin servidor.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
