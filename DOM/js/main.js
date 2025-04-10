const apiNaruto = new URL('https://dattebayo-api.onrender.com/characters')
export default apiNaruto

let obtenerPersonajes = async () => {
  const endpoint = 'https://dattebayo-api.onrender.com/characters'
  const opciones = {
    method: "GET",
  }
  const respuesta = await fetch(endpoint, opciones)
  return respuesta.json()
}

let respuestaApi = await fetch(apiNaruto)
let datosNaruto = await respuestaApi.json()
const [naruto, sasuke, sakura, kakashi, ...resto] = datosNaruto.characters

function renderCard(personaje, id) {
  const titulo = document.getElementById(`cardtitle${id}`)
  const imagen = document.getElementById(`cardimage${id}`)
  const detalles = document.getElementById(`cardhead${id}`)
  const tecnica = document.getElementById(`carddescription${id}`)

  titulo.innerHTML = personaje.name
  imagen.src = personaje.images[0]
  detalles.innerHTML = `Clan: ${personaje.personal.clan} Aldea: ${personaje.personal.affiliation[0]}`
  tecnica.innerHTML = `Habilidad: ${personaje.jutsu[2] }`
}

renderCard(naruto, 1)
renderCard(sasuke, 2)
renderCard(sakura, 3)
renderCard(kakashi, 4)