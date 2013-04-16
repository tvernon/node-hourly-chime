var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

module.exports = function (mp3File) {
  var time;

  setInterval(function () {
    time = new Date();
    // console.log(time.getHours(), time.getMinutes(), time.getSeconds());
    if (time.getMinutes() == 0 && time.getSeconds() == 0) {
     playFile(mp3File);
    }
  },1000);
}

function playFile(mp3File) {
  fs.createReadStream(mp3File)
  .pipe(new lame.Decoder())
  .on('format', function (format) {
    this.pipe(new Speaker(format));
  });
}