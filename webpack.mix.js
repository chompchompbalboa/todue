let mix = require('laravel-mix')

mix.disableNotifications()

mix.options({
	hmrOptions: {
		host: 'dodate.test',
		port: '8080'
	}
})

mix.webpackConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'resources/js')
		},
	}
})

mix.ts('resources/js/bundles/App.tsx', 'public/js/app.js').sourceMaps()