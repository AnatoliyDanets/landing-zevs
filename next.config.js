
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_PRODUCTS: process.env.PRODUCTS_ENDPOINT,
    API_ORDERS: process.env.ORDERS_ENDPOINT,
  },
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "ru"],
    localeDetection: false

  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        pathname: "/dleesb43b/image/upload/**"
      },
    ],
    domains: [
      "res.cloudinary.com",
      "localhost",
      "i.ibb.co",

    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

}

module.exports = nextConfig