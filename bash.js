// imported from pwd.js - prints working directory if prompt = "pwd"
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');


process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const fileName = cmd.split(' ').slice(1);
  if (cmd === 'pwd') pwd();
  else if(cmd === 'ls') ls();
  else if(cmd.split(' ')[0] === 'cat') cat(...fileName);
  else process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});

