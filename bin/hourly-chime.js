#!/usr/bin/env node

var optimist = require('optimist');
var app = require('../lib/app');
var path = require('path');

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
  args.file = path.resolve(__filename,'../../lib/sampleMp3/sample.mp3');}
}

app(args.file);
