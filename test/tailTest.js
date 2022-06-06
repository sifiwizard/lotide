const assertEqual = require('../assertEqual')
const tail = require('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);