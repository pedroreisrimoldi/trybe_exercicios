const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const lseScope = 'Não devo ser utilizada fora meu escopo (else)';
let testingScope = (escopo) => (escopo === true) ? console.log(`${ifScope}  ótimo, fui utilizada no escopo !`) :  console.log(`${lseScope}`);;

testingScope(false)

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

const result = ordena()
console.log(`Os números ${result} se encontram ordenados de forma crescente!`);

const ordenar = () => {
const order = oddsAndEvens
order.sort((a, b) => a - b);
return order
} 
const verificar = ordenar(oddsAndEvens);
console.log(`Os números ${verificar} se encontram ordenados de forma crescente!`);

const fatorial = number => {
    let resultado = 1;
    for (let index = 2; index <= number; index++){
        resultado *= number;
    }
    return resultado
} 

const maiorPalavra = (frase) => {
    
    let palavra = frase.split(' ');
    for (let index = 0; index < palavra.length; index++) {    
       
        if (palavra[index] > maior.lenght) {
            
            maior = palavra[index]
        } 
        return maior
    }
}  
console.log(maiorPalavra('que saber se vai funcionar'))