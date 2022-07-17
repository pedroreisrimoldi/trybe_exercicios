let soma = 0;
let fruits = [3, 4, 10, 1, 12];

for (let index = 0; index < fruits.length; index++){
    soma = soma + fruits[index];
} 
if (soma <= 15) {
    console.log('Valor menor que 16.');
} else {
    console.log(soma);
}

let fatorial = 1;

for(let index = 10; index > 0; index--){
    fatorial = fatorial * index
} console.log(fatorial);

let word = 'tryber';
let palavraInvertida = [''];

for( let index = word.length - 1; index >= 0; index--){
    palavraInvertida.push(word[index]);
} console.log('Array com a palavra invertida: ' + palavraInvertida);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index++) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
} console.log(maiorPalavra);    

for (index = 0; index < array.length; index++) {
    if(array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
} console.log(menorPalavra);

let maiorNumeroPrimo = 0;
let numerosPrimos = true;
