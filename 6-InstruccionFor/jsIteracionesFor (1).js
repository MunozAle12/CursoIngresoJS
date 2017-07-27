function Mostrar()
{
	var contador;
	var respuesta;

	contador=0;
	respuesta = "si";

	for( ;respuesta=="si"; )//(se ejecuta una sola vez ; se ejecuta siempre ; se ejecuta de la segunda vez en adelante)
		{
			if(contador==10)
			{
				break;
			}
			contador++;//contador--
			console.log("Hola"+contador);
			respuesta = prompt("¿Desea continuar?");
		}
}