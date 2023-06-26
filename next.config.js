/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, options) {
		config.module.rules.push({
			// options: {
			// 	prettier: false,
			// 	svgo: true,
			// 	svgoConfig: {
   //   plugins: [{ 
   //    name: 'preset-default',
   //    params: {
   //     override: {
   //      removeViewBox: false
   //     }
   //    }
   //   }],
			// 	},
			// 	titleProp: true,
   // },
   test: /\.svg$/,
   use: ["@svgr/webpack"]
		});
  return config
 }
}

module.exports = nextConfig

