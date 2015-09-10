module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'foundation/scss/app.scss',
          'css/ui.resources.css': 'ebsco/scss/ui.resources.scss'
        }
      }
    },

// --------------------------------------
// Concatenate Configuration
// --------------------------------------

concat: {
  options: {
    separator: ';'
  },
  script: {
    src: [
      'bower_components/foundation/js/foundation/foundation.js',
      'bower_components/foundation/js/foundation/foundation.accordion.js',
      'bower_components/foundation/js/foundation/foundation.alert.js',
      'bower_components/foundation/js/foundation/foundation.dropdown.js',
      'bower_components/foundation/js/foundation/foundation.equalizer.js',
      'bower_components/foundation/js/foundation/foundation.reveal.js',
      'bower_components/foundation/js/foundation/foundation.tab.js',
      'bower_components/foundation/js/foundation/foundation.tooltip.js'
      // ...more foundation JS you might want to add
    ],
    dest: 'foundation/js/ui.foundation.js'
  }
},

// --------------------------------------
// Uglify Configuration
// --------------------------------------

uglify: {
  dist: {
    files: {
      'foundation/js/ui.foundation.min.js': ['foundation/js/ui.foundation.js'],
      'ebsco/js/ie.detect.min.js': ['ebsco/js/ie.detect.js'],
      'ebsco/js/foundation.datepicker.min.js': ['ebsco/js/foundation.datepicker.js'],
      'js/modernizr.min.js': ['bower_components/foundation/js/vendor/modernizr.js'],
      'js/jquery.min.js': ['bower_components/foundation/js/vendor/jquery.js'],
      'js/placeholder.min.js': ['bower_components/foundation/js/vendor/placeholder.js']
    }
  }
},

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sassEBSCO: {
        files: 'ebsco/scss/*.scss',
        tasks: ['sass']
      },
      sassIncludes: {
        files: 'ebsco/scss_partials/*.scss',
        tasks: ['sass']
      },
      sassZURB: {
        files: 'foundation/scss/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('buildJs',  ['concat', 'uglify']);
  grunt.registerTask('build', ['sass', 'buildJs']);
  grunt.registerTask('default', ['build','watch']);
}
