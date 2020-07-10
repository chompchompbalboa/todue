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
			'@': path.resolve(__dirname, 'resources/js'),
			'@web': path.resolve(__dirname, 'resources/js/bundles/web')
		},
	}
})

mix.ts('resources/js/bundles/web/App.tsx', 'public/js/app.js').sourceMaps()
mix.ts('resources/js/bundles/web/Site.tsx', 'public/js/site.js').sourceMaps()