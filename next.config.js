/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
				   {
					   source: '/',
					   destination: '/login',
					   permanent: true,
					},
			   ]
	   },
 images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
   test: /\.svg$/,
   use: ["@svgr/webpack"]
		});
  return config
 }
}

module.exports = nextConfig

