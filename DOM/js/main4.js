const direccionPersonajes = new URL('https://dattebayo-api.onrender.com/characters');
export default direccionPersonajes;

let obtenerTodos = async () => {
    const ruta = direccionPersonajes.href;
    const opciones = { method: "GET" };
    const respuesta = await fetch(ruta, opciones);
    return respuesta.json();
};

let resultado = await fetch(direccionPersonajes);
let datosApi = await resultado.json();
let personajes = datosApi.characters;

const tarjetas = [
    { id: 1, index: 12, jutsu: 5, clan: "No clan" },
    { id: 2, index: 13, jutsu: 1, clan: "No clan" },
    { id: 3, index: 14, jutsu: 1 },
    { id: 4, index: 15, jutsu: 1 }
];

function mostrarTarjeta({ id, index, jutsu, clan }) {
    const personaje = personajes[index];

    const titulo = document.getElementById(`cardtitle${id}`);
    const imagen = document.getElementById(`cardimage${id}`);
    const cabecera = document.getElementById(`cardhead${id}`);
    const descripcion = document.getElementById(`carddescription${id}`);

    titulo.innerHTML = personaje.name;
    imagen.src = personaje.images[0];
    cabecera.innerHTML = `Clan: ${clan || personaje.personal.clan } Aldea: ${personaje.personal.affiliation[0] }`;
    descripcion.innerHTML = `Habilidad: ${personaje.jutsu[jutsu] }`;
}

tarjetas.forEach(mostrarTarjeta)