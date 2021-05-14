
const process = require('process');
const fs = require('fs')
let tareas = JSON.parse(fs.readFileSync('./tareas.json','utf-8'))

let titulo = process.argv[2];

let listar = (titulo) => {
    switch (true){
    case titulo=='listar':
    console.log('---------------');
    console.log('LISTA DE TAREAS');
    console.log('---------------');
    console.log('               ');
    for (let i = 0; i < tareas.length; i++) {
        
        console.log(i+1 + '-' + tareas[i].titulo+' '+'='+' '+ tareas[i].estado);
    }
    break;
    case titulo !== undefined :
        console.log('No entiendo qué quieres hacer')
break;
default: 
console.log('Atención- Tienes que pasar una acción') 
}
}
listar(titulo)
