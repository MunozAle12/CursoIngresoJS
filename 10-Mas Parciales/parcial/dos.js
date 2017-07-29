function Mostrar()
{
	for(i=0 ; i<10 ; i++)
	{
		if(i==0 || i==9)
		{
			document.write("**********<br>");
		}
		else
		{
			document.write("*00000000*<br>");
		}
	}
}
//Se piden 10 notas validas entre 0 y 10. Informar la peor nota.
/*
1- Se pide 10 numero. Informar el promedio.

 	var numero;
  	var contador;
  	var acumulador;
  	var promedio;

  	contador = 0;
 	promedio = 0;
  	acumulador = 0;

  	while(contador<10)
  	{
  		contador++;
  		numero = prompt("Ingrese numero.");
  		numero = parseInt(numero);
  		acumulador = numero + acumulador;
	}
	promedio = acumulador / contador;

	alert("El promedio es "+promedio);
*/
/*
2- Se piden 10 notas validas entre 0 y 10. Informar la peor nota.
	
	var nota;
	var contador;
	var notaMinima;

	contador = 0;

	while(contador<10)
	{
		contador++;
		nota = prompt("Ingrese nota.");
		while(nota<0 || nota>10)
		{
			nota = prompt("Ingrese nota.");
		}

		if(contador==1)
		{
			notaMinima = nota;
		}
		else
		{
			if(nota<notaMinima)
			{
				notaMinima = nota;
			}
		}
	}

	alert("La peor nota es "+notaMinima);
*/
