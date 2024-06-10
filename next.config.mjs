/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nruobkekgbifyuwmkggz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    appDir: false,
  },
  // output: "export",
};

export default nextConfig;
