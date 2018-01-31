/* Cargar archivos usando AJAX y JSON */
 
const btnEmpleado = document .getElementById( 'boton1' ),       // Obtiene el elemento con la clase 'boton1'
      btnEmpleados = document .getElementById( 'boton2' );      // Obtiene el elemento con la clase 'boton2'

// Evento 'click' para el elemento que representa botón 'EMPLEADO' en el DOM
btnEmpleado .addEventListener( 'click', function() {
    const xhr = new XMLHttpRequest();

    // Abre la conexión
    xhr .open(
        'GET',              // Método: GET, POST, PUT, DELETE...
        'empleado.json',    // Path: del archivo JSON
        true                // [true/false] Si es asíncrono
    );

    // OnLoad: Una ves establecida la conexión
    xhr .onload = function() {
        if( this .status === 200 ) {
            const persona = JSON .parse( this .responseText ),      // Convierte JSON a Objeto JavaScript
                  // Crea un Template para los datos obtenidos
                  htmlTemplate = ` 
                    <ul>
                        <li><b>ID:</b> ${ persona .id }</li>
                        <li><b>Nombre:</b> ${ persona .nombre }</li>
                        <li><b>Empresa:</b> ${ persona .empresa }</li>
                        <li><b>Actividad:</b> ${ persona .trabajo }</li>
                    </ul>
                  `;      

                  // Agrega el Template con los datos en el DOM
                  document .getElementById( 'empleado' ) .innerHTML = htmlTemplate;     // innerHTML / appendChild()

            console .log( this .responseText );
            
        }
    }

    // Envia el Request
    xhr .send();
});

// Evento 'click' para el elemento que representa botón 'EMPLEADO' en el DOM
btnEmpleados .addEventListener( 'click', function() {
    const xhr = new XMLHttpRequest();

    // Abre la conexión
    xhr .open(
        'GET',               // Método: GET, POST, PUT, DELETE...
        'empleados.json',    // Path: del archivo JSON
        true                 // [true/false] Si es asíncrono
    );

    // OnLoad: Una ves establecida la conexión
    xhr .onload = function() {
        if( this .status === 200 ) {
            const personal = JSON .parse( this .responseText );      // Convierte JSON a 'Array' de Objetos JavaScript
                  
            htmlTemplate = '';      // Crea un Template vacío
            // Recorre cada uno de los objetos que están en el 'Array'
            personal .forEach( function( persona ) {
                // Agrega estructura al Template
                htmlTemplate += ` 
                <ul>
                    <li><b>ID:</b> ${ persona .id }</li>
                    <li><b>Nombre:</b> ${ persona .nombre }</li>
                    <li><b>Empresa:</b> ${ persona .empresa }</li>
                    <li><b>Actividad:</b> ${ persona .trabajo }</li>
                </ul>
                `;

                // Agrega el Template con los datos en el DOM
                document .getElementById( 'empleados' ) .innerHTML = htmlTemplate;     // innerHTML / appendChild()

            });

            console .log( personal );
            
        }
    }

    // Envia el Request
    xhr .send();
});