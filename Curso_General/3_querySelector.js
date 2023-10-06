/* ****************************** Ejemplo de .querySelector() (css) ************************ */

// Nos permite seleccionar el primer elemento que cumpla con la condición
const aceituna = document.querySelector("#aceitunas");
console.log(aceituna); // retorna un objeto y podriamos acceder a sus propiedades

const aceituna2 = document.querySelector(".topping");
console.log(aceituna2); // retorna el mismo objeto de la consulta anterior y podriamos acceder a sus propiedades

const aceituna3 = document.querySelector(".topping.fondo-naranja");
console.log(typeof aceituna3); // Retorna elemnto de acuerdo a nuestra solicitud

const aceituna4 = document.querySelector("ul li.fondo-naranja");
console.log(aceituna4); // Retorna elemnto de acuerdo a nuestra solicitud

// Buscamos un elemento con varias condiciones pero que no cumpla con alguna
const aceituna5 = document.querySelector("ul li:not(.fondo-marron)");
console.log(aceituna5); // Retorna elemnto de acuerdo a nuestra solicitud
