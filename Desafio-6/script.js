function clic(){
  let res = document.getElementById('res')
 let r = window.prompt('Digite uma temperatura em °C (Celsius)')
 let k = Number(r) + 273.15
 let f = Number(r)*9/5
 let fa = f+32
 res.innerHTML = ''
 res.innerHTML += `<h2>A temperatura de ${r.replace(".",",")}°C, corresponde a... </h2>`
 res.innerHTML += `<p>${k.toFixed(2).replace(".",",")}°K (Kelvin)</p>`
 res.innerHTML += `<p>${fa.toFixed(2).replace(".",",")}°F (Fahrenheit)</p>`
}