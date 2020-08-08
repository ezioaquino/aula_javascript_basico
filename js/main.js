

function botao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));

}

function redirecionar() {
    //window.open("http://digitalinnovation.one");
    window.location.href = "https://digitalinnovation.one";
}

function mouseOver(elemento) {
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
/*
function botao() {
    alert("Obrigado por clicar!");
}
*/


/*
function validarIdade(idade) {
    var idade;
    if (idade >= 18) {
        idade = true
    } else {
        idade = false
    }
    return idade;
}
var idade = prompt("Qual a sua idade?");
var validar = validarIdade(idade);
alert(validar);
*/
/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(soma(5, 2));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d);
alert("nós estamos no mês " + (d.getMonth() + 1));
alert(d.getMinutes());
*/
/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}
*/

/*
var count = 0; 

while (count <= 5) {
   console.log(count);
    count = ++;
}
*/

/*
var idade = prompt("Qual é a sua idade?");



if (idade >= 18) {
    alert("maior de idade");

} else {
    alert("menor de idade");
}
*/
/*
var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
alert(frutas[1].nome);
*/


/*
var fruta = ["laranja", "maçã", "pera"];
console.log(fruta);
console.log(fruta.toString());
console.log(fruta.join(" - "));
*/

//nome = "Ezio";
//idade = 40;
//alert(nome + " tem " + idade + " anos");
//alert(" Meu primeiro JavaScript");