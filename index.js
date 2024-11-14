
const estudiantes = [
    { nombre: 'Ana', calificacion: 65 , estado: 'aprobado'},
    { nombre: 'Luis', calificacion: 51 , estado: 'aprobado'},
    { nombre: 'Carlos', calificacion: 39 , estado: 'reprobado'},
    { nombre: 'Maria', calificacion: 60 , estado: 'aprobado'},
    { nombre: 'Juan', calificacion: 29 , estado: 'reprobado'},
    { nombre: 'Jose', calificacion: 55 , estado: 'aprobado'},
    { nombre: 'Nicolas', calificacion: 34 , estado: 'reprobado'},
    { nombre: 'Sergio', calificacion: 63 , estado: 'aprobado'},
    { nombre: 'Fernanda', calificacion: 70 , estado: 'aprobado'},
];

// Para Bucar estado de alumno

let nombreestudiante = prompt('Ingrese el nombre que desea buscar')

const alumnobuscado = estudiantes.find( estudiante => estudiante.nombre === nombreestudiante)

if (alumnobuscado) {
    alert(`estado de alumno es ${alumnobuscado.estado}`)
    console.log(`estado de alumno es ${alumnobuscado.estado}`)
}

let notaminima = prompt('Ingrese la nota minima para filtrar')

let filtraralumnos = estudiantes.filter(estudiante => estudiante.calificacion >= notaminima)

console.log(filtraralumnos)

let listaalumnos = estudiantes.forEach(estudiante => console.log(`Nombre: ${estudiante.nombre}, estado: ${estudiante.estado}`));