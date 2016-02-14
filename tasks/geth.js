module.exports = function(grunt){

	var cp = require('child_process')

	grunt.registerMultiTask("geth", "Run geth", function(){
		
		var done = this.async()
			,options = this.options({
				bin: 'geth'
				,flags:{}
				,commands:{}
			}),args = []

		Object.keys(options.flags).forEach(function(flag){
			
			args.push('--'+flag)

			var value = options.flags[flag]

			if(value !== true)
				args.push(value)

		})

		Object.keys(options.commands).forEach(function(command){
			
			args.push(command)

			var value = options.commands[command]

			if(command !== true)
				args.push(value)

		})

		grunt.log.writeln('Running:',options.bin,args.join(' '))

		var proc = cp.spawn(options.bin,args)

		proc.stdout.on("data", function(data){
			process.stdout.write(data.toString())
		});

		proc.stderr.on("data", function(data){
			process.stdout.write(data.toString())
		});

	})
}

function formattedValue(value){
	if(typeof value === 'string')
		return '"'+value+'"'
	else
		return value
}
