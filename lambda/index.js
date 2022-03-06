var app = require('./the.js')('StarterBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
