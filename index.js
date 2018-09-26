const htmlparser = require("htmlparser2");
const fs = require("fs");

var parser = new htmlparser.Parser({
    onopentag: function (name, attribs) {
        if (name === "script" && attribs.type === "text/javascript") {
            console.log("JS! Hooray!");
        }
    },
    ontext: function (text) {
        console.log("-->", text);
    },
    onclosetag: function (tagname) {
        if (tagname === "script") {
            console.log("That's it?!");
        }
    }
}, {decodeEntities: true});

const testData = fs.readFileSync("./testdata/1.html");
parser.write(testData);
parser.end();