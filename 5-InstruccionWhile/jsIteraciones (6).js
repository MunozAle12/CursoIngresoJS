function Mostrar()
{

var numero;
var contador;
var acumulador;
var i;

contador = 0;
acumulador = 0;
i = 0;

	while(contador<5)
	{
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);

		acumulador = acumulador + numero;

		contador++; // contador++ = contador + 1
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN