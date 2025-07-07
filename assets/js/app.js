const baseEndpoint = 'https://api.github.com';
// Uso de backticks en vez de comillas simples
const usersEndpoint = `${baseEndpoint}/users`;
// Arreglo en el uso de . para seleccionar la clase en vez de un #
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Cambio a  funcion asincrona para el uso de await
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Variable agregada para recibir la respuesta del fetch y convertirla en string  
  const data = await response.json();
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Agregado ? para asociarlo correctamente con la variable declarada
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);