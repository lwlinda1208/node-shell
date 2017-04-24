//var myModule = require("./path");
// Output a prompt
var fs = require('fs');
var chalk = require('chalk');
process.stdout.write(chalk.yellow('prompt > '));

// var done = function(output){
// 	console.log(output);
// 	process.stdout.write(chalk.yellow('\nprompt > '));
// }

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  //console.log(process);

  var myModule = require("./commands");

  var args = data.toString().trim().split(' '); 

  var cmd = args[0]; // remove the newline

  myModule[cmd](args);


  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write(chalk.yellow('\nprompt > '));

});