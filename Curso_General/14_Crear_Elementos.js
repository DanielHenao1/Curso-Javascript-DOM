const listaDeToppings = document.getElementById("lista-toppings");

const toppingNuevo = document.createElement("li");
// console.log(toppingNuevo); // para verificar se está acessando o elemento corretamente
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText = "Pepperoni";

listaDeToppings.append(toppingNuevo);

console.log(toppingNuevo);