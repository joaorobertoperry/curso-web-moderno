var nome = "Caneta";
var quantidade = 10; //= significa atribuir
var preco = 6.4;
var imposto = 1.5;
var PrecoFinal= preco + imposto

console.log(nome);
console.log(quantidade); 
//console.log(10) Valor literário
console.log(preco);
console.log(imposto);
console.log(PrecoFinal);

nome = "Caneta BIC"; //Pode-se alterar a variável
console.log(nome);

blabla = 123;
console.log(blabla); /* Ele declara a variável mesmo sem a palavra "var" mas isso vai ter efeitos 
colaterais no seu código,então USE o "Var = valor;" */

//"Let" também define uma variável mas existe uma diferença entre Let e Var