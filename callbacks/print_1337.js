var getHTML = require('./http-functions');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


var objKeys = {
  a : '4',
  e : '3',
  l : '1',
  o : '0',
  s : '5',
  t : '7'
}


function print1337 (html) {
  for(var key in objKeys){
    for (let value of html) {
      if(key === value){
        value = objKeys[key];

      }
    }
  }

}


getHTML(requestOptions, print1337);


