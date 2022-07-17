
let n1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let adicao = 0;
for (let index = 0; index < n1.length; index++) {
    console.log(n1[index]);
     adicao += n1[index];
} console.log(adicao);



let n2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < n2.length; index += 1) {
    soma += n2[index];
} let media = soma / n2.length;
if (media >= 20) {
    console.log('Valor maior que 20! O valor da média é de:',media);
} else {
    console.log('Valor menor que 20');
}



let n3 = [ ];

let maiorNumero = 0;

for (let index = 0; index < n3.length; index++) {
    if (n3[index] > maiorNumero) {
        maiorNumero = n3[index]
    }
}  console.log(maiorNumero);

let n4 = [70, 8, 100, 2,35, 67, 53, 23,25];
let numImpar = [];
for (let index = 0; index < n4.length; index++) {
    if (n4[index] % 2 !== 0) {
        numImpar.push(n4[index])
    }  
}  if (numImpar === 0) {
    console.log('nenhum numero');
} else {
    console.log('Numero(s) impares: ' + numImpar);
}



let arrayNumeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 100000000000;
for(let index = 0; index < arrayNumeros.length; index++) {
    if (arrayNumeros[index] < menorNumero) {
        menorNumero = arrayNumeros[index]
    }
}   console.log(menorNumero);

for (let index = 1; index <= 25; index++) {
    console.log(index);
}

let nu = [];
for (let index = 1; index <= 25; index++) {
    nu.push(index)
} 

for (let index = 0; index < nu.length; index++){
    let divisor = nu[index] / 2;
    console.log(divisor);
}
