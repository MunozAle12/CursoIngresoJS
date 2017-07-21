function Mostrar()
{
	var baseCuadrado;
	var perimetro;

	baseCuadrado = document.getElementById('Base').value;
	baseCuadrado = parseInt(baseCuadrado);
	perimetro = 4*baseCuadrado;
	alert("El perimetro del cuadrado es: "+perimetro);
}