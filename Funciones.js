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
    imprimirResultado.innerHTML = '';
    imprimirImagenes.innerHTML = '';    
    var total = 0;
    let nTiros = numeroDeDados
    for(var x = 0; x < nTiros; x++){
        let resultadoDados = (aleatorio(1,6)) - 1;
        console.log(dados[resultadoDados].imagen.src, dados[resultadoDados].valor, nTiros, resultadoDados);
        imprimirImagenes.innerHTML = imprimirImagenes.innerHTML + "<img src=" + " \" " + dados[resultadoDados].imagen.src+ " \" " + "/>";
        total = total + dados[resultadoDados].valor;
    }
    imprimirResultado.innerHTML = total;
}

function cambiarNombreDeJugadores(){
  jugador1.innerHTML = prompt("Nombre jugador1");
  jugador2.innerHTML = prompt("Nombre jugador2");
  jugador3.innerHTML = prompt("Nombre jugador3");
}