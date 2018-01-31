/* Consumiento una REST API con AJAX */ 

/* Evento 'click' para el elemento del botón 'cargar post'  */
const cargarPost = document .querySelector( '#cargar' ) .addEventListener( 'click', cargarAPI );

// Función que carga el API
function cargarAPI() {
    const xhr = new XMLHttpRequest();       // Instancia para hacer uso de AJAX

    // Crear la conexión
    xhr .open(
        'GET',                                          // Método: GET, POST, PUT, PATCH, DELETE
        'https://jsonplaceholder.typicode.com/posts',   // Path del API
        true                                            // [true/false] Si es Asíncrono    
    );

    // OnLoad: Una ves cargada la Conexión (Carga Lee los Datos)
    xhr .onload = function() {
        /* Valida que el status sea 200 (Correcto) */
        if( this .status === 200 ) {
            const respuesta = JSON .parse( this .responseText );      // Convierte JSON a un 'Array' de Objetos en JavaScript
            let htmlTemplate = '';                      // Crea plantilla vacía 

            console .log( respuesta .length );

            // Recorre el 'Array' de objetos
            respuesta .forEach( function( post ) {
                // Agrega datos a la plantilla 
                htmlTemplate += `
                    <h3>${ post .title }</h3>
                    <p>${ post .body }</p>
                `;                
            });

            // Agrega la plantilla vacía al elemento respectivo en el DOM
            document .getElementById( 'listado' ) .innerHTML = htmlTemplate;
        }
    }

    // Realizar el Request (Envio de la conexión)
    xhr .send();
}