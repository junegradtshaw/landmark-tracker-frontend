var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Q = require('q');
var fs = require('fs');

var helper = {
  readStringFromFilePath: function(fileName) {
    var filePath = "/images/"+fileName;
    console.log(filePath);
    var request = new XMLHttpRequest();
    request.open("GET", filePath, false);
    request.send(null);
    var returnValue = request.responseText;
    console.log('file contents request:', request);
    console.log('file contents:', returnValue);

    return returnValue;
  },

  //
//   var request = new XMLHttpRequest();
// request.open("GET", pathOfFileToReadFrom, false);
// request.send(null);
// var returnValue = request.responseText;
//
// return returnValue;
  //

  readFiles: function(fileNames) {
    fileNames.map(function(fileName) {
    return Q.nfcall(fs.readFile, 'users/' + filename, 'utf8');
//  ^^^^^^ here's where the return is needed
})
    //
    var fileContents = [];
    fileNames.forEach(function(fileName) {
      fileContents.push(helper.readStringFromFilePath(fileName.image_link));
    })
    return fileContents;
  }
}

module.exports = helper;
