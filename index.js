if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/jsSdk.min.js');
} else {
  module.exports = require('./dist/jsSdk.js');
}