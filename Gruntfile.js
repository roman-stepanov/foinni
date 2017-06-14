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
    },

    postcss: {
      style: {
        options: {
          processors: [
            require('autoprefixer')({
              browsers: [
                'last 1 version',
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Opera versions',
                'last 2 Edge versions'
              ]
            })
          ]
        },
        src: 'build/css/style.css'
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less',
    'postcss'
  ]);
}
