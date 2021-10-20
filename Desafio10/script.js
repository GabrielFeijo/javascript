function bas(){
  let res = document.getElementById('res')

  let a = window.prompt('Qual o valor de A?')
  let b = window.prompt('Qual o valor de B?')
  let c = window.prompt('Qual o valor de C?')
  
  let calc = Number(b)*Number(b)
  let fin = calc-4*Number(a)*Number(c)
  

  res.innerHTML = ''
  res.innerHTML += `<h2>Resolvendo Bhaskara</h2>`
  res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
  res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² - 4 . ${a} . ${c}</strong></p>`
  res.innerHTML += `<p>O valor calculado foi <mark><strong>&Delta; = ${fin}</strong></mark> </p>`
}