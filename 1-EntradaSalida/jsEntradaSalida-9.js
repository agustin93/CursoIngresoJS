/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var num1=document.getElementById("sueldo").value;
    num1=parseInt(num1);
    resultado=(num1*1.1);
    var resultado;
    document.getElementById("resultado")=resultado;
    prompt("Resultado")=resultado;
}
