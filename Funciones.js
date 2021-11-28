function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}


function defNumeroDeDados(nDados)
{
   return numeroDeDados = nDados;
}

function tiroNDados()
{
    let nTiros = numeroDeDados
    for(var x = 0; x < nTiros; x++){
        let resultadoDados = aleatorio(1,6);
        imprimirImages.innerHTML = imprimirImagenes + "<img src=\" " + dados[resultadoDados].src + "\" > </img>";
        var total = total + dados[resultadoDados].valor;
    }
    imprimirResultado.innerHTML = total;
}