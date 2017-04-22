var readline = require('readline')

var clear = function (stream) {
  // only clear if run in text terminal
  // and if stream is writable
  if (stream.isTTY && stream.writable) {
    // set cursor to 0:0
    readline.cursorTo(stream, 0, 0)
    // clear the stream down to cursor
    readline.clearScreenDown(stream)
  }
}

module.exports = function (stream) {
  // clear specified stream, else stdout
  clear(stream || process.stdout)
}
