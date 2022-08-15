
const request = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const results = await fetch(url);
        const response = await results.json();
       
        response.forEach(element => {
            if(element.id <= 20){console.log(element.title);
            }});
    } catch (error) {console.log(error)}};



const mensaje = async () => new Promise ((resolve, reject) => {
    setTimeout(() => {resolve("Información Enviada");}, 3000)
})


const mensajeRecibido = async (mensaje) => {
    const tiempoAlbum = await mensaje();
    console.log(tiempoAlbum)};



request();
mensajeRecibido(mensaje);