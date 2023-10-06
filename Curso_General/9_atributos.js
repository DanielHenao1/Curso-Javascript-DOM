// Veamos como modificar los atributos de un elemento

const enlace = document.getElementsByTagName("a");
console.log(enlace); // para verificar se está acessando o elemento corretamente

// Para acceder a un atributo:
console.log(enlace[0].getAttribute("href"));

// Para modificarlo o actualizarlo
console.log(enlace[0].setAttribute("href", "https://dhtecnologia.com/"));

// Para eliminar un atributo
console.log(enlace[0].removeAttribute("href"));
