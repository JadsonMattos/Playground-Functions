// Desafio 1 - Crie a função compareTrue
let button = document.getElementById('buttonCompare');
const compareTrue = (animal1, animal2) => animal1 && animal2;
button.addEventListener('click', function() {
  let select1 = document.getElementById('animal1');
  let select2 = document.getElementById('animal2');
  let result = document.getElementById('display');
  let animal1 = select1.value === 'true';
  let animal2 = select2.value === 'true';
  let comparisonResult = compareTrue(animal1, animal2);
  result.textContent = comparisonResult;
});

// Desafio 2 - Crie a função splitSentence
let buttonSplit = document.getElementById('buttonSplit');
const splitSentence = (word) => word.split(' ');
buttonSplit.addEventListener('click', function() {
  let input = document.getElementById('sentence');
  let result = document.getElementById('displaySplit');
  let sentence = input.value;
  let splittedWords = splitSentence(sentence);
  result.textContent = splittedWords.join(', ');
});

// Desafio 3 - Crie a função concatName
let buttonConcat = document.getElementById('buttonConcat')
const concatName = (itens) => {
  const lastItem = itens[itens.length - 1];
  const firstItem = itens[0];
  return `${lastItem}, ${firstItem}`;
};
buttonConcat.addEventListener('click', function() {
  let input = document.getElementById('items');
  let result = document.getElementById('displayConcat');
  let itemsString = input.value;
  let itemsArray = itemsString.split(',');
  let concatenatedName = concatName(itemsArray);
  result.textContent = concatenatedName;
});

// Desafio 4 - Crie a função footballPoints
let buttonPoints = document.getElementById('buttonPoints');
const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);
buttonPoints.addEventListener('click', function() {
  let winsInput = document.getElementById('wins');
  let tiesInput = document.getElementById('ties');
  let result = document.getElementById('displayPoints');
  let wins = parseInt(winsInput.value);
  let ties = parseInt(tiesInput.value);
  const points = (wins * 3) + (ties * 1);
  result.textContent = points;
});

// Desafio 5 - Crie a função highestCount
// function highestCount(int) {
//   let count = 0;
//   let highestNumber = int[0];
//   for (let i = 1; i < int.length; i += 1) {
//     if (int[i] > highestNumber) {
//       highestNumber = int[i];
//     }
//   }
//   for (let i = 0; i < int.length; i += 1) {
//     if (int[i] === highestNumber) {
//       count += 1;
//     }
//   }
//   return count;
// }
let buttonCount = document.getElementById('buttonCount');
const highestCount = (int) => {
  const highestNumber = Math.max(...int);
  const repetead = int.filter((number) => number === highestNumber).length;
  return repetead;
};
buttonCount.addEventListener('click', function() {
  let input = document.getElementById('numbers');
  let result = document.getElementById('displayCount');
  let numbersString = input.value;
  let numbersArray = numbersString.split(',').map(Number);
  const highestNumber = Math.max(...numbersArray);
  const repeated = numbersArray.filter(number => number === highestNumber).length;
  result.textContent = repeated;
});

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
let buttonArea = document.getElementById('buttonArea');

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  let areaTotal;
  if (form === 'triângulo') {
    areaTotal = calcTriangleArea(base, height);
    return `O valor da área do triângulo é de: ${areaTotal}`;
  } 
  if (form === 'retângulo') {
    areaTotal = calcRectangleArea(base, height);
    return `O valor da área do retângulo é de: ${areaTotal}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
buttonArea.addEventListener('click', function() {
  let baseInput = document.getElementById('base');
  let heightInput = document.getElementById('height');
  let formInput = document.getElementById('form');
  let result = document.getElementById('displayArea');
  let base = parseInt(baseInput.value);
  let height = parseInt(heightInput.value);
  let form = formInput.value;
  let areaText = calcAllAreas(base, height, form);
  result.textContent = areaText;
});

// Desafio 7 - Crie a função catAndMouse
let buttonCatMouse = document.getElementById('buttonCatMouse');

const catAndMouse = (mouse, cat1, cat2) => {
  const cat1ToMouse = Math.abs(mouse - cat1);
  const cat2ToMouse = Math.abs(mouse - cat2);
  if (cat1ToMouse < cat2ToMouse) {
    return 'cat1';
  }
  if (cat1ToMouse > cat2ToMouse) {
    return 'cat2';
  } 
  if (cat1ToMouse === cat2ToMouse) return 'os gatos trombam e o rato foge';
};
buttonCatMouse.addEventListener('click', function() {
  let mouseInput = document.getElementById('mouse');
  let cat1Input = document.getElementById('cat1');
  let cat2Input = document.getElementById('cat2');
  let result = document.getElementById('displayResult');
  let mouse = parseInt(mouseInput.value);
  let cat1 = parseInt(cat1Input.value);
  let cat2 = parseInt(cat2Input.value);
  let catMouseResult = catAndMouse(mouse, cat1, cat2);
  result.textContent = catMouseResult;
});

// Desafio 8 - Crie a função fizzBuzz
let buttonFizzBuzz = document.getElementById('buttonFizzBuzz');

function fizzBuzz(numbers) {
  const arrayString = [];
  for (const element of numbers) {
    if (element % 3 === 0 && element % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (element % 3 === 0) {
      arrayString.push('fizz');
    } else if (element % 5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}
buttonFizzBuzz.addEventListener('click', function() {
  let numbersInput = document.getElementById('numberFizz');
  let result = document.getElementById('displayFizz');
  let numbersString = numbersInput.value;
  let numbersArray = numbersString.split(',').map(Number);
  let fizzBuzzResult = fizzBuzz(numbersArray);
  result.textContent = fizzBuzzResult.join(', ');
});

// Desafio 9 - Crie a função encode e a função decode
let buttonEncode = document.getElementById('buttonEncode');
let buttonDecode = document.getElementById('buttonDecode');

const encode = (string) => {
  const vowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  return string.replace(/[aeiou]/g, (vowel) => vowels[vowel]);
};
buttonEncode.addEventListener('click', function() {
  let encodeInput = document.getElementById('encodeInput');
  let encodeResult = document.getElementById('displayEncodeResult');
  let textToEncode = encodeInput.value;
  let encodedText = encode(textToEncode);
  encodeResult.textContent = encodedText;
});

const decode = (string) => {
  const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return string.replace(/[1-5]/g, (number) => numbers[number]);
};
buttonDecode.addEventListener('click', function() {
  let decodeInput = document.getElementById('decodeInput');
  let decodeResult = document.getElementById('displayDecodeResult');
  let textToDecode = decodeInput.value;
  let decodedText = decode(textToDecode);
  decodeResult.textContent = decodedText;
});

// Desafio 10 - Crie a função techList
let buttonCreateList = document.getElementById('buttonCreateList');

const techList = (array, name) => {
  if (!array) {
    return [];
  }
  const objectList = array.slice().sort();
  const list = objectList.map((tech) => ({ tech, name }));
  return list;
};
buttonCreateList.addEventListener('click', function() {
  let techArrayInput = document.getElementById('techArrayInput');
  let nameInput = document.getElementById('nameInput');
  let displayTechList = document.getElementById('displayTechList');
  let techArrayString = techArrayInput.value;
  let name = nameInput.value;
  let techArray = techArrayString.split(',').map(tech => tech.trim());
  let techListArray = techList(techArray, name);
  displayTechList.innerHTML = '';
  techListArray.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.tech} - ${item.name}`;
    displayTechList.appendChild(li);
  });
});

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
