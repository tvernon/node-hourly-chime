var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

setInterval(function () {
  var time = new Date();
  console.log(time.getHours(), time.getMinutes(), time.getSeconds());
  if (time.getMinutes() == 0 && time.getSeconds() == 0) {
    console.log(true);
   fs.createReadStream(process.argv[2])
   .pipe(new lame.Decoder())
    .on('format', function (format) {
      this.pipe(new Speaker(format));
    });
  }
},1000);