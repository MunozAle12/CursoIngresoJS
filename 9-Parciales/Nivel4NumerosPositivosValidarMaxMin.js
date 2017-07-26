function Mostrar()
{
	var numeroPositivo;
	var respuesta;
	var contadorPares;
	var contadorNumerosPositivos;
	var acumuladorNumerosPositivos;
	var promedioNumerosPositivos;
	var numeroPositivoMaximo;
	var numeroPositivoMinimo;

	respuesta = 'si';
	contadorPares = 0;
	contadorNumerosPositivos = 0;
	acumuladorNumerosPositivos = 0;
	promedioNumerosPositivos = 0;

	while(respuesta!='no')
	{
		contadorNumerosPositivos = contadorNumerosPositivos + 1;
		numeroPositivo = prompt("Ingrese el "+contadorNumerosPositivos+"º numero positivo.");
		while(numeroPositivo<=0)
		{
			numeroPositivo = prompt("Ingrese el "+contadorNumerosPositivos+"º numero positivo.");
		}
		numeroPositivo = parseInt(numeroPositivo);
		acumuladorNumerosPositivos = numeroPositivo + acumuladorNumerosPositivos;
		promedioNumerosPositivos = acumuladorNumerosPositivos % contadorNumerosPositivos;
		
		if(contadorNumerosPositivos==1)
		{
			numeroPositivo = numeroPositivoMinimo;
			numeroPositivo = numeroPositivoMaximo;
		}
		else
		{
			if(numeroPositivo<numeroPositivoMinimo)
			{
				numeroPositivoMinimo = numeroPositivo;
			}
			else(numeroPositivo>numeroPositivoMaximo)
			{
				numeroPositivoMaximo = numeroPositivo;
			}
		}

		if(numeroPositivo%2==0)
		{
			contadorPares = contadorPares + 1;
		}
	}

	document.write("La cantidad de numeros pares es "+contadorPares);
	document.write(" La suma de todos los numeros positivos es "+acumuladorNumerosPositivos);
	document.write(" El promedio de los numeros ingresados es "+promedioNumerosPositivos);
	document.write(" El numero positivo maximo ingresado es "+numeroPositivoMaximo);
	document.write(" El numero positivo minimo ingresado es "+numeroPositivoMinimo);
}