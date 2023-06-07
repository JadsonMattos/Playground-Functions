// Desafio 11 - Crie a função generatePhoneNumber
let buttonGeneratePhoneNumber = document.getElementById('buttonGeneratePhoneNumber');

const generatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let numberRepetead = 0;
    for (let j = 0; j < phoneNumber.length; j += 1) {
      if (phoneNumber[i] === phoneNumber[j]) {
        numberRepetead += 1;
      }
      if (numberRepetead === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  const DDD = phoneNumber.slice(0, 2).join('');
  const part1 = phoneNumber.slice(2, 7).join('');
  const part2 = phoneNumber.slice(7, 11).join('');
  return `(${DDD}) ${part1}-${part2}`;
};
buttonGeneratePhoneNumber.addEventListener('click', function() {
  let phoneNumberInput = document.getElementById('phoneNumberInput');
  let displayPhoneNumber = document.getElementById('displayPhoneNumber');
  let phoneNumberString = phoneNumberInput.value;
  let phoneNumberArray = phoneNumberString.split(',').map(number => parseInt(number.trim()));
  let phoneNumber = generatePhoneNumber(phoneNumberArray);
  displayPhoneNumber.textContent = phoneNumber;
});

// Desafio 12 -  Crie a função triangleCheck
let buttonCheckTriangle = document.getElementById('buttonCheckTriangle');

const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return !(lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB));
};
buttonCheckTriangle.addEventListener('click', function() {
  let lineAInput = document.getElementById('lineAInput');
  let lineBInput = document.getElementById('lineBInput');
  let lineCInput = document.getElementById('lineCInput');
  let displayTriangleResult = document.getElementById('displayTriangleResult');
  let lineA = parseFloat(lineAInput.value);
  let lineB = parseFloat(lineBInput.value);
  let lineC = parseFloat(lineCInput.value);
  let isTriangle = triangleCheck(lineA, lineB, lineC);
  if (isTriangle) {
    displayTriangleResult.textContent = 'É possível formar um triângulo com os comprimentos dos lados fornecidos.';
  } else {
    displayTriangleResult.textContent = 'Não é possível formar um triângulo com os comprimentos dos lados fornecidos.';
  }
});

// Desafio 13 - Crie a função hydrate
let buttonHydrate = document.getElementById('buttonHydrate');

const hydrate = (string) => {
  const numbers = /\d+/g;
  const numberInString = string.match(numbers);
  let result = 0;
  if (numberInString) {
    numberInString.forEach((number) => {
      result += parseInt(number, 10);
    });
  }
  if (result === 1) {
    return '1 copo de água';
  }
  return `${result} copos de água`;
};
buttonHydrate.addEventListener('click', function() {
  let drinkInput = document.getElementById('drinkInput');
  let displayHydrationResult = document.getElementById('displayHydrationResult');
  let drinksString = drinkInput.value;
  let hydrationResult = hydrate(drinksString);
  displayHydrationResult.textContent = hydrationResult;
});

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
