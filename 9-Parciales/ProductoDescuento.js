function Mostrar()
{
	var importe;
	var precioFinal;

	importe = prompt("Ingrese importe del producto.");
	importe = parseInt(importe);
	precioFinal = importe * 0.21;

	document.write("El precio final del producto es: "+precioFinal);
}