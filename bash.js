var commands = require("./commands");
var fs = require('fs');
var chalk = require('chalk');
process.stdout.write(chalk.yellow('prompt > '));

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) { 

  var args = data.toString().trim().split(' '); 

  var cmd = args[0];

  if(commands[cmd]) commands[cmd](args);
  else process.stdout.write(chalk.yellow('\nprompt > '));

});