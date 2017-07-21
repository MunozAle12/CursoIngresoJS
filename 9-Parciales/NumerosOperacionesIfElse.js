function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = prompt("Ingrese el primer número.");
	segundoNumero = prompt("Ingrese el segundo número.");

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		resultado = primerNumero * segundoNumero;
	}
	else
	{
		if(primerNumero>segundoNumero)
		{
		resultado = primerNumero - segundoNumero;
		}
		else
		{
			resultado = primerNumero + segundoNumero;
		}
	}

	document.write("El resultado es: "+resultado);
}
