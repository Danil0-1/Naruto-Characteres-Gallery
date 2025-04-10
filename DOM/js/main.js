const url = new URL('https://dattebayo-api.onrender.com/characters')

export default url

let getALL = async () => {
  const url = 'https://dattebayo-api.onrender.com/characters'
  const config = {
      method: "GET",
  }
  const response = await fetch(url, config)
  return response.json()
}

let info = await fetch("https://dattebayo-api.onrender.com/characters")
let data = await info.json() 
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = data.characters

let titulo1 = document.getElementById("cardtitle1")
let imagen1 = document.getElementById("cardimage1")
let clan1 = document.getElementById("cardhead1")
let habilidad1 = document.getElementById("carddescription1")

imagen1.src = a.images[0]
titulo1.innerHTML = a.name
clan1.innerHTML = (`Clan: ${a.personal.clan} Aldea: ${a.personal.affiliation[0]}`)
habilidad1.innerHTML = (`Habilidad: ${a.jutsu[52]}`)

let titulo2 = document.getElementById("cardtitle2")
let imagen2 = document.getElementById("cardimage2")
let clan2 = document.getElementById("cardhead2")
let habilidad2 = document.getElementById("carddescription2")

imagen2.src = b.images[0]
titulo2.innerHTML = b.name
clan2.innerHTML = (`Clan: ${b.personal.clan} Aldea: ${b.personal.affiliation[0]}`)
habilidad2.innerHTML = (`Habilidad: ${b.jutsu[1]}`)