const value1 = document.getElementById('value1').value;
const value2 = document.getElementById('value2').value;
const paragrafo = document.getElementById('result');
    const verify = (value1, value2) => {
        if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error ('Só aceita entrada de valores numéricos.');
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

  