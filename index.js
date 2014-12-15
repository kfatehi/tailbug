var fs = require('fs')
var util = require('util')

module.exports = function(filePath) {
  return function() {
    var stacktrace = new Error().err.stack.split('\n');
    var calledFrom = stacktrace[1].replace(/\s+at debug /, '');
    var label = __filename.replace(__dirname,'').replace(/\//,'');
    var line = label+' '+util.format.apply(this, arguments);
    fs.appendFileSync(filePath, line + '\n');
  }
}
