'use strict';

//Crear un array de objetos con la informacion de las asignaturas de 
//la carrera de Desarrollo de software.  Crear una función que reciba
// como parámetro el array de las asignaturas y un numero que indique
// el nivel. La función debe retornar solo las asignaturas que
// pertenecen a ese nivel. 

let allSubjects = [
    // Nivel 1
    { id: 1, subject: 'Matematica computacional', types: 'Basica', credits: 3, level: 1 },
    { id: 2, subject: 'Metodologias para resolver problemas informaticos', types: 'Basica', credits: 3, level: 1 },
    { id: 3, subject: 'Base de datos relacionales', types: 'Basica', credits: 2, level: 1 },
    { id: 4, subject: 'Las Tics y soporte en hardware', types: 'Basica', credits: 2, level: 1 },
    { id: 5, subject: 'Programacion de interfaces graficas y estructura de datos', types: 'Basica', credits: 2, level: 1 },
    { id: 6, subject: 'Piensa', types: 'Basica', credits: 1, level: 1 },
    { id: 7, subject: 'Practicas de servicio comunitario', types: '', credits: 2, level: 1 },
    { id: 8, subject: 'Total', types: '', credits: 15, level: 1 },
    
    // Nivel 2
    { id: 9, subject: 'Sistemas digitales programables', types: 'Profesional', credits: 3, level: 2 },
    { id: 10, subject: 'Sistemas de informacion', types: 'Profesional', credits: 3, level: 2 },
    { id: 11, subject: 'Programacion orientada a objetos', types: 'Profesional', credits: 2, level: 2 },
    { id: 12, subject: 'Procesos contables', types: 'Profesional', credits: 2, level: 2 },
    { id: 13, subject: 'Gestion de base de datos', types: 'Profesional', credits: 2, level: 2 },
    { id: 14, subject: 'Piensa', types: 'Profesional', credits: 1, level: 2 },
    { id: 15, subject: 'Practicas laborales', types: '', credits: 2, level: 2 },
    { id: 16, subject: 'Total', types: '', credits: 15, level: 2 },
    
    // Nivel 3
    { id: 17, subject: 'Programacion de aplicaciones para dispositivos moviles', types: 'Profesional', credits: 3, level: 3 },
    { id: 18, subject: 'Probabilidades y procesos estocasticos', types: 'Profesional', credits: 3, level: 3 },
    { id: 19, subject: 'Herramientas informaticas para el despliegue de diagramas', types: 'Profesional', credits: 2, level: 3 },
    { id: 20, subject: 'Aplicaciones tecnologicas automatas', types: 'Profesional', credits: 2, level: 3 },
    { id: 21, subject: 'Software aplicativo', types: 'Profesional', credits: 2, level: 3 },
    { id: 22, subject: 'Piensa', types: 'Profesional', credits: 1, level: 3 },
    { id: 23, subject: 'Practicas profesionales', types: '', credits: 3, level: 3 },
    { id: 24, subject: 'Total', types: '', credits: 15, level: 3 },
    
    // Nivel 4
    { id: 25, subject: 'Comunicaciones y redes de datos', types: 'Profesional', credits: 3, level: 4 },
    { id: 26, subject: 'Sistemas operativos', types: 'Profesional', credits: 2, level: 4 },
    { id: 27, subject: 'Herramientas CASE', types: 'Profesional', credits: 2, level: 4 },
    { id: 28, subject: 'Derecho y seguridad informatica', types: 'Profesional', credits: 2, level: 4 },
    { id: 29, subject: 'Tendencias tecnologicas', types: 'Profesional', credits: 2, level: 4 },
    { id: 30, subject: 'Desarrollo de proyectos de software', types: 'Unidad de integracion curricular', credits: 3, level: 4 },
    { id: 31, subject: 'Practicas laborales', types: '', credits: 1, level: 4 },
    { id: 32, subject: 'Total', types: '', credits: 15, level: 4 }
];

// Función para filtrar asignaturas por nivel
function filtrarAsignaturasPorNivel(asignaturas, nivel) {
    
    return asignaturas.filter(asignatura => asignatura.level === nivel);
}

let nivelBuscado = 3;
let asignaturasNivelTres = filtrarAsignaturasPorNivel(allSubjects, nivelBuscado);
console.log('Asignaturas para el nivel', nivelBuscado, ':', asignaturasNivelTres);

nivelBuscado = 2;
let asignaturasNivelDos = filtrarAsignaturasPorNivel(allSubjects, nivelBuscado);
console.log('Asignaturas para el nivel', nivelBuscado, ':', asignaturasNivelDos);

