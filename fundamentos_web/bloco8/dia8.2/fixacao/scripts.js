// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };
// numbers.forEach((item, posicao,tudo) => console.log(item, posicao, tudo));
// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

//names.forEach(convertToUpperCase);
//names.forEach((item, index, tudo) => console.log(item, index, `tamanho do array de objetos: ${tudo.length}`))
//console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
// ];
  
// const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };  
//    emailListInData.forEach((item) => showEmailList(item))

// const numbers = [19, 21, 30, 3, 45, 22, 15];
// console.log(numbers.find((number) => number % 15 === 0))

//  const names = ['João', 'Irene', 'Fernando', 'Maria'];
//  console.log(names.find((nome) => nome.length === 5))

//  const musicas = [
//      { id: '31031685', title: 'Partita in C moll BWV 997' },
//      { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//      { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//    ]
//    console.log(musicas.find((id) => id === 31031685))

   const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

   const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
   
//    console.log(verifyFirstLetter('M', listNames)); // true
//    console.log(verifyFirstLetter('x', listNames)); // false

   const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

   
//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const hasName = (arr, name) => {
 const achaNome = arr.some((elemento) => elemento === name)
 return achaNome
}

//console.log(hasName(names, 'Ana'))
// Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 18 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  
  const verifyAges = (arr, minimumAge) => {
    const verificacao = Object.values(arr).every((idade) => idade.age > minimumAge)
    return verificacao
}

//console.log(verifyAges(people, 20));

//1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
//
function ordenaIdade(parametro) {
const ordena = Object.values(parametro).sort((a, b) => b.age - a.age)
return ordena
}
console.log(ordenaIdade(people));