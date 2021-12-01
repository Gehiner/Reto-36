var dados = [];
var numeroDeDados = 0;

var dadosATirar = [];

var imprimirImagenes = document.getElementById('imagenes');
var imprimirResultado = document.getElementById('resultado');

dados.push(new Dado("imagenes/dado1.png", 1))
dados.push(new Dado("imagenes/dado2.png", 2))
dados.push(new Dado("imagenes/dado3.png", 3))
dados.push(new Dado("imagenes/dado4.png", 4))
dados.push(new Dado("imagenes/dado5.png", 5))
dados.push(new Dado("imagenes/dado6.png", 6))

var player1 = document.getElementById("jugador1");
var jugador2 = document.getElementById('jugador2');
var jugador3 = document.getElementById('jugador3');

var color = document.getElementById('color');