var dados = [];
var numeroDeDados = 0;

var dadosATirar = [];

var players = [];

var playersInGame = document.querySelectorAll('.player');

dados.push(new Dado("imagenes/dado1.png", 1))
dados.push(new Dado("imagenes/dado2.png", 2))
dados.push(new Dado("imagenes/dado3.png", 3))
dados.push(new Dado("imagenes/dado4.png", 4))
dados.push(new Dado("imagenes/dado5.png", 5))
dados.push(new Dado("imagenes/dado6.png", 6))

agregarJugadores();

var imagenesDeDados = document.querySelectorAll('.imagenesDeDados');
var totalDePuntos = document.querySelectorAll('.total');
