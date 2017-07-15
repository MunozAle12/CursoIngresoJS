function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sexo;
	var contadorMasc;
	var contadorFem;
	var edad;

	//Ejemplo de obtencion, validacion y extraccion de informacion de esta encuesta se debe informar 
	1. Cuantas mujeres y cuantos hombres fueron entrevistados; 
	2. La persona de mayor edad; 
	3. El promedio de edad; 4. Quien ganara las elecciones; 
	5. Informar cuantas mujeres mayores de edad hay 
	6. Informar cuantos hombres menores a 30 años hay; 
	7. informar la altura del hombre que menos edad tiene; 
	8. informar cuantos hombres votaron a otro; 
	9. De las mujeres informar cuantas votaron a la oposicion; 
	10. Cuantas personas de 50 años votaron; 
	11. Cuantas personas de 50 años mujeres votaron; 
	12. Cuantas mujeres de 50 años de mas de un metro votaron al gobierno.

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
}//FIN DE LA FUNCIÓN