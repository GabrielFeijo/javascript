function ano(){
  let ano = window.prompt('Qual é o ano que você que verificar?')
  let res = document.getElementById('res')

  let na = Number(ano)


res.innerHTML = ''
res.innerHTML += `<h2>Analisando o ano de ${na}...</h2>`
  if (na%4 == 0){
    res.innerHTML += `<p>O ano de ${na} <mark id="one"><strong>É BISSEXTO</strong></mark> ✅ </p>`
  }else{
    res.innerHTML += `<p>O ano de ${na} <mark id="two"><strong>NÃO É BISSEXTO</strong></mark> ❌ </p>`
  }
}