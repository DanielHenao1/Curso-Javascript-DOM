const primerTopping = document.querySelector(".topping");
console.log(primerTopping); // para verificar se está acessando o elemento corretamente

// Con esto eliminamos una clase
primerTopping.classList.remove("topping");
console.log(primerTopping.classList);