
//http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
//https://www.npmjs.com/package/grunt-typescript
//http://gruntjs.com/getting-started


//grunt-typescript-formatter

module.exports = function(grunt){
    grunt.initConfig({
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'js/',
                options: {
                    module: 'commonjs',
                    target: 'es5'
                    //basepath: ['./src/**/*.ts']

                }
            }
        },


        /*'typescript-formatter': {
            files: {
                src: ['src/Functor.ts']
            }
        },*/

        jshint: {
            all: ['/tests/.*js'],
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
        },

       concat: {
        dist: {
            src: ['js/*.js'],
            dest: 'js/quadro.js'
        }
       } ,

       clean: {
            js: ["js/*"],
            test: ['/build/test']
        }

   });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat')
    //grunt.loadNpmTasks('grunt-typescript-formatter');
    grunt.registerTask('default', ['clean', 'typescript', 'concat']);
}
