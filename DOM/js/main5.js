const direccionApi = new URL('https://dattebayo-api.onrender.com/characters');
export default direccionApi

let traerTodos = async () => {
    const respuesta = await fetch(direccionApi.href, { method: "GET" })
    return await respuesta.json();
}

function renderizarTarjeta(personaje, index, idTarjeta) {
    const titulo = document.getElementById(`cardtitle${idTarjeta}`)
    const imagen = document.getElementById(`cardimage${idTarjeta}`)
    const cabecera = document.getElementById(`cardhead${idTarjeta}`)
    const descripcion = document.getElementById(`carddescription${idTarjeta}`)

    titulo.innerHTML = personaje.name;
    imagen.src = personaje.images[0];
    cabecera.innerHTML = `Clan: ${personaje.personal.clan } Aldea: ${personaje.personal.affiliation[0] }`;
    descripcion.innerHTML = `Habilidad: ${personaje.jutsu[1] }`;
}

let datosCompletos = await traerTodos()
let personajes = datosCompletos.characters

let indices = [16, 17, 18, 19]

indices.forEach((indice, i) => {
    renderizarTarjeta(personajes[indice], indice, i + 1);
})