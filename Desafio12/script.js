function preco(){
  let res = document.getElementById('res')
  let an = window.prompt('Qual era o preço anterior do produto?')
  let at = window.prompt('Qual é o preço atual do produto?')

let aa = Number(an).toLocaleString('pt-BR' ,{style: 'currency', currency:'BRL'}).replace(".",",")
let bb = Number(at).toLocaleString('pt-BR' ,{style: 'currency', currency:'BRL'}).replace(".",",")

res.innerHTML = ''
res.innerHTML += `<h2>Analisando os valores informados</h2>`
res.innerHTML += `<p>O produto custava ${aa} e agora custa ${bb}.</p>`

let ann = Number(an)
let att = Number(at)

if (ann == att){
   res.innerHTML += `<p>Os preços não mudaram</p>`
}else if (ann < att){
  res.innerHTML += `<p>Hoje o produto está mais caro.</p>`

  let va = Number(at)-Number(an)
  let vv = Number(va).toLocaleString('pt-BR' ,{style: 'currency', currency:'BRL'}).replace(".",",")
  res.innerHTML += `<p>O preço subiu ${vv} em relação ao anterior.</p>`
  
  let porc = att-ann
  let pp = porc/ann*100
  res.innerHTML += `<p>Uma variação de ${pp.toFixed(1).replace(".",",")}% para cima.</p>`


}else{
  res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
    let ca = Number(an)-Number(at)
  let cc = Number(ca).toLocaleString('pt-BR' ,{style: 'currency', currency:'BRL'}).replace(".",",")
  res.innerHTML += `<p>O preço caiu ${cc} em relação ao anterior.</p>`
 
  let pc = ann-att
  let gg = pc/att*100
  res.innerHTML += `<p>Uma variação de ${gg.toFixed(2).replace(".",",")}% para baixo.</p>`
}


}