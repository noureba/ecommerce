/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'cloudinary.com', 'res.cloudinary.com'],
  }, 
}

module.exports = nextConfig
