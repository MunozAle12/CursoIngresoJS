function Mostrar()
{
	var contador;
	var respuesta;
	var numero;
	var acumuladorPositivo;
	var acumuladorNegativo;
	var contadorPositivo;
	var contadorNegativo;
	var contadorCeros;
	var contadorPares;
	var acumuladorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	contador = 0;
	respuesta = 'si';
	acumuladorPositivo = 0;
	acumuladorNegativo = 0;
	contadorPositivo = 0;
	contadorNegativo = 0;
	contadorCeros = 0;
	contadorPares = 0;
	acumuladorPares = 0;


	while(respuesta=='si')
	{
		contador = contador + 1;
		numero = prompt("Ingrese numero.");
		numero = parseInt(numero);
		
		if(numero>0)
		{
			acumuladorPositivo = numero + acumuladorPositivo;
			contadorPositivo = contadorPositivo + 1;
			promedioPositivos = acumuladorPositivo / contadorPositivo;
		}
		else
		{
			if(numero<0)
			{
				acumuladorNegativo = numero + acumuladorNegativo;
				contadorNegativo = contadorNegativo + 1;
				promedioNegativos = acumuladorNegativo / contadorNegativo;
			}
			else
			{
				contadorCeros = contadorCeros +1;
			}
		}

		diferenciaPositivosNegativos = acumuladorPositivo - acumuladorNegativo;

		respuesta = prompt("¿Desea continuar?");

		while(respuesta!='si' && respuesta!='no')
		{
			respuesta = prompt("¿Desea continuar?");
		}
	}
document.write("La suma de los numeros negativos es: "+acumuladorNegativo);
document.write(" La cantidad de los numeros negativos es: "+contadorNegativo);
document.write(" El promedio de numeros negativos es: "+promedioNegativos);
document.write(" La suma de los numeros positivos es: "+acumuladorPositivo);
document.write(" La cantidad de los numeros positivos es: "+contadorPositivo);
document.write(" El promedio de numeros positivos es: "+promedioPositivos);
document.write(" La cantidad de ceros es: "+contadorCeros);
document.write(" La diferencia entre numeros positivos y negativos es: "+diferenciaPositivosNegativos);
document.write(" La cantidad de numeros pares es: "+acumuladorPares);
}//FIN DE LA FUNCIÓN.
/*	Obtener, validar e informar los siguentes datos:
	1. Cuantas mujeres y cuantos hombres fueron entrevistados; 
	2. La persona de mayor edad; 
	3. El promedio de edad;
	4. Quién ganara las elecciones; 
	5. Informar cuantas mujeres mayores de edad hay;
	6. Informar cuantos hombres menores a 30 años hay; 
	7. informar la altura del hombre que menos edad tiene; 
	8. informar cuantos hombres votaron a otro; 
	9. De las mujeres informar cuantas votaron a la oposicion; 
	10. Cuantas personas de 50 años votaron; 
	11. Cuantas personas de 50 años mujeres votaron; 
	12. Cuantas mujeres de 50 años de mas de un metro votaron al gobierno.
*/
function Mostrar()
{
	var mujeres;
	var hombres;
	var personaDeMayorEdad;
	var promedioDeEdad;

}

/*
	var sexo;
	var contadorMasc;
	var contadorFem;
	var edad;

	while(respuesta!="no")
	{
		sexo = prompt("Indique si su sexo es f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo = prompt("Indique si su sexo es f o m");
		}
		if(sexo="f")
		{
			contadorFem = contadorFem + 1;
		}
		else
		{

		}
		respuesta = prompt("¿Desea continuar?");
	}
*/