/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	var numeroSecreto;
	var numero;
	var intentos;

	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	numero = document.getElementById('numero').value;
	intentos = document.getElementById('intentos').value = 0;
	//alert(numeroSecreto );
	

}

function verificar()
{
	var numero;
	var numeroSecreto;
	var intentos;

	numero = document.getElementById('numero').value;
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	intentos = intentos++;

	if(numero==numeroSecreto)
		{
			alert("¡¡¡Usted es un ganador!!! Y en solo "+intentos);
		}
		else(numero<numeroSecreto)
			{
				alert("Falta");
			}
			if(numero>numeroSecreto)
				{
					alert("Te pasaste");
				}
}