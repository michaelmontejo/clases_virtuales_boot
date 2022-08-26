
let option_menu = prompt("ingresa la opcion del ejercicio que quieres ver");

switch (option_menu) {
		case "1":
				alert("Este programa calcula el mayor de dos numeros");
				let number1 = prompt ("ingrese un numero");
				let number2 = prompt ("ingrese el segundo numero");

				if(number1>=number2) {
						alert("el numero mayor es" + number1);
				}else{
						alert("el numero mayor es" + number2);
				};
				break;

		case "2":
				alert("Este programa calcula la conversion a 3 divisas dadas.");
				let divisa =  parseInt(prompt("valor a convertir 1. Dolar, 2.Euro, 3.Yenes") )  // int
				let valor =  parseInt(prompt("ingresa el valor en pesos a convertir") )  // int

				if ((divisa < 1 ) || (divisa > 3 )) {
						alert("el numero de divisa no se encuentra disponible:" )
				}
				if (divisa == 1) {
						conversion = valor *4400
						alert("paso a dolar es:" + conversion  )
				}else if (divisa == 2) {
						conversion = valor *4488
						alert("paso a euro es:" + conversion  )

				}else if (divisa == 3) {
						conversion = valor * 32
				}
				break;

		case "3":
				alert("Calcula el promedio de las notas de un estudiante");
				let note1 = parseInt(prompt("Ingresa la nota 1 (entre 1 y 5)"));
				let note2 = parseInt(prompt("Ingresa la nota 2 (entre 1 y 5)"));
				let note3 = parseInt(prompt("Ingresa la nota 3 (entre 1 y 5)"));
				const result = (note1 + note2 + note3) / 3;
				if(result < 3){
						alert("El estudiante va perdiendo con: " + result);
				}else{
						alert("El estudiante va pasando con: " + result);
				}
				break;

		default:
				alert("Opción no valida");
				break;
}
