const direccionApi = new URL('https://dattebayo-api.onrender.com/characters')

export default direccionApi;

let traerTodos = async () => {
    const enlace = 'https://dattebayo-api.onrender.com/characters'
    const opciones = {
        method: "GET",
    }
    const respuesta = await fetch(enlace, opciones)
    return respuesta.json()
}

let resultadoPeticion = await fetch("https://dattebayo-api.onrender.com/characters")
let datosCompletos = await resultadoPeticion.json()

const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = datosCompletos.characters

let tituloQ = document.getElementById("cardtitle1")
let imagenQ = document.getElementById("cardimage1")
let clanQ = document.getElementById("cardhead1")
let habilidadQ = document.getElementById("carddescription1")

imagenQ.src = q.images[0]
tituloQ.innerHTML = q.name
clanQ.innerHTML = `Clan: ${q.personal.clan} Aldea: ${q.personal.affiliation[0]}`
habilidadQ.innerHTML = `Habilidad: ${q.jutsu[5]}`

let tituloR = document.getElementById("cardtitle2")
let imagenR = document.getElementById("cardimage2")
let clanR = document.getElementById("cardhead2")
let habilidadR = document.getElementById("carddescription2")

imagenR.src = r.images[0]
tituloR.innerHTML = r.name
clanR.innerHTML = `Clan: ${r.personal.clan} Aldea: ${r.personal.affiliation[0]}`
habilidadR.innerHTML = `Habilidad: ${r.jutsu[1]}`

let tituloS = document.getElementById("cardtitle3")
let imagenS = document.getElementById("cardimage3")
let clanS = document.getElementById("cardhead3")
let habilidadS = document.getElementById("carddescription3")

imagenS.src = s.images[0]
tituloS.innerHTML = s.name
clanS.innerHTML = `Clan: ${s.personal.clan} Aldea: ${s.personal.affiliation[0]}`
habilidadS.innerHTML = `Habilidad: ${s.jutsu[1]}`

let tituloT = document.getElementById("cardtitle4")
let imagenT = document.getElementById("cardimage4")
let clanT = document.getElementById("cardhead4")
let habilidadT = document.getElementById("carddescription4")

imagenT.src = t.images[0]
tituloT.innerHTML = t.name
clanT.innerHTML = `Clan: No clan Aldea: ${t.personal.affiliation[0]}`
habilidadT.innerHTML = `Habilidad: ${t.jutsu[1]}`
