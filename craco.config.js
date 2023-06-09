const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@/theme': path.resolve(__dirname, 'src/theme'),
			'@/forms': path.resolve(__dirname, 'src/forms'),
			'@/fields': path.resolve(__dirname, 'src/fields'),
			'@/components': path.resolve(__dirname, 'src/components'),
			'@/pages': path.resolve(__dirname, 'src/pages'),
			'@/actions': path.resolve(__dirname, 'src/actions'),
			'@/constants': path.resolve(__dirname, 'src/constants'),
			'@/api': path.resolve(__dirname, 'src/api'),
			'@/assets': path.resolve(__dirname, 'src/assets'),
			'@/helpers': path.resolve(__dirname, 'src/helpers'),
			'@/routes': path.resolve(__dirname, 'src/routes'),
			'@/services': path.resolve(__dirname, 'src/services'),
			'@/notifications': path.resolve(__dirname, 'src/notifications'),
		},
	},
};
