const fs = require("fs");
const colors = require('colors');

const accionMultiplicar = async (base = 1, isListar = false, maximo = 1) => {
  let salida = "";
  const nameFile = `./salida/fileDemo${base}.txt`;
  try {
    for (let index = 1; index <= maximo; index++) {
      salida += `${base} ${'x'.green} ${index} = ${(index * base)}\n`;
    }

    if (isListar) console.log(salida);

    fs.writeFileSync(nameFile, salida);
    return `El archivo ${nameFile} se guardo.`.green;
  } catch (error) {
    throw `Se genero el error: ${error}`;
  }
};

module.exports = {
  accionMultiplicar,
};
