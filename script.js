// script.js
const botões = document.querySelectorAll('.botão');
const resultado = document.getElementById('resultado');

let operação = '';
let número1 = '';
let número2 = '';

botões.forEach(botão => {
  botão.addEventListener('click', () => {
    const valor = botão.textContent;

    if (valor === 'C') {
      operação = '';
      número1 = '';
      número2 = '';
      resultado.textContent = '';
    } else if (valor === '=') {
      if (operação === '+') {
        resultado.textContent = parseFloat(número1) + parseFloat(número2);
      } else if (operação === '-') {
        resultado.textContent = parseFloat(número1) - parseFloat(número2);
      } else if (operação === '*') {
        resultado.textContent = parseFloat(número1) * parseFloat(número2);
      } else if (operação === '/') {
        resultado.textContent = parseFloat(número1) / parseFloat(número2);
      }
    } else if (['+', '-', '*', '/'].includes(valor)) {
      operação = valor;
      número1 = resultado.textContent;
      número2 = '';
    } else {
      if (número2 === '') {
        número2 = valor;
      } else {
        número2 += valor;
      }
      resultado.textContent = número2;
    }
  });
});