/** @type {import('next').NextConfig} */
const nextConfig = {
    // styledComponents: true
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3.us-west-2.amazonaws.com',
            port: '',
            pathname: '/**',
          }
        ]
      }
};

module.exports = nextConfig;
