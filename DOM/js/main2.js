const endpointApi = new URL('https://dattebayo-api.onrender.com/characters')

export default endpointApi;

let obtenerPersonajes = async () => {
    const direccion = 'https://dattebayo-api.onrender.com/characters'
    const opciones = {
        method: "GET",
    }
    const respuesta = await fetch(direccion, opciones)
    return respuesta.json()
}

let resultado = await fetch("https://dattebayo-api.onrender.com/characters")
let personajesData = await resultado.json()

const [pers1, pers2, pers3, pers4, pers5, pers6, pers7, pers8, pers9, pers10, pers11, pers12, pers13, pers14, pers15, pers16, pers17, pers18, pers19, pers20] = personajesData.characters

let tituloUno = document.getElementById("cardtitle1")
let imagenUno = document.getElementById("cardimage1")
let datosUno = document.getElementById("cardhead1")
let jutsuUno = document.getElementById("carddescription1")

imagenUno.src = pers5.images[0]
tituloUno.innerHTML = pers5.name
datosUno.innerHTML = `Clan: No clan Aldea: ${pers5.personal.affiliation[0]}`
jutsuUno.innerHTML = `Habilidad: ${pers5.jutsu[5]}`

let tituloDos = document.getElementById("cardtitle2")
let imagenDos = document.getElementById("cardimage2")
let datosDos = document.getElementById("cardhead2")
let jutsuDos = document.getElementById("carddescription2")

imagenDos.src = pers6.images[0]
tituloDos.innerHTML = pers6.name
datosDos.innerHTML = `Clan: ${pers6.personal.clan} Aldea: ${pers6.personal.affiliation[0]}`
jutsuDos.innerHTML = `Habilidad: ${pers6.jutsu[1]}`

let tituloTres = document.getElementById("cardtitle3")
let imagenTres = document.getElementById("cardimage3")
let datosTres = document.getElementById("cardhead3")
let jutsuTres = document.getElementById("carddescription3")

imagenTres.src = pers7.images[0]
tituloTres.innerHTML = pers7.name
datosTres.innerHTML = `Clan: ${pers7.personal.clan} Aldea: ${pers7.personal.affiliation[0]}`
jutsuTres.innerHTML = `Habilidad: ${pers7.jutsu[1]}`

let tituloCuatro = document.getElementById("cardtitle4")
let imagenCuatro = document.getElementById("cardimage4")
let datosCuatro = document.getElementById("cardhead4")
let jutsuCuatro = document.getElementById("carddescription4")

imagenCuatro.src = pers8.images[0]
tituloCuatro.innerHTML = pers8.name
datosCuatro.innerHTML = `Clan: ${pers8.personal.clan} Aldea: ${pers8.personal.affiliation[0]}`
jutsuCuatro.innerHTML = `Habilidad: ${pers8.jutsu[1]}`
