/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/views/js/main.min.js': 'src/views/js/main.js'
        }
      }
    },

    cssmin: {
      my_target: {
        files: {
          'dist/views/css/bootstrap-grid.min.css': 'src/views/css/bootstrap-grid.css'
        }
      }
    },

    minifyHtml: {
      my_target: {
        files: {
          'dist/views/pizza.html': 'src/views/index.html'
        }
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 720,
            height: 540,
            suffix: '_optimized',
            quality: 30
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: 'pizzeria-720x540_optimized.jpg',
          cwd: 'dist/views/images/',
          dest: 'dist/views/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-minify-html');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'minifyHtml']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
