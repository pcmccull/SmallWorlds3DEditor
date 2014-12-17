var template = require("./WorldViewer.html");
console.log(template()); 
module.exports = function (a, b) {
  return a * b * 2;
};