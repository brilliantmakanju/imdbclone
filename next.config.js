/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,  
  experimental: {   
    appDir:true
  },
  images: {
  	domains: ["pyapimovie.pythonanywhere.com"],
  },
  
}

module.exports = nextConfig
