function d1(){
  let num = window.prompt('Digite um núme inteiro qualquer')
  let n = Number.parseInt(num)
  window.alert(`Antes de ${n}, temos o número ${--n} 
Depois de ${++n}, temos o número ${++n} ` 
  )
}