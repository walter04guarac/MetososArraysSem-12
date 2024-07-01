'use strict';

//Crear una función que calcule el promedio de un conjunto de calificaciones 
//almacenados en un array. La función debe recibir el array y devolver
// únicamente la parte entera del promedio.
no
function calcularPromedioEntero(calificaciones) {
    if (calificaciones.length === 0) {
        return 0; 
    }
    
    let suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    
    let promedio = suma / calificaciones.length;
    
    return Math.floor(promedio);
}

alert('Calculemos tu promedio');

let m1 = parseFloat(prompt('¿Cuál es tu nota del momento 1?'));
let m2 = parseFloat(prompt('¿Cuál es tu nota del momento 2?'));
let m3 = parseFloat(prompt('¿Cuál es tu nota del momento 3?'));

let calificaciones = [m1, m2, m3];

let promedioEntero = calcularPromedioEntero(calificaciones);

alert('Parte entera del promedio: ' + promedioEntero);
