const llave1 = "grant_type=client_credentials";
const llave2 = "client_id=26674ee6f1f544f99409f405f8a76e9a";
const llave3 = "client_secret=a92415507be3480bbbfc8bd0d3567c1b";

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

    const urlGET = "https://api.spotify.com/v1/artists/3qgYlqMg0g8uiCxwwaI4W8/top-tracks?country=US";

    const parametrosGET = {
        method: "GET",
        headers: { "Authorization": token },
    }

    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarDatos(datos));

}

function depurarDatos(datos) {

    //En 3 variables JS almacenamos los recursos que llegan desde el API
    let audio1 = (datos.tracks[0].preview_url); //audio
    let titulo1 = (datos.tracks[0].name); //titulo
    let imagen1 = (datos.tracks[0].album.images[0].url); //imagen

    //Referenciamos etiquetas HTML usando el DOM
    let audio1DOM = document.getElementById("audio1");
    let titulo1DOM = document.getElementById("titulo1");
    let imagen1DOM = document.getElementById("imagen1");

    //Creo la referencia y modifico el contenido de las etiquetas
    audio1DOM.src = audio1;
    titulo1DOM.textContent = titulo1;
    imagen1DOM.src = imagen1;


    
    //En 3 variables JS almacenamos los recursos que llegan desde el API
    
    let audio2 = (datos.tracks[1].preview_url); 
    let titulo2 = (datos.tracks[1].name); 
    let imagen2 = (datos.tracks[1].album.images[0].url); 

       
    let audio2DOM = document.getElementById("audio2");
    let titulo2DOM = document.getElementById("titulo2");
    let imagen2DOM = document.getElementById("imagen2");

    let audio3 = (datos.tracks[4].preview_url); 
    let titulo3 = (datos.tracks[4].name); 
    let imagen3 = (datos.tracks[4].album.images[0].url); 


     //Referenciamos etiquetas HTML usando el DOM

    let audio3DOM = document.getElementById("audio3");
    let titulo3DOM = document.getElementById("titulo3");
    let imagen3DOM = document.getElementById("imagen3");

    //Creo la referencia y modifico el contenido de las etiquetas
    

    audio2DOM.src = audio2;
    titulo2DOM.textContent = titulo2;
    imagen2DOM.src = imagen2;

    audio3DOM.src = audio3;
    titulo3DOM.textContent = titulo3;
    imagen3DOM.src = imagen3;





}