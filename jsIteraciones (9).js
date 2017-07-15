function Mostrar()
{

	var contador=0;
	var numero;
	var numeroMinimo;
	var numeroMaximo;	// declarar variables
	
	var respuesta='si';

	while(respuesta=='si')
	{
		numero = prompt("Ingrese numero.");
		numero = parseInt(numero);
		if(numero>numeroMaximo)
		{
			numeroMaximo = numero;
		}
		else
		{
			numeroMinimo = numero;
		}

		respuesta = prompt("¿Quiere continuar?");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;


}//FIN DE LA FUNCIÓN