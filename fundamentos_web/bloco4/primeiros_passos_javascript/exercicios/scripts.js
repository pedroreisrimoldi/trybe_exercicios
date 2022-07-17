const a = 2;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(b / a);
console.log(b % a);

const c = 5;
const d = 6;

if (c > d) {
 console.log('C é maior que D');
} 
else {
    console.log('D é maior que C');
}



let e = 4;
let f = 5;
let g = 7;

if (e > f && e > g) {
    console.log('O maior numero é: ', e);
}
else if (f > g && f > e) {
    console.log('O maior numero é: ', f);
} 
else (g > f && g > e) ;
    console.log('O maior numero é: ', g);

const h = 0;

if (h >= 1) {
    console.log('Este é um número positivo');
} else if (h < 0) {
    console.log('Este é um número negativo');
} else {
    console.log('Zero')}

let anguloA = 100;
let anguloB = 30;
let anguloC = 60;

let somaAngulos = anguloA + anguloB + anguloC;    
let todosAlgulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todosAlgulosPositivos) {
    if(somaAngulos === 180) {
        console.log('true')
    } else {
        console.log('false')
    }
}

let pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('Rei > Pode movimentar apenas uma casa por vez, em qualquer direção. ');
        break;
    case 'rainha':
        console.log('Rainha > Pode mover-se em qualquer direção, quantas casas estiverem disponíveis.');
        break;
    case 'bispo':
        console.log('Bispo > Pode mover-se quantas casas estiverem disponíveis, apenas nas diagonais.');
        break;
    case 'cavalo':
        console.log('Cavalo > Move duas casas para frente, e, uma para direita ou esquerda.');
        break;
    case 'torre':
        console.log('Torre > Move quantas casas disponíveis em frente.'); 
        break;
    case 'peao':
        console.log('Peão > Move apenas uma casa em frente ou para os lados.');      
        break; 
}

let nota = 90;

if (nota < 50) {
    console.log('F');
} 
else if (nota >= 50 && nota < 60) {
    console.log('E');
} 
else if (nota >=60 && nota < 70) {
    console.log('D');
} 
else if (nota >= 70 && nota < 80) {
    console.log('C');
}
else if (nota >= 80 && nota < 90) {
    console.log('B');
}
else if (nota >= 90 && nota <= 100) {
    console.log("A");
} 
else {
    console.log('Error');
};

const n1 = 4;
const n2 = 2;
const n3 = 4;

let contador = false;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0 ) {
    contador = true;
}  console.log(contador);

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !==0) {
    contador = true
} console.log(contador);

const valorDoProduro = 1;
const valorDeVenda = 3;

if (valorDoProduro >= 0 && valorDeVenda >= 0) {
  const precoTotalProduto = valorDoProduro * 1.2;
  const lucro = (valorDeVenda - precoTotalProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Error, os valores não podem ser negativos");
};





let salarioBruto = 3500;
let descontoInss;

if (salarioBruto <= 1556.94) {
    descontoInss = (salarioBruto * 0.08);
} 
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = (salarioBruto * 0.09);
} 
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = (salarioBruto * 0.11)
} 
else {
    descontoInss = 570.88
} console.log('Seu salário bruto é: ', salarioBruto ,'O desconto de inss sobre salário: ', descontoInss)

let salarioMenosInss = (salarioBruto - descontoInss);
let descontoIr;

if (salarioBruto <= 1903.98) {
    descontoIr = 0
} 
else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2594.92) {
    descontoIr = (salarioMenosInss * 0.075) - 142.8;
} 
else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
    descontoIr = (salarioMenosInss * 0.15) - 354.80;
} 
else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
    descontoIr = (salarioMenosInss * 0.225) - 636.13;
} 
let salarioLiquido = (salarioMenosInss - descontoIr);
console.log('Seu salário líquido é de: ', salarioLiquido);
console.log(' O valor do seu salario, menos Inss:', salarioMenosInss ,'Imposto de renda, menos parcela a deduzir: ', descontoIr);
