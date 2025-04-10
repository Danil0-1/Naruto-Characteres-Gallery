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

let respuestaApi = await fetch("https://dattebayo-api.onrender.com/characters")
let datosNaruto = await respuestaApi.json()
const [naruto, sasuke, sakura, kakashi, ...resto] = datosNaruto.characters

// PRIMERA CARD
let tituloDestacado = document.getElementById("cardtitle1")
let imagenDestacada = document.getElementById("cardimage1")
let detallesDestacados = document.getElementById("cardhead1")
let tecnicaDestacada = document.getElementById("carddescription1")

imagenDestacada.src = naruto.images[0]
tituloDestacado.innerHTML = naruto.name
detallesDestacados.innerHTML = `Clan: ${naruto.personal.clan} Aldea: ${naruto.personal.affiliation[0]}`
tecnicaDestacada.innerHTML = `Habilidad: ${naruto.jutsu[50]}`

// SEGUNDA CARD
let tituloSegundo = document.getElementById("cardtitle2")
let imagenSegundo = document.getElementById("cardimage2")
let detallesSegundo = document.getElementById("cardhead2")
let tecnicaSegundo = document.getElementById("carddescription2")

imagenSegundo.src = sasuke.images[0]
tituloSegundo.innerHTML = sasuke.name
detallesSegundo.innerHTML = `Clan: ${sasuke.personal.clan} Aldea: ${sasuke.personal.affiliation[0]}`
tecnicaSegundo.innerHTML = `Habilidad: ${sasuke.jutsu[2]}`

// TERCERA CARD
let tituloTercero = document.getElementById("cardtitle3")
let imagenTercero = document.getElementById("cardimage3")
let detallesTercero = document.getElementById("cardhead3")
let tecnicaTercero = document.getElementById("carddescription3")

imagenTercero.src = sakura.images[0]
tituloTercero.innerHTML = sakura.name
detallesTercero.innerHTML = `Clan: ${sakura.personal.clan} Aldea: ${sakura.personal.affiliation[0]}`
tecnicaTercero.innerHTML = `Habilidad: ${sakura.jutsu[6]}`

// CUARTA CARD
let tituloCuarto = document.getElementById("cardtitle4")
let imagenCuarto = document.getElementById("cardimage4")
let detallesCuarto = document.getElementById("cardhead4")
let tecnicaCuarto = document.getElementById("carddescription4")

imagenCuarto.src = kakashi.images[0]
tituloCuarto.innerHTML = kakashi.name
detallesCuarto.innerHTML = `Clan: ${kakashi.personal.clan} Aldea: ${kakashi.personal.affiliation[0]}`
tecnicaCuarto.innerHTML = `Habilidad: ${kakashi.jutsu[1]}`
