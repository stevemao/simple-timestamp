var leftPad = require('left-pad');

function pad(num) {
  return leftPad(num, 2, 0);
}

module.exports = function() {
  var now = new Date();
  return now.getFullYear() + '.' + pad(now.getMonth() + 1) + '.' + pad(now.getDate()) + '.' + pad(now.getHours()) + '.' + pad(now.getMinutes()) + '.' + pad(now.getSeconds());
};
