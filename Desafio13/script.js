function aluno(){
  let res = document.getElementById('res')
  let nome = window.prompt('Qual é o nome do aluno(a)?')
  let n1 = window.prompt(`Primeira nota de ${nome}`)
  let n2 = window.prompt(`Segunda nota de ${nome}`)
  let tota = Number(n1)+Number(n2)
  let tt = tota/2
  

  res.innerHTML = ''
  res.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
  res.innerHTML += `<p>Com as notas ${n1.replace(".",",")} e ${n2.replace(".",",")}, a <strong>média é ${String(tt).replace(".",",")} </strong></p>`

  if(tt < 3){
    res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <mark id="add"><strong>REPROVADO</strong></mark></p>`
  }else if (tt <= 6){
   res.innerHTML += `<p>Com média entre de 3,0 e 6,0, o aluno está <mark id="aff"><strong>RECUPERAÇÃO</strong></mark></p>`
  }else{
   res.innerHTML += `<p>Com média acima de 6,0, o aluno está <mark id="app"><strong>APROVADO</strong></mark></p>`
  }
}