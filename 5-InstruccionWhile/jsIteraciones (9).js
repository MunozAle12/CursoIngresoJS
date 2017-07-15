function Mostrar()
{

	var contador;
	var numero;
	var numeroMinimo;
	var numeroMaximo;
	var respuesta;

	numeroMaximo = 0;
	numeroMinimo = 0;
	contador = 0;
	respuesta='si';

	while(respuesta=='si')
	{
		contador = contador + 1;
		numero = prompt("Ingrese numero.");
		numero = parseInt(numero);
		
		if(contador==1)
		{
			numero = numeroMaximo;
			numero = numeroMinimo;
		}
		else
		{
			if(numero>numeroMaximo)
			{
				numeroMaximo = numero;
			}
			else
			{
				numeroMinimo = numero;
			}
		}

		respuesta = prompt("¿Quiere continuar?");

		while(respuesta!='si' && respuesta!='no')
		{
			respuesta = prompt("¿Quiere continuar?");
		}
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN