function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) 
	{
	case "Febrero":
		alert("Tiene 28 dias");
		break;
	case "abril":
        alert("Tiene 30 dias");
    	break;
    case "Junio":
    	alert("Tiene 30 dias");
    	break;    
    case "Septiembre":
    	alert("Tiene 30 dias");
    	break;    
    case "Noviembre":
    	alert("Tiene 30 dias")
    	break;
    default:
    	alert("Tiene 31 dias");
    }
//alert (mesDelAño);
}//FIN DE LA FUNCIÓN