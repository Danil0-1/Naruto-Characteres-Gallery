const apiURL = new URL('https://dattebayo-api.onrender.com/characters')

export default apiURL;

let traerTodo = async () => {
    const endpoint = 'https://dattebayo-api.onrender.com/characters'
    const opcionesFetch = {
        method: "GET",
    }
    const respuesta = await fetch(endpoint, opcionesFetch)
    return respuesta.json()
}

let peticion = await fetch("https://dattebayo-api.onrender.com/characters")
let respuestaJson = await peticion.json()

// Renombrar personajes
const [shikamaru, hinata, kiba, neji, ...otrosPersonajes] = respuestaJson.characters

// CARD 1
let tituloPrincipal = document.getElementById("cardtitle1")
let imagenPrincipal = document.getElementById("cardimage1")
let detallesPrincipales = document.getElementById("cardhead1")
let jutsuPrincipal = document.getElementById("carddescription1")

imagenPrincipal.src = shikamaru.images[0]
tituloPrincipal.innerHTML = shikamaru.name
detallesPrincipales.innerHTML = `Clan: No clan Aldea: ${shikamaru.personal.affiliation[0]}`
jutsuPrincipal.innerHTML = `Habilidad: ${shikamaru.jutsu[5]}`

// CARD 2
let tituloSecundario = document.getElementById("cardtitle2")
let imagenSecundaria = document.getElementById("cardimage2")
let detallesSecundarios = document.getElementById("cardhead2")
let jutsuSecundario = document.getElementById("carddescription2")

imagenSecundaria.src = hinata.images[0]
tituloSecundario.innerHTML = hinata.name
detallesSecundarios.innerHTML = `Clan: ${hinata.personal.clan} Aldea: ${hinata.personal.affiliation[0]}`
jutsuSecundario.innerHTML = `Habilidad: ${hinata.jutsu[1]}`

// CARD 3
let tituloTercero = document.getElementById("cardtitle3")
let imagenTercera = document.getElementById("cardimage3")
let detallesTerceros = document.getElementById("cardhead3")
let jutsuTercero = document.getElementById("carddescription3")

imagenTercera.src = kiba.images[0]
tituloTercero.innerHTML = kiba.name
detallesTerceros.innerHTML = `Clan: ${kiba.personal.clan} Aldea: ${kiba.personal.affiliation[0]}`
jutsuTercero.innerHTML = `Habilidad: ${kiba.jutsu[1]}`

// CARD 4
let tituloCuarta = document.getElementById("cardtitle4")
let imagenCuarta = document.getElementById("cardimage4")
let detallesCuartos = document.getElementById("cardhead4")
let jutsuCuarto = document.getElementById("carddescription4")

imagenCuarta.src = neji.images[0]
tituloCuarta.innerHTML = neji.name
detallesCuartos.innerHTML = `Clan: ${neji.personal.clan} Aldea: ${neji.personal.affiliation[0]}`
jutsuCuarto.innerHTML = `Habilidad: ${neji.jutsu[1]}`
