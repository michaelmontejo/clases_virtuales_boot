let number = prompt("ingrese la edad");
if(number < 18){
	alert("La persona es menor de edad");
}else{
	alert("La persona es mayor de edad");
};

// zodiacal signs
let month = prompt("ingrese el mes");
let day = prompt("ingrese el dia");
if(month == 1 && (day >=1 && day <=19)){
	alert("El signo es capricornio");
}else if(month == 1 && (day >=20 && day <=31)){
	alert("El signo es Acuario");

	// Complete the calculus of zodiacal signs

}else{
	alert("Fecha introducida no es válida");
}