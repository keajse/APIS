const llave1 = "grant_type = client_credentials";
const llave2 = "client_id = 26674ee6f1f544f99409f405f8a76e9a";
const llave3 = "client_secret = a92415507be3480bbbfc8bd0d3567c1b";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
    body: llave1 + '&' + llave2 + '&' + llave3
}

const urlPOST = "https://accounts.spotify.com/api/token";

fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => generarToken(datos));


function generarToken(datos) {

    let token = datos.access_token;
    token = "Bearer " + token;
    console.log(token);
}


/*const urlGet = "https://api.spotify.com/v1/artists/3qgYlqMg0g8uiCxwwaI4W8/top-tracks?market=US";

const parametrosGET = {
    method: "GET",
    headers: { "Authorization": token },
}

fetch(urlGET, parametrosGET)
    .then(respuesta => respuesta.json())
    .then(datos => depurarDatos(datos));

function depurarDatos(datos) {

    //En 3 variables JS almacenamos los recursos que llegan de la API
    let audio1 = (datos.track[0].preview_url);
    let titulo1 = (datos.track[0].name);
    let imagen1 = (datos.track[0].album.images[0].url);

    //Referenciamos etiquetas HTML usando DOM
    let audio1DOM = document.getElementById("audio1");
    let titulo1DOM = document.getElementById("titulo1");
    let imagen1DOM = document.getElementById("imagen1");

    //creo la referencia y modifico contenido de las etiquetas

    audio1DOM.src = audio1;
    titulo1DOM.textContent = titulo1;
    imagen1DOM.src = imagen1;


}*/