module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'app/css/spongetest.css': 'app/css/spongetest.scss',       // 'destination': 'source'
      }
    }
  }
    
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task(s).
  grunt.registerTask('default', ['sass']);

};