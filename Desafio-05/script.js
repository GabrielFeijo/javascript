function dis(){
  let res = document.getElementById('res')
  let met = window.prompt('Digite uma distância em metros (m)')
 

 let km = Number(met)/1000
 let hm = Number(met)/100
 let dam = Number(met)/10
 let cm = Number(met)*100
 let mm = Number(met)*1000
res.innerHTML = ''
res.innerHTML += `<h2>A distância de ${met.replace(".",",")} metros, corresponde a...</h2>`
res.innerHTML += `<p>${km.toFixed(3).replace(".",",")} quilômetros (Km)</p>`
res.innerHTML += `<p>${hm.toFixed(3).replace(".",",")} hectômetros (Hm)</p>`
res.innerHTML += `<p>${dam.toFixed(3).replace(".",",")} decâmetros (Dam)</p>`
res.innerHTML += `<p>${cm} centímetros (Cm)</p>`
res.innerHTML += `<p>${mm} milímetros (mm)</p>`
}