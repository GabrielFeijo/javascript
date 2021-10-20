function desc(){
  let res = document.getElementById('res')
  let nome = window.prompt('Qual é o produto que você está comprando?')
  let preco = window.prompt(`Qual é o preço de ${nome}? `)

  let value = Number(preco).toLocaleString('pt-Br', {style: 'currency', currency:'BRL'}).replace(".",",")
  let des = Number(preco)*10/100
  let dd =  des.toLocaleString('pt-Br', {style: 'currency', currency:'BRL'}).replace(".",",")
  let fin = preco-des
   let ff =  fin.toLocaleString('pt-Br', {style: 'currency', currency:'BRL'}).replace(".",",")

  res.innerHTML = ''
  res.innerHTML += `<h2>Calculando desconto de 10% para ${nome}.</h2>` 
  res.innerHTML += `<p>O preço original era ${value}.</p>`
  res.innerHTML += `<p>Você acaba de ganhar ${dd} de desconto (-10%).</p>`
  res.innerHTML += `<p>No fim, você vai pagar ${ff} no produto ${nome}.</p>`
}