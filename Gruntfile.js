// Copyright 2014 Mitch Denny
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    jsdoc: {
      dist: {
        src: ['index.js'],
        options: { 
          destination: 'doc'
        }
      }
    },
    release: {
      options: {
        commitMessage: 'release <%= version %> [no ci]' //default: 'release <%= version %>
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('doc', ['jsdoc']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['doc', 'test']);
};
