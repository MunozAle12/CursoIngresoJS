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
	else(primerNumero>segundoNumero)
	{
		resultado = primerNumero - segundoNumero;
		if
		{
			resultado = primerNumero + segundoNumero;
		}
	}

	document.write("El resultado es: "+resultado);
}