/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/next_pages',
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  images: { unoptimized: true },
  assetPrefix: isProd ? 'https://nolra.github.io/next_pages' : undefined,
}

export default nextConfig;
