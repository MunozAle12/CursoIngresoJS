function Mostrar()
{

	var contador;
	var acumulador;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	while(respuesta=='si')
	{
		contador = contador + 1;
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
		acumulador = acumulador + numero;

		respuesta = prompt("¿Desea continuar?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
/*	var nota;
	var notaMayor;
	var notaMinima;
	
	while(contador<3)
	{
		contador = contador + 1;
		nota = prompt("Ingrese nota.");
		if(contador==1)
		{
			nota = notaMayor;
		}
		else(contador==2)
		{
			nota = notaMinima;
			if(notaMayor<nota)
			{

			}
			if(notaMinima>nota)

		}
	}
	console.log(notaMinima);
	console.log(notaMayor);
*/
/*
	while(contador<3)
	{
		contador = contador + 1;
		nota = prompt("Ingrese nota.");
		if(nota>notaMayor)
		{
			notaMayor = nota;
		}
		if(nota<notaMinima)
		{
			notaMinima = nota;
		}
	}
	console.log(notaMinima);
	console.log(notaMayor);
*/
/*	
	var nota;
	var notaMayor=-1;
		
		while(contador<3)
	{
		contador = contador + 1;
		nota = prompt("Ingrese nota.")
		if(nota>notaMayor)
		{
			notaMayor = nota;
		}
	}
	console.log(notaMayor);
*/