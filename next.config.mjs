/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? 'https://nolra.github.io/next_pages' : undefined,
}

export default nextConfig;
