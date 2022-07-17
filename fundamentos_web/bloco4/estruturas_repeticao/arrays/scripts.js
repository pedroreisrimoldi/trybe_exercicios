let num= 8;
for (let contador = 1; contador <=9; contador++) {
    console.log(num * contador);
}


let listaNomes = ['Maria', 'Pedro', 'Núbia', 'Carlos', 'Bernardo', 'André', 'Arthur', 'Amanda'];
let mensagem;
for (let index = 0; index < listaNomes.length; index++) {
     mensagem = 'Boas Vindas, ' + listaNomes[index] + '!';
     console.log(mensagem);
    }  

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);
menu.push('Contato');
console.log(menu);