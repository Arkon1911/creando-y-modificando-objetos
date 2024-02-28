// función constructora

function Consultorio(nombre, paciente){
    this.nombre = nombre;
    this.paciente = paciente;
}

function Paciente(nombre, edad, rut, diagnostico){
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}

let paciente1 = new Paciente("Marcelo, 35, 1234567-8, tos aguda");
let paciente2 = new Paciente("Camila, 28, 1234567-9, fractura muñeca");
let paciente3 = new Paciente("Marcos, 55, 1234567-1, amigdalitis");
let paciente4 = new Paciente("Cristian, 49, 1234567-2, infarto");
let paciente5 = new Paciente("Sandra, 38, 1234567-3, embarazada");

// metodos con prototype

// Método para buscar un usuario por nombre
User.prototype.findUserByName = function (name) {
    return userList.find(user => user.name === name);
  };

  // Método para mostrar todos los datos de los usuarios
User.prototype.showAllUsers = function () {
    userList.map(user => {
      console.log(`Nombre: ${nombre}, Edad: ${edad}, Rut: ${rut}, Diagnostico: ${diagnostico}`);
    });
  };