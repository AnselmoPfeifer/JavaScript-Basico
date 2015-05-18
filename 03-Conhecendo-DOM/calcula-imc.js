//Calcula IMC
var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");


//Criando objetos em javascript
var paciente = {peso : tdPeso.textContent, altura : tdAltura.textContent};
//para imprimir chama o obejto mais atributo.
//paciente.peso;
//paciente.altura;
//true
if (paciente.altura != 0) {
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	var tdImc = document.getElementById("imc-1");
	tdImc.textContent = imc;
	console.log(imc);
}else{
	console.log("Nao executei porque a altura eh igual a zero");
}


var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");


//Criando objetos em javascript
var paciente = {peso : tdPeso.textContent, altura : tdAltura.textContent};
//para imprimir chama o obejto mais atributo.
//paciente.peso;
//paciente.altura;
//true
if (paciente.altura != 0) {
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;
	console.log(imc);
}else{
	console.log("Nao executei porque a altura eh igual a zero");
}
