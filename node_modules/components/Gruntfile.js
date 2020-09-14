/*
 * css-buttons
 * https://github.com/upstage/css-buttons
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.util._.mixin(require('./src/helpers/mixins.js').init(grunt));

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      docs: {
        options: {
          flatten: true,
          assets: 'assets',
          helpers: ['./src/helpers/helpers.js'],
          layout: 'src/templates/layouts/default.hbs',
          partials: ['src/templates/partials/**/*.hbs'],
          data: ['src/data/*.{json,yml}'],

          // Pass metadata from package.json into templates
          pkg: '<%= pkg %>'
        },
        src: ['src/templates/pages/*.hbs'],
        dest: './'
      }
    },

    less: {
      options: {
        paths: ['src/less', 'src/less/components'],
        imports: {
          reference: ['src/less/variables.less', 'src/less/mixins.less']
        }
      },
      component: {
        src:  'src/less/components/*.less',
        dest: 'assets/components.css'
      }
    },

    prettify: {
      options: {
        prettifyrc: '.prettifyrc'
      },
      docs: {
        files: [
          {expand: true, cwd: './', ext: '.html', src: ['*.html'], dest: './'}
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'less', 'assemble', 'prettify']);
};

