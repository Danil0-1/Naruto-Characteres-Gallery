const direccionApi = new URL('https://dattebayo-api.onrender.com/characters')

export default direccionApi;

let traerTodos = async () => {
    const recurso = 'https://dattebayo-api.onrender.com/characters'
    const opcionesFetch = {
        method: "GET",
    }
    const resultado = await fetch(recurso, opcionesFetch)
    return resultado.json()
}

let respuestaApi = await fetch("https://dattebayo-api.onrender.com/characters")
let contenidoApi = await respuestaApi.json()

const [persA, persB, persC, persD, persE, persF, persG, persH, persI, persJ, persK, persL, persM, persN, persO, persP, persQ, persR, persS, persT] = contenidoApi.characters

let tituloCard1 = document.getElementById("cardtitle1")
let imagenCard1 = document.getElementById("cardimage1")
let cabeceraCard1 = document.getElementById("cardhead1")
let descripcionCard1 = document.getElementById("carddescription1")

imagenCard1.src = persI.images[0]
tituloCard1.innerHTML = persI.name
cabeceraCard1.innerHTML = `Clan: No clan Aldea: ${persI.personal.affiliation[0]}`
descripcionCard1.innerHTML = `Habilidad: ${persI.jutsu[11]}`

let tituloCard2 = document.getElementById("cardtitle2")
let imagenCard2 = document.getElementById("cardimage2")
let cabeceraCard2 = document.getElementById("cardhead2")
let descripcionCard2 = document.getElementById("carddescription2")

imagenCard2.src = persJ.images[0]
tituloCard2.innerHTML = persJ.name
cabeceraCard2.innerHTML = `Clan: ${persJ.personal.clan} Aldea: ${persJ.personal.affiliation[0]}`
descripcionCard2.innerHTML = `Habilidad: ${persJ.jutsu[2]}`

let tituloCard3 = document.getElementById("cardtitle3")
let imagenCard3 = document.getElementById("cardimage3")
let cabeceraCard3 = document.getElementById("cardhead3")
let descripcionCard3 = document.getElementById("carddescription3")

imagenCard3.src = persK.images[0]
tituloCard3.innerHTML = persK.name
cabeceraCard3.innerHTML = `Clan: ${persK.personal.clan} Aldea: ${persK.personal.affiliation[0]}`
descripcionCard3.innerHTML = `Habilidad: ${persK.jutsu[3]}`

let tituloCard4 = document.getElementById("cardtitle4")
let imagenCard4 = document.getElementById("cardimage4")
let cabeceraCard4 = document.getElementById("cardhead4")
let descripcionCard4 = document.getElementById("carddescription4")

imagenCard4.src = persL.images[0]
tituloCard4.innerHTML = persL.name
cabeceraCard4.innerHTML = `Clan: ${persL.personal.clan} Aldea: ${persL.personal.affiliation[0]}`
descripcionCard4.innerHTML = `Habilidad: ${persL.jutsu[7]}`
