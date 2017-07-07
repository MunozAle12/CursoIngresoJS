function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota= Math.floor((Math.random() * 10) + 1);
alert(nota);
	if(nota>=9)
	{
		alert("Excelente");
	}
	else
	{
		if(nota>4&&nota<9)
		{
			alert("Aprobó");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN