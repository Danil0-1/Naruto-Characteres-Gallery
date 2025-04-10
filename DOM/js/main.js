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