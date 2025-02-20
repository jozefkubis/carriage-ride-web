/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: "lh3.googleusercontent.com", // ✅ Pridaný Google host
      },
    ],
  },
};

export default nextConfig;
