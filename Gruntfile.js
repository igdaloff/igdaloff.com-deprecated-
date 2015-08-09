module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      compass: {
        files: "./assets/scss/**/*.scss",
        tasks: "compass:dist",
        options: {
          interrupt: true
        }
      },
      concat_app: {
        files: "./assets/js/**/*",
        tasks: "concat:app"
      },
      jshint: {
        files: ['Gruntfile.js', 'assets/js/**/*.js', 'app/**/*.js'],
        tasks: 'jshint'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'assets/js/*.js', 'app/**/*.js']
    },
    compass: {
      dist: {
        options: {
          sassDir: './assets/scss/',
          cssDir: './public/css/',
          imagesDir: './public/img/'
        }
      }
    },
    concat: {
      vendor: {
        src: [
          "./assets/js/lib/jquery/dist/jquery.js",
          "./assets/js/lib/modernizr/modernizr.js",
          "./assets/js/lib/responsiveslides.js",
          "./assets/js/lib/jquery.lettering.js",
          "./assets/js/lib/fittext/fittext.js"
          ],
        dest: "./public/js/vendors.js"
      },
      app: {
        src: "./assets/js/*.js",
        dest: "./public/js/app.js"
      }
    },
    uglify: {
      vendors: {
        files: {
          './public/js/vendors.min.js': ['./public/js/vendors.js']
        }
      },
      app: {
        files: {
          './public/js/app.min.js': ['./public/js/app.js']
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-concat");

  grunt.registerTask("build", ["concat:vendor", "concat:app", "compass:dist"]);
  grunt.registerTask("default", ["jshint", "build", "watch"]);
  grunt.registerTask("prod", ["build", "uglify"]);
};