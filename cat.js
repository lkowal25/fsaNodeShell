module.exports = function(args) {
  const { readFile } = require('fs');

readFile('./pwd.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});
}
