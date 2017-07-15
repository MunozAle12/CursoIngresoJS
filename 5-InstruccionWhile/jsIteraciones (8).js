function Mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var numero;
	var respuesta;

	contador = 0;
	positivo = 0;
	negativo = 1;
	respuesta = 'si';

	while(respuesta=='si')
	{
		contador = contador + 1;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		if(numero<0)
		{
			negativo = negativo * numero;
		}
		else
		{
			positivo = positivo + numero;
		}
		respuesta = prompt("¿Quiere continuar?");

		while(respuesta!='si' && respuesta!='no')
		{
			respuesta = prompt("¿Quiere continuar?");
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN