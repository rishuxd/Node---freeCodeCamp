const names = require("./names");
const greet = require("./utils");
const altNames = require("./alternative-names");
require("./sumNum");

greet(names.rishi);
greet(names.john);

greet(altNames.singlePerson.name);
