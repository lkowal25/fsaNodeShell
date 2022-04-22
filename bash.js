// imported from pwd.js - prints working directory if prompt = "pwd"
const pwd = require('./pwd');
const ls = require('./ls')
// const cat = require('./cat');


process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') pwd();
  else if(cmd === 'ls') ls();
  // else if(cmd === 'cat') cat(...args);
  else process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
