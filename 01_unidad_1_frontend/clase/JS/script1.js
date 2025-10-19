/*
  ================================================
  Archivo: script1.js
  Simulación de primera clase de JavaScript (JS)
  ================================================
*/

//
// --------------------
// 1. Declaración de Variables
// --------------------
// JS tiene tres formas principales de declarar variables:
// - 'var' (antigua, evitar en código nuevo)
// - 'let' (para valores que cambiarán, la más usada para variables)
// - 'const' (para valores que NO cambiarán, la más segura por defecto)

// Variable con 'const' (Constante): El valor no puede ser reasignado.
const nombreSitio = "Mi Primera Web JS";

// Variable con 'let': El valor puede ser cambiado más tarde.
let contadorClics = 0;

// Tipos de datos básicos:
const esActivo = true; // Booleano (true/false)
let precio = 19.99;    // Número (incluye enteros y decimales)
let mensaje = "Hola Mundo"; // Cadena de Texto (String)

// console.log() es fundamental para depurar (verificar valores en la consola del navegador).
console.log("El nombre del sitio es:", nombreSitio);
console.log("El contador inicial es:", contadorClics);


//
// --------------------
// 2. Funciones (Bloques de Código Reutilizables)
// --------------------

// Declaración de Función Clásica:
function saludar(nombre) {
  // Las funciones pueden tomar parámetros (ej: 'nombre').
  const saludoCompleto = `¡Hola, ${nombre}! Bienvenido a ${nombreSitio}.`;
  return saludoCompleto; // Devuelve un valor al código que la llamó.
}

// Llamar a la función y guardar el resultado.
const saludoParaUsuario = saludar("Alex");
console.log(saludoParaUsuario);

// Función de Flecha (Arrow Function): Forma moderna y concisa de declarar funciones.
const sumar = (a, b) => {
  return a + b;
};

const resultadoSuma = sumar(5, 3);
console.log("El resultado de la suma es:", resultadoSuma);


//
// --------------------
// 3. Manipulación del DOM (Document Object Model)
// --------------------
// El DOM es la representación de tu página HTML como objetos de JS.
// Es la forma en que JS interactúa con el HTML y el CSS.

// Seleccionar un elemento del HTML por su ID.
// Document.querySelector() es el método moderno y versátil.
const titulo = document.querySelector('#titulo-principal');
const boton = document.querySelector('.btn-contador');

// A. Manipular Contenido: Cambiar el texto de un elemento.
if (titulo) { // Siempre verifica que el elemento exista antes de manipularlo.
  titulo.textContent = '¡JS Manipulando el Título!';
  // Otra opción es .innerHTML (que permite inyectar etiquetas HTML).
}

// B. Manipular Clases (CSS): Cambiar la apariencia.
if (boton) {
  // Añadir una clase CSS al elemento.
  boton.classList.add('btn-activo');
  
  // Quitar una clase CSS.
  // boton.classList.remove('btn-inactivo'); 
}


//
// --------------------
// 4. Manejo de Eventos (Hacer la Web Interactiva)
// --------------------
// Escuchar cuando ocurre algo (ej: un clic) y ejecutar una función.

if (boton) {
  // Añadir un 'EventListener' al botón para el evento 'click'.
  boton.addEventListener('click', function() {
    // 1. Lógica: Incrementar la variable.
    contadorClics++; // Operador de incremento (++), equivalente a contadorClics = contadorClics + 1;
    
    // 2. Efecto en la interfaz (DOM): Actualizar el texto del botón.
    boton.textContent = `Clics: ${contadorClics}`;
    
    // 3. Depuración:
    console.log("¡Botón Clickeado! Nuevo contador:", contadorClics);
    
    // 4. Condicional (if): Ejecutar código solo si se cumple una condición.
    if (contadorClics >= 10) {
      console.log("¡Llegaste a 10 clics!");
      boton.style.backgroundColor = 'red'; // Manipulación directa de estilos CSS (menos recomendado que usar clases).
    }
  });
}
