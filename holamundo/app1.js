const empleados = [
  { id: 1, nombre: "Fernando" },
  { id: 2, nombre: "Hugo" },
  { id: 3, nombre: "Carlos" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 1500 },
];

// PROMESAS

// const getEmpleado = (id) => {
//   return new Promise((resolve, reject) => {
//     const empleado = empleados.find((e) => e.id == id)?.nombre;
//     empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
//   });
// };

// const getSalario = (id) => {
//   return new Promise((resolve, reject) => {
//     const salario = salarios.find((s) => s.id == id)?.salario;
//     salario ? resolve(salario) : reject(`El id ${id} no tiene salario`);
//   });
// };

// let nombre;
// const id = 5;
// // getEmpleado(id)
// //   .then((empleado) => console.log(empleado))
// //   .catch((err) => console.log(err));

// // getSalario(id)
// //   .then((salario) => console.log(salario))
// //   .catch((err) => console.log(err));
// getEmpleado(id)
//     .then(empleado =>{
//         nombre = empleado;
//         return getSalario(id);
//     })
//     .then( salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
//     .catch(err => console.log(err));

// ASYNX - AWAIT

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id == id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id == id)?.salario;
    salario ? resolve(salario) : reject(`El id ${id} no tiene salario`);
  });
};

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (error) {
    throw `Se genero el siguiente error: ${error}`;
  }
};

const id = 1;
getInfoUsuario(id)
  .then((msg) => {
    console.log('TODO BIEN');
    console.log(msg)
  })
  .catch((err) => {
    console.log('TODO MAL');
    console.log(err)
  });
