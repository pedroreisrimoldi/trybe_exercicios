let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; console.log('Bem vinda, ' + info.personagem );
  info['recorrente'] = 'Sim';
  console.log(info);
  for (let key in info) {
    console.log(info[key]);
  }
let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, '+' Dell' +'s ' + 'Four Color Comics',
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim',  
}
for(let key in info && let (i) in info1) {
 console.log(info[key], info1[i])
}