function Mostrar()
{
	var contadorDiasHabiles;
	var diasHabiles;
	var importeVentas;
	var importeMaximo;
	var importeMinimo;

	importeVentas = prompt("Ingrese importe.");
	importeMinimo = 0;
	importeMaximo = 0;
	contadorDiasHabiles = 0;
	diasHabiles = 0;

	while(importeVentas<=0)
	{
		importeVentas = prompt("Ingrese importe.")
	}
	while(DiasHabiles<=24)
	{
		contadorDiasHabiles = contadorDiasHabiles + 1;
		importeVentas = parseInt(importeVentas);
		
		if(contadorDiasHabiles==1)
		{
			importeVentas = importeMinimo;
			importeVentas = importeMaximo;
		}
		else
		{
			if(importeVentas>importeMaximo)
			{
				importeVentas = importeMaximo;
			}
			else
				importeVentas = importeMinimo;
		}
	}
	document.write("El mayor importe fue "+importeMaximo+" y el menor importe fue "+importeMinimo);
}