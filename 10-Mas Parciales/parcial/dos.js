function Mostrar()
{
  	var importe;
  	var importeFinal;

  	importe = prompt("Ingrese importe del producto.");
  	importe = parseInt(importe);
  	importeFinal = (importe * 0.21) + importe;
	importeFinal = parseFloat(importeFinal);
	importeFinal = document.getElementById('importeFinal').value = importeFinal;
}
