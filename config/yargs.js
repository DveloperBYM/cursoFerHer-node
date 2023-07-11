const colors = require("colors");
const { option } = require("yargs");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    description: "Es la condicion si muestra o no la tabla",
  })
  .option("m", {
    alias: "maximo",
    type: "number",
    demandOption: true,
    description: "Es el maximo de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw `La base tiene que ser un numero`;
    }
    if (isNaN(argv.m)) {
        throw `El dato maximo tiene que ser un numero`;
      }
    return true;
  })
  .argv;

module.exports = argv;
