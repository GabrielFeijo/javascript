let dol;
let res = document.getElementById('res')
function pdp(){
 dol = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
}

function after(){
  let din = window.prompt('Quantos R$ você tem na carteira?')
  let tota = Number(din)/Number(dol)
  res.innerHTML = `Você na cotação atual tem ${tota.toFixed(2).replace(".",",")} dólares em sua carteira.`
  res.style.fontWeight = 'bold'
}