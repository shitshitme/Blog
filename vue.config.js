module.exports = {
	configureWebpack: {
		resolve: {
			// extension: [],
			alias: {
				'assets': '@/assets',
				'commonjs': '@/commonjs',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		}
	}
}