const fs = require('fs');

module.exports = function(filePathWithName) {

  let stats = fs.statSync(filePathWithName);

  let statsDate = stats.mtime;

  let formattedDate = 
  statsDate.getFullYear()
  + '-' +
  ('0' + (statsDate.getMonth()+1)).slice(-2)
  + '-' +
  ('0' + statsDate.getDate()).slice(-2);

  return `${formattedDate}`;
};