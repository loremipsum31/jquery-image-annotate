'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', '$']
                }
            },
            dist: {
                files: {
                    'dist/js/jquery.annotate.min.js': ['js/jquery.annotate.js']
                }
            }
        },
        less: {
            dist: {
                files: {
                    'dist/css/annotate.min.css': [
                        'less/annotate.less'
                    ]
                },
                options: {
                    compress: true
                }
            }
        },
        clean: ['dist']
    });
    grunt.registerTask('default', [
        'uglify',
        'less'
    ]);

};