function Mostrar()
{

}


/*
1- Se pide numero por ID y se muestra por alert ese numero al cubo.
	
	var numero;
	var resultado;

	numero = document.getElementById('laBase').value;
	numero = parseInt(numero);
	resultado = numero * numero * numero;

	alert("El resultado es "+resultado);
*/
/*
2- Se piden dos numeros por prompt y mostramos en el cuadro de texto 
la suma de los mismos.
	
	var numero1;
	var numero2;
	var resultado;

	numero1 = prompt("Ingrese el primer numero.");
	numero2 = prompt("ingrese el segundo numero.");
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;
	resultado = document.getElementById('laBase').value = resultado;
*/

/*
3- Pedir por prompt nombre y nacionalidad y mostrar el mensaje en el cuadro de texto "pepe es argentino".
	
	var nombre;
	var nacionalidad;

	nombre = prompt("Ingrese nombre.");
	nacionalidad = prompt("Ingrese nacionalidad.");

	document.getElementById('laBase').value = nombre+" es "+nacionalidad;
*/
/*
4- Se piden dos numeros. Mostrar en el cuadro de texto el menor de ellos.
	
	var numero1;
	var numero2;
	var numeroMinimo;

	numero1 = prompt("Ingrese el primer numero.");
	numero2 = prompt("Ingrese el segundo numero.");

	if(numero1<numero2)
	{
		document.getElementById('laBase').value = numero1;
	}
	else
	{
		document.getElementById('laBase').value = numero2;
	}
*/
/*
5- Se pide nombre y edad y se informa por consola el nombre del mayor.
	
	var nombre1;
	var nombre2;
	var edad1;
	var edad2;

	nombre1 = prompt("Ingrese nombre.");
	edad1 = prompt("Ingrese edad.");
	nombre2 = prompt("Ingrese nombre.");
	edad2 = prompt("Ingrese edad.");

	edad1 = parseInt(edad1);
	edad2 = parseInt(edad2);

	if(edad1<edad2)
	{
		console.log("El nombre del mayor es "+nombre2);
	}
	else
	{
		console.log("El nombre del mayor es "+nombre1);
	}
*/
/*
6- Se ingresa por el cuadro de texto el importe a pagar de estacionamiento al 
presionar el boton nos mostrara los siguientes mensajes, "Baratito" si es menos de 20, 
"Esta bien" si es menor a 70, "Esto es un robo" si sale mas de 70.
	
	var importe;

	importe = prompt("Ingrese el importe a pagar.");
	importe = parseInt(importe);

 	if(importe<20)
 	{
 		alert("Baratito");
 	}
 	else
 	{
 		if(importe<70)
 		{
 			alert("Esta bien.");
 		}
 		else
 		{
 			alert("Esto es un robo.");
 		}
 	}
 */
/*
7- Se piden tres numeros por prompt y se informa cual es el numero del medio.
 	var numero1;
	var numero2;
	var numero3;
	var resultado;

	numero1 = prompt("Ingrese el primer numero.");
	numero2 = prompt("Ingrese el segundo numero.");
	numero3 = prompt("Ingrese el tercer numero."); 

	if((numero1>=numero2 && numero1<=numero3) || (numero1<=numero2 && numero1>=numero3))
	{
		resultado = numero1;
	}
	else
	{
		if((numero2>=numero1 && numero2<=numero3) || (numero2<=numero1 && numero2>=numero3))
		{
			resultado = numero2;
		}
		else
		{
			resultado = numero3;
		}
	}
	alert("El resultado es "+resultado);
*/