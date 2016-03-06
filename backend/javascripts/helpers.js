var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Q = require('q');
var fs = require('fs');

var helper = {
  // readStringFromFilePath: function(fileName) {
  //   var filePath = "/images/"+fileName;
  //   console.log(filePath);
  //   var request = new XMLHttpRequest();
  //   request.open("GET", filePath, false);
  //   request.send(null);
  //   var returnValue = request.responseText;
  //   console.log('file contents request:', request);
  //   console.log('file contents:', returnValue);
  //
  //   return returnValue;
  // },

  //
//   var request = new XMLHttpRequest();
// request.open("GET", pathOfFileToReadFrom, false);
// request.send(null);
// var returnValue = request.responseText;
//
// return returnValue;
  //

  readFiles: function(fileNames) {
    console.log('fileNames: ', fileNames);
    return Q.all(fileNames.map(function(fileName) {
      console.log('fileName: ', fileName);
      // fs.readFile(fileName.image_link, function(err, data) {
        // if (err) {
          // console.log('error: ', err);
          // throw err; // Fail if the file can't be read.
        // }
        // else {
          // console.log('successful read data: ', data);
          return Q.nfcall(fs.readFile, fileName.image_link, 'utf8');
        // }
      // })
    }));
  }
}


module.exports = helper;
