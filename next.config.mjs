/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF/WebP keep transparency and are far lighter than PNG.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
