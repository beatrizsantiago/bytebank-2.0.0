/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:all*\\.(svg|jpg|jpeg|png|webp|gif|ico)$',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          }
        ],
      },
      {
        source: '/fonts/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      }
      
    ]
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3001/api',
  }
};

export default nextConfig;
