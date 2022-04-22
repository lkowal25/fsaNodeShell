
module.exports = function () {
  const { cwd } = require("process");
 process.stdout.write(cwd());
};


