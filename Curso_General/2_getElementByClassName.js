/* ****************************** Ejemplo de getElementByClassName() ************************ */

const toppings = document.getElementsByClassName("topping");
console.log(toppings[1]); // retorna un array y podriamos acceder a sus propiedades console.log(toppings[0])

const fondoMarron = document.getElementsByClassName("fondo-marron");
console.log(fondoMarron[0].id); // Para obtener el id de un elemento console.log(toppings[0].id);
