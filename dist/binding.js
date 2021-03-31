const addon = require('../build/Release/napi-experimental-native');

console.log('hello', addon.NapiExperimental());
module.exports = addon.NapiExperimental;
