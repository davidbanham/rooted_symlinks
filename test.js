var bandname = require('bandname');

console.log(bandname()+'! installing packages and requiring them works just fine!');

require('root/foo');

var exec = require('child_process').execSync;

exec('npm install random-string');
var rand = require('random-string');
console.log(rand()+' means that subsequent installs still work!');
