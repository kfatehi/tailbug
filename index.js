var fs = require('fs')
var util = require('util')

module.exports = function(filePath) {
  return function() {
    var location = new Error().stack.split('\n')[2].replace(/^\s+/,'');
    var pre = '>>> '+location+'\n';
    var line = util.format.apply(this, arguments)+'\n';
    var post = '<<< '+location+'\n';
    fs.appendFileSync(filePath, pre+line+post);
  }
}
