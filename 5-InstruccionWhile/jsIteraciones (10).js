/*
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
console.log("La suma de los numeros negativos es: "+acumuladorNegativo);
console.log(" La cantidad de los numeros negativos es: "+contadorNegativo);
console.log(" El promedio de numeros negativos es: "+promedioNegativos);
console.log(" La suma de los numeros positivos es: "+acumuladorPositivo);
console.log(" La cantidad de los numeros positivos es: "+contadorPositivo);
console.log(" El promedio de numeros positivos es: "+promedioPositivos);
console.log(" La cantidad de ceros es: "+contadorCeros);
console.log(" La diferencia entre numeros positivos y negativos es: "+diferenciaPositivosNegativos);
console.log(" La cantidad de numeros pares es: "+acumuladorPares);
}//FIN DE LA FUNCIÓN.

/*	
EJERCICIO ADICIONAL PARA LAS VACACIONES
Obtener, validar e informar los siguentes datos:
	1. Cuantas mujeres y cuantos hombres fueron entrevistados; 
	2. La persona de mayor edad; 
	3. El promedio de edad;
	4. Quién ganara las elecciones; 
	5. Informar cuantas mujeres mayores de edad hay;
	6. Informar cuantos hombres menores a 30 años hay; 
	7. Informar la altura del hombre que menos edad tiene; 
	8. Informar cuantos hombres votaron a otro partido; 
	9. Informar cuantas mujeres votaron a la oposicion; 
	10. Cuantas personas de 50 años votaron; 
	11. Cuantas mujeres de 50 años votaron;
	12. Cuantas mujeres de 50 años de mas de un metro votaron al gobierno.
*/
function Mostrar()
{
	var contador;
	var sexo;
	var respuesta;
	var contadorFem;
	var contadorMasc;
	var acumuladorEdadFem;
	var acumuladorEdadMasc;
	var promedioEdad;
	var votacion;
	var contadorOficialismo;
	var contadorOposicion;
	var contadorOtroPartido;
	var contadorMayorEdadFem;
	var contadorMenoresDeTreintaMasc;
	var altura;
	var mascMenorEdad;
	var alturaMascMenorEdad;
	var contadorMascVotOtroPartido;
	var contadorFemVotOposicion;
	var contadorMascDeCincuentaAños;
	var contadorFemDeCincuentaAños;
	var contadorPersCincuentaAños;
	var contadorFemDeUnMetroVotOficialismo;

	contador = 0;
	respuesta = 'si';	
	contadorFem = 0;
	contadorMasc = 0;
	acumuladorEdadFem = 0;
	acumuladorEdadMasc = 0;
	contadorOficialismo = 0;
	contadorOposicion = 0;
	contadorOtroPartido = 0;
	contadorMayorEdadFem = 0;
	contadorMenoresDeTreintaMasc = 0;
	contadorMascVotOtroPartido = 0;
	contadorFemVotOposicion = 0;
	contadorMascDeCincuentaAños = 0;
	contadorFemDeCincuentaAños = 0;
	contadorPersCincuentaAños = 0;
	contadorFemDeUnMetroVotOficialismo = 0;

	while(respuesta!='no')
	{	
		//Valido sexo:
		sexo = prompt("Indique su sexo. Ingrese 'f' para femenino o 'm' para masculino.");
		while(sexo!="f" && sexo!="m")
		{
		sexo = prompt("Indique su sexo. Ingrese 'f' para femenino o 'm' para masculino.");
		}

		//Valido edad:
		edad = prompt("Indique su edad.");
		while(edad<0 || edad>100)
		{
			edad=prompt("Indique su edad.");
		}
		edad = parseInt(edad);//Paso la edad a valor numerico.

		//Vaido la altura del votante.
		altura = prompt("Ingrese su altura.");
		while(altura<0 || altura>3)
		{
			altura = prompt("Reingrese su altura.");
		}
		altura = parseInt(altura);//Paso la altura a valor numerico.
		
		//Valido votaciones.
		votacion = prompt("Ingrese su votación:'oficialismo','oposicion' u 'otro partido'");
		while(votacion!="oficialismo" && votacion!="oposicion" && votacion!="otro partido")
		{
			votacion = prompt("Ingrese su votación:'oficialismo','oposicion' u 'otro partido'");
		}
		votacion = parseInt(votacion);//Paso la votacion a valor numerico.

		//Cuento la cantidad de votos de cada partido.
		if(votación=="oficialismo")
		{
			contadorOficialismo = contadorOficialismo + 1;
		}
		else
		{
			if(votacion=="oposicion")
			{
				contadorOposicion = contadorOposicion + 1;
			}
			else(votacion=="otro partido")
			{
				contadorOtroPartido = contadorOtroPartido + 1;
			}
		}

		//Cuento la cantidad de mujeres y hombres que votaron.
		if(sexo=="f")
		{
			//Cuento la cantidad de mujeres que votaron y acumulo las edades.
			contadorFem = contadorFem + 1;
			acumuladorEdadFem = edad + acumuladorEdadFem;
			while(edad>=18)//Valido las mujeres mayores de edad que votaron.
			{
				contadorMayorEdadFem = contadorMayorEdadFem + 1;//Cuento la cantidad de mujeres de mayor edad que votaron.
			}
			while(votacion=="oposicion")//Valido votos femeninos para la oposicion.
			{
				contadorFemVotOposicion = contadorFemVotOposicion + 1;//Cuento la cantidad de mujeres que votaron a la oposicion.
			}
			while(edad==50)//Valido votos de mujeres de 50 años.
			{
				contadorFemDeCincuentaAños = contadorFemDeCincuentaAños + 1;// Cuento la cantidad de mujeres de 50 años que votaron.
			}
			while(votacion=="oficialismo")//Valido votos femeninos para el oficialismo.
			{
				while(altura>1)//Valido votos femeninos de mas de un metro para el oficialismo
				{
					contadorFemDeUnMetroVotOficialismo = contadorFemDeUnMetroVotOficialismo + 1;//Cuento los votos de mujeres de mas de un metro para el oficialismo.
				}
			}
		}
		else(sexo=="m")
		{
			//Cuento la cantidad de hombres que votaron y acumulo las edades.
			contadorMasc = contadorMasc + 1;
			acumuladorEdadMasc = edad + acumuladorEdadMasc;
			while(edad<30)//Valido la cantidad de hombres menores de 30 que votaron.
			{
				contadorMenoresDeTreintaMasc = contadorMenoresDeTreintaMasc + 1;//Cuento la cantidad de hombres menores de 30 que votaron.
			}
			if(contador==1)//Cuando el contador sea igual a 1, el PRIMER hombre es el que UNICO con menor edad y menor altura.
			{
				mascMenorEdad = edad;
				alturaMascMenorEdad = altura;
			}
			else(edad<mascMenorEdad)//Indico cuál es el masculino de menor edad y su altura.
			{
				mascMenorEdad = edad;
				alturaMascMenorEdad = altura;
			}
			while(votacion=="otro partido")//Valido cuantos hombres votaron a otro partido.
			{
				contadorMascVotOtroPartido = contadorMascVotOtroPartido + 1;//Cuento la cantidad de votos masculinos para otro partido.
			}
			while(edad==50)//Valido votos de hombres de 50 años.
			{
				contadorMascDeCincuentaAños = contadorMascDeCincuentaAños + 1;// Cuento la cantidad de hombres de 50 años que votaron.
			}
		}
		
		if(contador==1)//Cuando el contador sea igual a 1, la PRIMER persona es la UNICA con mayor edad.
		{
			edadMayor = edad;
		}
		else//Indico la edad "maxima" que votó.
		{
			edadMayor = edad;
		}
		
		respuesta = prompt("Desea continuar?");//Dentro del "WHILE", al final, le pregunto al usuario si desea continuar.
	}
	
	promedioEdad = (acumuladorEdadFem + acumuladorEdadFem) / (contadorFem + contadorMasc);//Saco el promedio de edad de TODOS los votantes. ¡¡¡FUERA DEL WHILE!!!
	contadorPersCincuentaAños = contadorMascDeCincuentaAños + contadorFemDeCincuentaAños;//Cuento la cantidad de personas de 50 años que votaron.
	
	//Determino cuál es el partido ganador.
	if(contadorOposicion>contadorOficialismo && contadorOposicion>contadorOtroPartido)
	{
		console.log("El ganador es la oposicion con "+contadorOposicion+" votos.");
	}
	else
	{
		if(contadorOficialismo>contadorOposicion && contadorOficialismo>contadorOtroPartido)
		{
			console.log(" El ganador es el oficialismo con "+contadorOficialismo+" votos.");
		}
		else(contadorOtroPartido>contadorOficialismo && contadorOtroPartido>contadorOposicion)
		{
			console.log(" El ganador es otro partido con "+contadorOtroPartido+" votos.");
		}
	}
	console.log(" Fueron entrevistados "+contadorFem+" mujeres y "+contadorMasc+" hombres.");
	console.log(" La persona de mayor edad que votó tiene "+edadMayor+" años.");
	console.log(" El promedio de edad es de "+promedioEdad+" años.");
	console.log(" Votaron "+contadorMayorEdadFem+" mujeres mayors de edad.");
	console.log(" Votaron "+contadorMenoresDeTreintaMasc+" hombres menores de 30 años.");
	console.log(" La altura del hombre que menos edad tiene es de "+alturaMascMenorEdad+" metros.");
	console.log(" Votaron a otro partido "+contadorMascVotOtroPartido+" hombres.");
	console.log(" Votaron a la oposicion "+contadorFemVotOposicion+" mujeres.");
	console.log(" Votaron "+contadorPersCincuentaAños+" personas de cincuenta años");
	console.log(" Votaron "+contadorMascDeCincuentaAños+" hombres de cincuenta años.");
	console.log(" Votaron al oficialismo "+contadorFemDeUnMetroVotOficialismo+" mujeres de cincuenta años de mas de un metro.");
}