/* Cargar archivos usando AJAX (Forma Nueva) */

// Evento 'click' sobre el elemento para cargar datos
document .getElementById( 'cargar' ) .addEventListener( 'click', cargarDatos );

//
function cargarDatos() {
    // Crea instancia del objeto 'XMLHttpRequest' que tiene todos los metodos para usar AJAX
    const xhr = new XMLHttpRequest();       

    // Abre la conexión
    xhr .open( 
        'GET',          // Método: GET, POST, PUT, DELETE ... etc
        'datos.txt',    // Path: Al archivo o al path de la API
        true            // [true/false] Si los datos son Asíncronos
    );

    /* Status: 
     * 200:Correcto 
     * 403:Prohibido, 
     * 404:No Encontrado, 
     * entre muchos otros
     */
    // Onload: Una ves carga la conexión
    xhr .onload = function() {

        console .group( 'Cambio de estado' );
            console .log( `Estado ${ this .readyState }` );
        console .groupEnd();

        // Valida si 'Status' es: 200
        if( this .status === 200 ) {    // Si el estado es: Correcto
            console .log( this .responseText );
            document .getElementById( 'listado' ) .innerHTML = `<h1>${ this .responseText }</h1>`;
        }
    }   

    // Enviar el Request (Petición)
    xhr .send();

}