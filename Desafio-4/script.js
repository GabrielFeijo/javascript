function comp(){
  let nome = window.prompt('Que produto você está comprando!')
  let valor = window.prompt(`Quanto custa ${nome} que você está comprando?`)
  let num = window.prompt(`Qual o valor que voê deu para pagar ${nome}?`)

  let all = Number(num)-Number(valor)
  
  let n = Number(valor).toLocaleString('pt-Br',{style:'currency', currency:'BRL'})
  let v = Number(num).toLocaleString('pt-Br',{style:'currency', currency:'BRL'})
  let a = all.toLocaleString('pt-Br',{style:'currency', currency:'BRL'})

  window.alert(`Você comprou ${nome} que custou ${n}.
Deu ${v} em dinheiro e vai receber ${a} de troco.
Volte Sempre!` )
}