/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	alambre = 2*largo+2*ancho;
	alambre = 3*alambre;

	alert("Se necesitan "+alambre+" metro(s) de alambre.");
}
function Circulo () 
{
	var radio;
	var alambre;

	radio = document.getElementById('Radio').value;

	radio = parseInt(radio);

	alambre = 2*Math.PI*radio;
	alambre = 3*alambre;

	alert("Se necesitan "+alambre+" metro(s) de alambre.");

}
function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var cemento;
	var cal;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	
	largo = parseInt(largo);
	ancho = parseInt(ancho);
 	
	superficie = largo*ancho;
	cemento = 2*superficie;
	cal = 3*superficie;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");

}