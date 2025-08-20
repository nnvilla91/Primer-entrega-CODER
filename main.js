function agregarCalificaciones() {
    let calificaciones = [];
    let calificacion;

    do {
        calificacion = prompt("Ingrese la calificación del estudiante (escriba 'salir' para terminar): ");
        
        // Asegúrate de que la calificación sea un número válido
        if (calificacion !== 'salir') {
            // Verifica si la entrada es un número
            if (!isNaN(calificacion) && calificacion !== '') {
                calificaciones.push(Number(calificacion)); // Convertimos la calificación a número y la agregamos al array
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    } while (calificacion !== 'salir');

    console.log("Las calificaciones ingresadas son:", calificaciones);
    let promedio = calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;
    console.log("El promedio de las calificaciones es:", promedio.toFixed(2));
}

agregarCalificaciones();
