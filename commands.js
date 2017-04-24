var fs = require('fs');
var chalk = require('chalk');
var outPut = chalk.green;


var done = function(output){
	console.log(output);
	process.stdout.write(chalk.yellow('\nprompt > '));
}

module.exports = {

	
	pwd: function(){
		done(outPut(process.mainModule.paths[0]));
	},

	date: function(){
		done(outPut(new Date()));
	},

	ls: function(){
		var output = "";
		fs.readdir('.', (err, files) => {
			if (err) throw err;
			files.forEach(function(file){
				output+=file.toString()+'\n';
			});
			done(output);
		});		
	},

	echo: function(arr){
		var arg  = arr.slice(1);
		if(arg[0].charAt(0)==="$"){
			var name = arg[0].slice(1);
			if(name==='PATH')done(outPut(process.env["PATH"]));
		}else done(outPut(arg.join(' ')));
	},

	cat: function(arr) {
		var fileName = arr[1];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			done(data.toString());
		})

	},

	head: function(arr) {
		var fileName = arr[1];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			var content = data.toString().split('\n');
			var num = 5;
			done(content.slice(0, num).join('\n'));
		})

	},

	
	tail: function(arr) {
		var fileName = arr[1];
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			var content = data.toString().split('\n');
			var num = 5;
			done(content.slice(-num).join('\n'));
		})

	},
}