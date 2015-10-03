module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/",
                    paths: {
                        automizyApi: ''
                    },
                    name: "automizyApi/automizyapi",
                    optimize: "none",
                    out: "dist/automizy.api.js"
                }
            }
        },
		uglify: {
			all: {
				files: {
					"dist/automizy.api.min.js": ["dist/automizy.api.js"],
					"doc/js/automizy.api.min.js": ["dist/automizy.api.js"]
				},
				options: {
					preserveComments: false,
					sourceMap: true,
					sourceMapName: "dist/automizy.api.min.map",
					report: "min",
					beautify: {
						"ascii_only": true
					},
					compress: {
						hoist_funs: false,
						loops: false,
						unused: false,
						dead_code: false,
						conditionals: false,
						comparisons: false,
						evaluate: false,
						booleans: false,
						if_return: false,
						join_vars: false,
						warnings: false,
						negate_iife: false, //
						drop_console: false
					}
				}
			}
		},
		compress: {
			main: {
				options: {
					archive: 'dist/automizyjsapi.zip'
				},
				files: [
					{expand: true, src: ['**/*.js', '**/*.map', '**/*.css'], cwd : "dist/"}
				]
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'dist/', src: '**/automizy.api.min.js', dest: 'doc/js/'},
					{expand: true, cwd: 'dist/', src: '**/automizy.api.min.map', dest: 'doc/js/'},
					{expand: true, cwd: 'external/automizyjs/dist', src: '**/automizy.min.js', dest: 'doc/js/'},
					{expand: true, cwd: 'external/automizyjs/dist', src: '**/automizy.min.map', dest: 'doc/js/'},
					{expand: true, cwd: 'external/automizyjs/dist', src: '**/automizy.min.css', dest: 'doc/css/'},
					{expand: true, cwd: 'dist/', src: '**/automizy.api.min.js', dest: 'doc/example/js/'},
					{expand: true, cwd: 'dist/', src: '**/automizy.api.min.map', dest: 'doc/example/js/'},
					{expand: true, cwd: 'external/automizyjs/dist', src: '**/automizy.min.js', dest: 'doc/example/js/'},
					{expand: true, cwd: 'external/automizyjs/dist', src: '**/automizy.min.map', dest: 'doc/example/js/'},
					{expand: true, cwd: 'external/automizyjs/dist', src: '**/automizy.min.css', dest: 'doc/example/css/'},
					{expand: true, cwd: 'dist/', src: '**/*', dest: 'doc/downloads/'}
				]
			}
		},
    });
	
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadTasks('build/tasks');
    grunt.registerTask("default", ["requirejs", "require_clear", "uglify", "compress", "copy"]);
};

