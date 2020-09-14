/*
 * Assemble
 * https://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

exports.init = function(grunt) {
  var _ = grunt.util._;
  var exports = {};

  _.mixin({

    /* _.componentize: Converts dashes to spaces, and 'css' to 'CSS' */
    componentize: function(str) {
      return str.replace(/-/g, ' ').replace(/css/g, 'CSS');
    }

  });
  return exports;
};