/*global module:false*/
module.exports = function(grunt) {

  grunt.loadTasks('tasks');

  grunt.initConfig({
    geth:{
      development:{
        options:{
          bin: 'geth'
          ,flags:{
            rpcport: 8101
            ,rpccorsdomain: 'http://127.0.0.1:8000'
            ,genesis: 'genesis.json'
            ,datadir: '/tmp/devchain'
            ,maxpeers: 0
          },commands:{
            js: 'js/test.js'
          }
        }
      },
      production:{
        options:{
          flags:{
            rpccorsdomain: 'http://127.0.0.1:8000'
          }
        }
      }
    }
  })


};
