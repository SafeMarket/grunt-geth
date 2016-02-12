# grunt-geth

> Spawn geth instances from the command line

## Examples

https://github.com/SafeMarket/grunt-geth/tree/master/contracts

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-geth --save-dev 
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-geth');
```

## The "geth" task

Spawn geth instances from the command line

```js
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
        ,production:{
            options:{
                flags:{
                    rpccorsdomain: 'http://127.0.0.1:8000'
                }
            }
        }
    }
})
```