'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      build: ['build/']
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            '*.html',
            'img/**/*.{jpg,png}',
            'fonts/**.{woff,woff2}',
            'js/**.js'
          ],
          dest: 'build'
        }]
      },
      normalize: {
        files: [{
          expand: true,
          cwd: 'node_modules/normalize.css/',
          src: ['normalize.css'],
          dest: 'build/css/'
        }]
      },
      jquery: {
        files: [{
          expand: true,
          cwd: 'node_modules/jquery/dist/',
          src: [
            'jquery.min.js',
            'jquery.min.map'
          ],
          dest: 'build/js/'
        }]
      }
    },

    less: {
      build: {
        files: {
          'build/css/style.css': 'less/style.less'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less'
  ]);
}
