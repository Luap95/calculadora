var primeiroNumero;
var segundoNumero;
var operador = "";

//sistema de digitação
function teclado(tecla){
    var input = document.querySelector("input");
    if(input.value == "+" || input.value == "-" || input.value == "X" || input.value == "÷"){
        input.value = null;
    }
    input.value = input.value + tecla;
}
//digita o sinal operador
function defineOperacao(tecla){
    var input = document.querySelector("input");
    primeiroNumero = parseFloat(input.value);
    input.value = null;
    input.value = tecla;
    operador = tecla;
}

//digita o valor de igual
//tela emite o resultado
function calcula(){
    var input = document.querySelector("input");
    segundoNumero = parseFloat(input.value);

    var resultado;
    if(operador == "+"){
        resultado = primeiroNumero + segundoNumero;
    }
    if(operador == "-"){
        resultado = primeiroNumero - segundoNumero;
    }
    if(operador == "X"){
        resultado = primeiroNumero * segundoNumero;
    }
    if(operador == "÷"){
        resultado = primeiroNumero / segundoNumero;
    }
    input.value = resultado;
}
//limpa resultados
function limpa(){
    var input = document.querySelector("input");
    input.value="";
    primeiroNumero = "";
    segundoNumero = "";
    operador = "";
    
}

