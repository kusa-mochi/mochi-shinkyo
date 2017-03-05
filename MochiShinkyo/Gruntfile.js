module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'src/css/mochi_style.css': 'src/view/index.scss'
                }
            }
        },
        cssmin: {
            CssCopy: {
                src: ['src/css/*.css'],
                dest: 'output/Debug/css/*.css'
            }
        },
        uglify: {
            build: {
                src: ['src/js/*.js'],
                dest: 'output/Debug/js/*.js'
            }
        },
        watch: {
            css_pc: {
                files: ['src/css/*.css'],
                tasks: ['cssmin', 'copy:css']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify', 'copy:js']
            }
        },
        ect: {
            home: {
                src: 'src/view/page/index.html',
                dest: 'output/Debug/index.html'
            },
            download: {
                src: 'src/view/page/download.html',
                dest: 'output/Debug/download.html'
            },
            gourmet: {
                src: 'src/view/page/gourmet.html',
                dest: 'output/Debug/gourmet.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ect');

    grunt.registerTask('Watch', ['watch']);
}