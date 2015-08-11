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
      },
      assemble: {
        files: ['./src/**/*.hbs']
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
          "./assets/js/lib/handlebars/handlebars.js",
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
    },
    assemble: {
      options: {
        layout: "./src/layouts/default.hbs",
        flatten: true
      },
      pages: {
        files: {
          './': ['./src/pages/*.hbs']
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
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-assemble");

  grunt.registerTask("build", ["newer:concat:vendor", "newer:concat:app", "newer:compass:dist", "assemble"]);
  grunt.registerTask("default", ["jshint", "build", "watch", "assemble"]);
  grunt.registerTask("prod", ["build", "uglify"]);
};