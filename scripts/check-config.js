#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

var configPath = path.resolve('./test-config.json');

fs.stat(configPath, function statCallback (err, stats) {
  if (err) {
    console.log(chalk.red.bold.underline('Missing config.json! Please check README for instructions.'));
    return process.exit(1);
  }
});
