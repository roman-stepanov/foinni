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
            '*.html'
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
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy'
  ]);
}
