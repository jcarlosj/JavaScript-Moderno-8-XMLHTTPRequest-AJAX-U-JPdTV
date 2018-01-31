/* Cargar archivos usando AJAX */

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
     * 
     * Ready Status: 
     * 0 - No Inicializado
     * 1 - Conexión establecida
     * 2 - Recibido
     * 3 - Procesando
     * 4 - Respuesta lista
     */
    // onreadystatechange: Una vez carga la conexión
    xhr .onreadystatechange = function() {

        console .group( 'Cambio de estado' );
            console .log( `Estado ${ this .readyState }` );
        console .groupEnd();
        
        // Valida si 'Ready Status' es: 4 y el 'Status' es: 200
        if( this .readyState === 4 && this .status === 200 ) {  
            console .log( this .responseText );
            document .getElementById( 'listado' ) .innerHTML = `<h1>${ this .responseText }</h1>`;
        }
    }

    // Enviar el Request (Petición)
    xhr .send();

}