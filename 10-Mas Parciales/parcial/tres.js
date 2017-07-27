function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo = document.getElementById('alrgo').value;
	ancho = document.getElementById('ancho').value;

	perimetro = 2 * largo+2 * ancho ;
	alambre = 3 * perimetro;

	alert("Se necesitan "+alambre+" metros de alambre.");
}
