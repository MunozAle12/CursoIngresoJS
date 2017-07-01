/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumUno= document.getElementById('numeroUno').value;
	var NumDos= document.getElementById('numeroDos').value;
    
    NumUno= parseInt(NumUno);
    NumDos= parseInt(NumDos);
    
    var resultado= (NumUno+NumDos);
    alert(resultado);
}

