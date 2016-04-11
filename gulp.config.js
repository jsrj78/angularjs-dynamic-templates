module.exports = function() {

    var config = {
        /**
         * Files paths
         */
        appJs: './app/**/*.js',
        allJs: [
            './app/**/*.js',
            './external-lib/**/*.js',
        ],
        build: './build/',
        buildJs: './build/**/*.js',
        css: 'styles.css',
        html: '**/*.html',
        htmlLibTemplates: './external-lib/**/*.html',
        index: './index.html',

        libcss: './external-lib/**/*.css',
        /**
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js',
            libcss: 'lib.css'
        },

        root: './',

        temp: './temp/',

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'azure',
                standAlone: false,
                root: 'external-lib/'
            }
        },

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],

        wiredepOptions: {
            bowerJson: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'

        }
    };

    return config;
};
