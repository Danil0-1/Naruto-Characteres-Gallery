const direccionPersonajes = new URL('https://dattebayo-api.onrender.com/characters')

export default direccionPersonajes;

let obtenerTodos = async () => {
    const ruta = 'https://dattebayo-api.onrender.com/characters'
    const opciones = {
        method: "GET",
    }
    const respuesta = await fetch(ruta, opciones)
    return respuesta.json()
}

let resultado = await fetch("https://dattebayo-api.onrender.com/characters")
let datosApi = await resultado.json()

// Asignación de personajes
const [pers1, pers2, pers3, pers4, pers5, pers6, pers7, pers8, pers9, pers10, pers11, pers12, pers13, pers14, pers15, pers16, pers17, pers18, pers19, pers20] = datosApi.characters

let tituloM = document.getElementById("cardtitle1")
let imagenM = document.getElementById("cardimage1")
let clanM = document.getElementById("cardhead1")
let habilidadM = document.getElementById("carddescription1")

imagenM.src = pers13.images[0]
tituloM.innerHTML = pers13.name
clanM.innerHTML = `Clan: No clan Aldea: ${pers13.personal.affiliation[0]}`
habilidadM.innerHTML = `Habilidad: ${pers13.jutsu[5]}`

let tituloN = document.getElementById("cardtitle2")
let imagenN = document.getElementById("cardimage2")
let clanN = document.getElementById("cardhead2")
let habilidadN = document.getElementById("carddescription2")

imagenN.src = pers14.images[0]
tituloN.innerHTML = pers14.name
clanN.innerHTML = `Clan: No clan Aldea: ${pers14.personal.affiliation[0]}`
habilidadN.innerHTML = `Habilidad: ${pers14.jutsu[1]}`

let tituloO = document.getElementById("cardtitle3")
let imagenO = document.getElementById("cardimage3")
let clanO = document.getElementById("cardhead3")
let habilidadO = document.getElementById("carddescription3")

imagenO.src = pers15.images[0]
tituloO.innerHTML = pers15.name
clanO.innerHTML = `Clan: ${pers15.personal.clan} Aldea: ${pers15.personal.affiliation[0]}`
habilidadO.innerHTML = `Habilidad: ${pers15.jutsu[1]}`

let tituloP = document.getElementById("cardtitle4")
let imagenP = document.getElementById("cardimage4")
let clanP = document.getElementById("cardhead4")
let habilidadP = document.getElementById("carddescription4")

imagenP.src = pers16.images[0]
tituloP.innerHTML = pers16.name
clanP.innerHTML = `Clan: ${pers16.personal.clan} Aldea: ${pers16.personal.affiliation[0]}`
habilidadP.innerHTML = `Habilidad: ${pers16.jutsu[1]}`