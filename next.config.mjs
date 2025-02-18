/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jlfekazftgytoziyfzfn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/productPics/**",
        // search: "",
      },
    ],
  },
  // output: "export",
}
export default nextConfig
