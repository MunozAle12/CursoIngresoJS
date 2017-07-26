/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
	var temperaturaFahrenheit;
	var resultado;

	temperaturaFahrenheit = document.getElementById('Temperatura').value;
	temperaturaFahrenheit= parseInt(temperaturaFahrenheit);

	resultado = temperaturaFahrenheit-32;
	resultado = parseInt(resultado);

	alert(+temperaturaFahrenheit+" Fahrenheit son "+resultado+" centigrados");
}

function CentigradosFahrenheit ()
{
	var temperaturaCentigrados;
	var resultado;

	temperaturaCentigrados = document.getElementById('Temperatura').value;
	temperaturaCentigrados = parseInt(temperaturaCentigrados);

	resultado = temperaturaCentigrados + 32;
	resultado= parseInt(resultado);

	alert(+temperaturaCentigrados+" centigrados son "+resultado+" Fahrenheit");
}