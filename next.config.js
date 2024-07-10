/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Ensure that all paths are rendered with trailing slashes
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/background': { page: '/background' },
      '/contact': { page: '/contact' },
      // Add more paths as needed
    };
  },
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
