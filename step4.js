var https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received

    response.on('data', function (data) {
       var respContent = '' ;
       respContent += data.toString() ;//data is a buffer instance
      callback(respContent);
    });
  });
}

function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);
