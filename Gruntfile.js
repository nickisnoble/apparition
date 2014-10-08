module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      scss: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css'
        }
      }
    },
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      css: {
        files: {
          'assets/css/style.css': 'assets/css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass','csscomb']
      }
      livereload: {
        files: [
          'assets/js/*.js',
          'assets/css/*.css',
          '*.hbs',
        ],
        options: {
          livereload: true
        }
      },
    },
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-csscomb');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};