const endpointApi = new URL('https://dattebayo-api.onrender.com/characters')
export default endpointApi

let obtenerPersonajes = async () => {
    const direccion = 'https://dattebayo-api.onrender.com/characters'
    const opciones = {
        method: "GET",
    }
    const respuesta = await fetch(direccion, opciones)
    return respuesta.json()
}

let resultado = await fetch(endpointApi)
let personajesData = await resultado.json()

const [ , , , , pers5, pers6, pers7, pers8 ] = personajesData.characters

function renderCard(personaje, id, jutsuIndex = 0, clanFijo = null) {
    const titulo = document.getElementById(`cardtitle${id}`)
    const imagen = document.getElementById(`cardimage${id}`)
    const datos = document.getElementById(`cardhead${id}`)
    const tecnica = document.getElementById(`carddescription${id}`)

    titulo.innerHTML = personaje.name
    imagen.src = personaje.images[0]
    datos.innerHTML = `Clan: ${clanFijo || personaje.personal.clan } Aldea: ${personaje.personal.affiliation[0] }`
    tecnica.innerHTML = `Habilidad: ${personaje.jutsu[jutsuIndex] }`
}

renderCard(pers5, 1, 3, "No clan")
renderCard(pers6, 2, 2)
renderCard(pers7, 3, 1)
renderCard(pers8, 4, 10)
