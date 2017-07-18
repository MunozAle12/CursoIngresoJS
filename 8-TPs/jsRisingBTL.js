/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 var edad;
	 var sexo;
	 var estadoCivil;
	 var sueldoBruto;
	 var numeroDeLegajo;
	 var nacionalidad;

	 edad = prompt("Ingrese su edad.");	
		while(edad<18 || edad>90)
		{
			edad = prompt("Reingrese su edad.");
	 	}
	 edad = document.getElementById('Edad').value = edad;

	 sexo = prompt("Indique su sexo. M para masculino y F para femenino.");
	 	while(sexo!="M" && sexo!="F")
	 	{
	 		sexo = prompt("Indique nuevamente su sexo. M para masculino y F para femenino.");
	 	}
	 sexo = document.getElementById('Sexo').value = sexo;

	 estadoCivil = prompt("Indique su estado civil. '1' para soltero, '2' para casado, '3' para divorciado, '4' para viudo.");
	 	while(estadoCivil!="1" && estadoCivil!="2" && estadoCivil!="3" && estadoCivil!="4")
	 	{
	 		estadoCivil = prompt("Indique su estado civil. '1' para soltero, '2' para casado, '3' para divorciado, '4' para viudo.");
	 	}
	 	switch(estadoCivil)
	 	{
	 		case "1":
	 		estadoCivil = "Soltero/a";
	 		break;

		 	case "2":
		 	estadoCivil = "Casado/a";
		 	break;

		 	case "3":
		 	estadoCivil = "Divorciado/a";
		 	break;

		 	case "4":
		 	estadoCivil = "Viudo/a";
		 	break;
		 }	
	 estadoCivil = document.getElementById('EstadoCivil').value = estadoCivil;

	 sueldoBruto = prompt("Ingrese su sueldo bruto.");
	 	while(sueldoBruto<8000)
	 	{
	 		sueldoBruto = prompt("Reingrese su sueldo bruto.");
	 	}
	 sueldoBruto = document.getElementById('Sueldo').value = sueldoBruto;

	 numeroDeLegajo = prompt("Ingrese su numero de legajo.");
	 	while(numeroDeLegajo<0 || numeroDeLegajo>9999)
	 	{
	 		numeroDeLegajo = prompt("Reingrese su numero de legajo.");
	 	}
	 numeroDeLegajo = document.getElementById('Legajo').value = numeroDeLegajo;

	 nacionalidad = prompt("Indique su nacionalidad. 'A' si es argentino, 'E' si es extranjero, 'N' si es nacionalizado.");
	 	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	 	{
	 		nacionalidad = prompt("Indique su nacionalidad. 'A' si es argentino, 'E' si es extranjero, 'N' si es nacionalizado.");
	 	}
	 	switch(nacionalidad)
	 	{
	 		case "A":
	 		nacionalidad = "Argentino";
	 		break;

	 		case "E":
	 		nacionalidad = "Extranjero";
	 		break;

	 		case "N":
	 		nacionalidad = "Nacionalizado";
	 		break;
	 	}
	 nacionalidad = document.getElementById('Nacionalidad').value = nacionalidad;
}