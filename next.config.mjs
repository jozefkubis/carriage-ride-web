/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // ✅ Nastavenie maximálnej veľkosti request body na 5MB
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jlfekazftgytoziyfzfn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/productPics/**",
      },
      {
        protocol: "https",
        hostname: "jlfekazftgytoziyfzfn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/avatars/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // ✅ Google host
      },
    ],
    minimumCacheTTL: 60, // ✅ Ukladanie do cache na 60 sekúnd
    formats: ["image/avif", "image/webp"], // ✅ Automaticky používa WebP a AVIF
    deviceSizes: [320, 420, 768, 1024, 1200], // ✅ Optimalizované veľkosti pre zariadenia
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // ✅ Optimalizované veľkosti obrázkov
  },
}

export default nextConfig
