function Mostrar()
{

	var numero;
	var contador;
	var acumulador;

	contador = 0;
	acumulador = 0;

		while(contador<5)
		{
			contador = contador+1;
			numero = prompt("Ingrese un numero.");
			numero = parseInt(numero);
			acumulador = acumulador + numero;
		}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN