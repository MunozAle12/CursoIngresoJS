function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	perimetro = 2 * (largo + ancho);
	alambre = perimetro * 3;

	document.write("Se necesitan "+alambre+" metros de alambre");
}