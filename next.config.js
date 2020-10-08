module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
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
