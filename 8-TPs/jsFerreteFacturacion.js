/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var Producto1;
	var Producto2;
	var Producto3;
	var resultado;

	Producto1 = document.getElementById('PrecioUno').value;
	Producto2 = document.getElementById('PrecioDos').value;
	Producto3 = document.getElementById('PrecioTres').value;

	Producto1 = parseInt(Producto1);
	Producto2 = parseInt(Producto2);
	Producto3 = parseInt(Producto3);

	resultado = Producto1 + Producto2 + Producto3;

	alert(resultado);
}
function Promedio () 
{
	var Producto1;
	var Producto2;
	var Producto3;
	var resultado;

	Producto1 = document.getElementById('PrecioUno').value;
	Producto2 = document.getElementById('PrecioDos').value;
	Producto3 = document.getElementById('PrecioTres').value;

	Producto1 = parseInt(Producto1);
	Producto2 = parseInt(Producto2);
	Producto3 = parseInt(Producto3);

	resultado = (Producto1 + Producto2 + Producto3) / 3;

	alert(resultado);
}
function PrecioFinal () 
{
	var Producto1;
	var Producto2;
	var Producto3;
	var resultado;

	Producto1 = document.getElementById('PrecioUno').value;
	Producto2 = document.getElementById('PrecioDos').value;
	Producto3 = document.getElementById('PrecioTres').value;

	Producto1 = parseInt(Producto1);
	Producto2 = parseInt(Producto2);
	Producto3 = parseInt(Producto3);

	resultado = Producto1 + Producto2 + Producto3;
	resultado = resultado * 1.21;

	alert(resultado);
}