module.exports = function(grunt) {
  grunt.initConfig({

    aws: grunt.file.readJSON("./aws-credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "starkloudplayer",
        region: "us-west-1"
      },
      specificFile: {
        src: "public/app.js",
        dest: "heroplayer.js"
      }
    },
    
    watch: {
      files: ['public/app.js'],
      tasks: ['s3']
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-continue');
  grunt.loadNpmTasks('grunt-aws');

  grunt.registerTask('default', [
    's3',
    'watch'
  ]);
};