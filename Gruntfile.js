/*  ==========================================================================
	Grunt configuration
	==========================================================================  */

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.title %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> - <%= pkg.author.url %> | Released under the <%= pkg.licenses.type %> license */\n'
			},
			my_target: {
				files: {
					'jquery.<%= pkg.name %>.min.js': ['jquery.<%= pkg.name %>.js']
				}
			}
		}

	});


	/* Load tasks */

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [ 'uglify' ]);

};