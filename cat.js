module.exports = function(args) {
  const { readFile } = require('fs');
  

readFile(`./${args}`, 'utf8', (err, data) => {
  if (err) throw err;
   process.stdout.write(data)
   process.stdout.write('prompt > ');
});
}
