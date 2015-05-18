//Calcula IMC
var peso = 100;
var altura = 0;

//true
if (altura != 0) {
	var imc = peso / (altura * altura);
	console.log(imc);
}else{
	console.log("Nao executei porque a altura eh igual a zero");
}
