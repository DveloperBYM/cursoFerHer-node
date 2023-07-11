const { accionMultiplicar } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

console.log(process.argv);
console.log(argv);

// const [ , , base3] = process.argv;
// console.log(base3);

// const base = base3;

accionMultiplicar(argv.b, argv.l, argv.m)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
