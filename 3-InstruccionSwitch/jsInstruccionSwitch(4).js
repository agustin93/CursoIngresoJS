function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño)
{
    default:
        alert ("El mes tiene 31 días");
            break;

    case "Febrero":
        alert ("El mes tiene 28 días");
            break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert ("El mes tiene 30 días");
            break;                

}
}//FIN DE LA FUNCIÓN