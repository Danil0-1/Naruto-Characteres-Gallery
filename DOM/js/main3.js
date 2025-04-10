const direccionApi = new URL('https://dattebayo-api.onrender.com/characters')
export default direccionApi

let traerTodos = async () => {
    const recurso = 'https://dattebayo-api.onrender.com/characters'
    const opcionesFetch = {
        method: "GET",
    }
    const resultado = await fetch(recurso, opcionesFetch)
    return resultado.json()
}

let respuestaApi = await fetch(direccionApi)
let contenidoApi = await respuestaApi.json()
let personajes = contenidoApi.characters

const infoCards = [
    { id: 1, personajeIndex: 8, jutsuIndex: 11, clanFijo: "No clan" }, 
    { id: 2, personajeIndex: 9, jutsuIndex: 2 },                      
    { id: 3, personajeIndex: 10, jutsuIndex: 3 },                      
    { id: 4, personajeIndex: 11, jutsuIndex: 7 }                       
]

function renderCard({ id, personajeIndex, jutsuIndex = 0, clanFijo = null }) {
    const personaje = personajes[personajeIndex]

    const titulo = document.getElementById(`cardtitle${id}`)
    const imagen = document.getElementById(`cardimage${id}`)
    const cabecera = document.getElementById(`cardhead${id}`)
    const descripcion = document.getElementById(`carddescription${id}`)

    titulo.innerHTML = personaje.name
    imagen.src = personaje.images[0]
    cabecera.innerHTML = `Clan: ${clanFijo || personaje.personal.clan } Aldea: ${personaje.personal.affiliation[0] }`
    descripcion.innerHTML = `Habilidad: ${personaje.jutsu[jutsuIndex] }`
}

infoCards.forEach(renderCard)