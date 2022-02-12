

function show_notify(element){
   element.innerHTML = "Obrigado por clicar no botão!"

    setTimeout(function() {
       element.innerHTML = ""
      }, 2000);
}

function somar(n1,n2,element){
    element.innerHTML = `A soma entre ${n1.value} + ${n2.value} é igual a ${parseFloat(n1.value)+parseFloat(n2.value)}`
  
}

var array = [];


function showvetor(element){
   return element.innerHTML = array.join(' - ')
}

function add(text,element){
    array.push(text.value);
    showvetor(element);

}
function remove(text,element){
    array.pop(text.value);
    showvetor(element)

}
