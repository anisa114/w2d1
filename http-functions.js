var https = require('https');
module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    response.on('data', function (data) {
       var respContent = '' ;
       respContent += data.toString() ;//data is a buffer instance
      callback(respContent);
    });
  });
};