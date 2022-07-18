const value1 = document.getElementById('value1').innerText;
const value2 = document.getElementById('value2').innerText;
const paragrafo = document.getElementById('result');
   
const valoresVazios = (value1,value2) => {
  if (value1 === '' || value2 === '') {
    throw new Error ('Não pode haver campos vazios.')
  }
}

const verify = (value1, value2) => {
    try {
       valoresVazios(value1,value2);
      if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error ('Só aceita entrada de valores numéricos.');
       }
     } catch (error) {
      return error.message;
     }
    }   

    const sum = (value1, value2) => {
      try {
        verify(value1,value2);
        let resultado = value1 + value2;
        paragrafo.innerText = `Resultado: ${resultado}`;
        
    } catch (error) {
        return error.message;
    }
  }  

  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }

  