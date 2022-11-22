const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  trailingSlash: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  generateEtags: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right"
  },
  optimizeFonts: true,
  experimental: {
    optimisticClientCache: true,
  },
  headers: async () => { 
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          }
          // {
          //   key: "X-Frame-Options",
          //   value: "DENY",
          // },
          // {
          //   key: "X-XSS-Protection",
          //   value: "1; mode=block",
          // },
          // {
          //   key: "X-Content-Type-Options",
          //   value: "nosniff",
          // },
          // {
          //   key: "Referrer-Policy",
          //   value: "same-origin",
          // },
          // {
          //   key: "Permissions-Policy",
          //   value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          // },
        ],
      },
    ];
  }
});

module.exports = nextConfig;
