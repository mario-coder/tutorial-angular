function saludo (nombre: string){
    console.log("Hola" + nombre.toUpperCase);
}

var wolverine = {
    nombre : "Logan"
};

saludo (wolverine.nombre);