function Mostrar()
{
//var repetciones;
	var cantidad;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;

	cantidad = 10;
//repetciones = prompt("ingrese el número de repeticiones");
		for(contador=0 ; contador<cantidad ; contador++)
		{
			numero = Math.floor((Math.random() * 10) + 1);
			//console.log(numero);
			switch(numero)
			{
				case 1:
					cont1++;
					break;
				case 2:
					cont2++;
					break;
				case 3:
					cont3++;
					break;
				case 4:
					cont4++;
					break;
				case 5:
					cont5++;
					break;
				case 6:
					cont6++;
					break;
				case 7:
					if(contador==7)
					{
						continue;
					}
					cont7++;
					//break;
				case 8:
					cont8++;
					break;
				case 9:
					cont9++;
					break;
				case 10:
					cont10++;
					break;
			}
		}
		console.log("La cantidad de 1 es "+cont1);
		console.log("La cantidad de 2 es "+cont2);
		console.log("La cantidad de 3 es "+cont3);
		console.log("La cantidad de 4 es "+cont4);
		console.log("La cantidad de 5 es "+cont5);
		console.log("La cantidad de 6 es "+cont6);
		console.log("La cantidad de 7 es "+cont7);
		console.log("La cantidad de 8 es "+cont8);
		console.log("La cantidad de 9 es "+cont9);
		console.log("La cantidad de 10 es "+cont10);
}//FIN DE LA FUNCIÓN