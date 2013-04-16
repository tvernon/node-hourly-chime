#!/usr/bin/env node

var optimist = require('optimist');
var app = require('../lib/app');

var args = optimist
  .alias('h', 'help')
  .options('file', {
    alias: 'f',
    string: true,
    describe: 'The mp3 file to play every hour'
  })
  .argv

if (args.help) {
  optimist.showHelp();
  return process.exit(-1);
}

if (!args.file) {
  args.file = 'lib/sampleMp3/sample.mp3';
}
console.log(args.file);
app(args.file);
