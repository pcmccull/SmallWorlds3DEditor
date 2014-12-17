var browserify = require("browserify");
var jstify = require("jstify");
var fs = require("fs");


var rootDirectory = "../WebContent/js/";
var b = browserify(rootDirectory + "src/main.js");
b.transform("jstify");
b.bundle().pipe(fs.createWriteStream(rootDirectory + "all.js"));