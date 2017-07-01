/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumUno= document.getElementById('numeroUno').value;
	var NumDos= document.getElementById('numeroDos').value;
    
    NumUno= parseInt(NumUno);
    NumDos= parseInt(NumDos);
    
    var resultado= (NumUno+NumDos);
    alert("La suma es " +resultado);
}

function restar()
{
	var NumUno= document.getElementById('numeroUno').value;
	var NumDos= document.getElementById('numeroDos').value;
    
    NumUno= parseInt(NumUno);
    NumDos= parseInt(NumDos);
    
    var resultado= (NumUno-NumDos);
    alert("La resta es " +resultado);
}

function multiplicar()
{ 
	var NumUno= document.getElementById('numeroUno').value;
	var NumDos= document.getElementById('numeroDos').value;
    
    NumUno= parseInt(NumUno);
    NumDos= parseInt(NumDos);
    
    var resultado= (NumUno*NumDos);
    alert("La multiplicación es " +resultado);
}

function dividir()
{
	var NumUno= document.getElementById('numeroUno').value;
	var NumDos= document.getElementById('numeroDos').value;
    
    NumUno= parseInt(NumUno);
    NumDos= parseInt(NumDos);
    
    var resultado= (NumUno/NumDos);
    alert("La división es " +resultado);
}

