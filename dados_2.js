let preco = 19.90
let desconto = 0.4

console.log(19.9 * 0.6);
console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1-desconto);
console.log(precoComDesconto);

//Mesma coisa só que com formas diferentes de sintaxe, mas significa preço com 40% de desconto

let nome = "Caderno"; //String (Texto)> sequencia de símbolos
let categoria = "Papelaria";
console.log("Produto: " + nome 
+ ", Categoria: " + categoria
+ ", Preço: " + preco
+ ", Desconto: " + desconto);  //o   +  também  junta um texto no outro

console.log(1 + 1);
console.log("1"+"1");