function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function jugar()
{
  var iteracion = 0;
  for(var x in players)
  {
    imagenesDeDados[iteracion].innerHTML = '';
    var puntajeAleatorio ;
    for(var y = 0; y < 2; y++){
      puntajeAleatorio = aleatorio(1,6);
      x.puntaje = x.puntaje + puntajeAleatorio;
      imagenesDeDados[iteracion].innerHTML = imagenesDeDados[iteracion].innerHTML + dados[puntajeAleatorio - 1].imagen.src;
    }
  }
}

function cambiarNombreDeJugadores(){
  playersInGame[0].innerHTML = prompt("Nombre jugador1");
  players[0].namePlayer = jugador1.innerHTML;
  playersInGame[1].innerHTML = prompt("Nombre jugador2");
  players[1].namePlayer = jugador2.innerHTML;
  playersInGame[2].innerHTML = prompt("Nombre jugador3");
  players[2].namePlayer = jugador3.innerHTML;
}


function agregarJugadores(){
  players.push(new Jugadores(playersInGame[0].innerHTML, NaN));
  players.push(new Jugadores(playersInGame[1].innerHTML, NaN));
  players.push(new Jugadores(playersInGame[2].innerHTML, NaN));
}
imagenesDeDados[0] = 
jugar();
