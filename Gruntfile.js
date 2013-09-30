/*  ==========================================================================
	Grunt configuration
	==========================================================================  */

module.exports = function(grunt) {

	grunt.initConfig({

		/* Reads dependencies from package.json */

		pkg: grunt.file.readJSON('package.json'),

		
		/* [ grunt uglify ] Javascript plugins compressor (https://github.com/gruntjs/grunt-contrib-uglify) */

		uglify: {
			options: {
				banner: '/*! <%= pkg.title %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> - <%= pkg.author.url %> | Released under the <%= pkg.licenses.type %> license */\n'
			},
			my_target: {
				files: {
					'jquery.<%= pkg.name %>.min-<%= pkg.version %>.js': ['jquery.<%= pkg.name %>.js']
				}
			}
		},

	});


	/* Load tasks */

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [ 'uglify']);

};