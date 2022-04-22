const ls = require('./ls')
module.exports = function () {
  const { cwd } = require("process");
  process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") process.stdout.write(cwd());
  else if(cmd === 'ls') ls();
  else process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});


}

