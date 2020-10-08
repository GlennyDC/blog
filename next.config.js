const bundleAnalyzer = require('@next/bundle-analyzer');
const nextMDX = require('@next/mdx');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX();

const nextConfig = {
  // Next highly recommends to change the default target from server
  // to serverless
  // https://nextjs.org/docs/api-reference/next.config.js/build-target
  target: 'serverless',
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Make SVGR pass the title prop to SVGs
            // https://react-svgr.com/docs/options/#title
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));
