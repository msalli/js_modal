module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['sass/**'],
        tasks: ['sass']
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },


  });

  grunt.registerTask('default', ['sass']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
};