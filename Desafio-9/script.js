function rr(){
  let res = document.getElementById('res')
  let nome = window.prompt('Qual o nome do funcionário?')
  let sal = window.prompt(`Qual é o salário de ${nome}?`)
  let porce = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)

  let ss = Number(sal).toLocaleString('pt-Br',{style: 'currency', currency: 'BRL'})
  let tota = Number(sal)*Number(porce)/100
   let tt = tota.toLocaleString('pt-Br',{style: 'currency', currency: 'BRL'})

   let fin = Number(sal) + Number(tota)
   let ff = fin.toLocaleString('pt-Br',{style: 'currency', currency: 'BRL'})

  res.innerHTML = ''
  res.innerHTML += `<h2>${nome} recebeu um aumento salarial!</h2>`
  res.innerHTML += `<p>O salário atual era ${ss}</p>`
  res.innerHTML += `<p>Com o aumento de ${porce}%, o salário vai aumentar ${tt} no próximo mês.</p>`
  res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${ff}.</p>`

}