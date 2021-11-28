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
    var total = 0;
    let nTiros = numeroDeDados
    for(var x = 0; x < nTiros; x++){
        let resultadoDados = (aleatorio(1,6)) - 1;
        console.log(dados[resultadoDados].imagen.src, dados[resultadoDados].valor, nTiros, resultadoDados);
        dadosATirar.push(new Dado(dados[resultadoDados].imagen.src,dados[resultadoDados].valor) );
        total = total + dados[resultadoDados].valor;
    }
    imprimirResultado.innerHTML = total;
    imprimirDados();
}

function imprimirDados(){
    for( var lanzar of dadosATirar){
        imprimirImagenes.innerHTML = imprimirImagenes.innerHTML + "<img src=" + " \" " + lanzar.imagen.src+ " \" " + "/>";  
    }
}