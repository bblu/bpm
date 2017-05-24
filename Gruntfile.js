module.exports = function(grunt){
	 grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
		watch:{
			ejs:{
				files:['views/**'],
				options:{
					livereload: true
				}
			},
            js:{
                files:['app.js','config.js','lib/**','models/**','routes/**'],
                //tasks:['jshint'],
                options:{livereload: true}
            }
		},
        nodemon: {
            dev: {
                options: {
					file: 'app.js',
                    args: [],
                    ignore: ['.git', 'README.md', 'node_modules/**', '.idea'],
                    debug: true,
                    watch: ['./views','./routes'],
                    delayTime:1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
		concurrent:{
			task:['nodemon','watch'],
			options:{
				logConcurrentOutput:true
			}
		}

    });
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	
	grunt.option('force',true);

	grunt.registerTask('default',['concurrent']);
}
