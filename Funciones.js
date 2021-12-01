function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function jugar()
{
  var iteracion = 0;
  for(var x of players)
  {
    x.puntaje = 0;
    console.log(iteracion, 'inicio');
    imagenesDeDados[iteracion].innerHTML = '';
    var puntajeAleatorio ;
    for(let y = 0; y < 2; y++){
      puntajeAleatorio = aleatorio(1,6);
      x.puntaje = x.puntaje + puntajeAleatorio;
      imagenesDeDados[iteracion].innerHTML = imagenesDeDados[iteracion].innerHTML + "<img src=" + " \" " + dados[puntajeAleatorio - 1].imagen.src+ " \" " + "/>";
    }
    totalDePuntos[iteracion].innerHTML = "Total: " +  x.puntaje;
    iteracion ++;
    console.log(iteracion, 'final');
  }
  jugadorGanador();
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
  players.push(new Jugadores(playersInGame[0].innerHTML, 0));
  players.push(new Jugadores(playersInGame[1].innerHTML, 0));
  players.push(new Jugadores(playersInGame[2].innerHTML, 0));
  return players;
}

function jugadorGanador(){
  var numeroMAyor = players[0].puntaje;
  for(var y of players)
  {
    if(y.puntaje > numeroMAyor){
      numeroMAyor = y.puntaje;
    }
    console.log(y, numeroMAyor, "sacando el numeroMayor");
  }
  let iterando = 0;
  for(let z of players)
  {
    if(z.puntaje == numeroMAyor)
    {
      playersInGame[iterando].style.setProperty("background-color", "#1CD948");
      console.log('gano', z)
    }
    else{
      playersInGame[iterando].style.setProperty("background-color", "white");
      console.log('perdio', z)
    }
    iterando++;
  }
  console.log(numeroMAyor);

}


