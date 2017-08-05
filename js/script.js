const sideInput = document.getElementById('sideInput');
const dieInput = document.getElementById('dieInput');
const button = document.querySelector('button');
const resultDiv = document.querySelector('#resultDiv');
let results = [];

let selectDieInput = document.getElementById('dieInput');
for (i = 1; i < 99; i++) {
  let option = document.createElement('option');
  option.innerHTML = i
  selectDieInput.appendChild(option);
}

let selectSideInput = document.getElementById('sideInput');
for (i = 1; i < 99; i++) {
  let option = document.createElement('option');
  option.innerHTML = i
  selectSideInput.appendChild(option);
}

let dice = {
  sides: 6,
  roll: function() {
    let result = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}

button.addEventListener("click", function() {
  console.log("test");
  dice.sides = parseInt(sideInput.value);
  let dieNumber = parseInt(dieInput.value);

  for (i = 0; i < dieNumber; i++) {
    let result = dice.roll();
    results[i] = result;
    console.log(results);
  }

  let resultHTML = '<ul>';
  let resultSum = 0;
  for (i = 0; i < results.length; i++) {
    resultHTML += '<li>' + results[i] + '</li>';
    resultHTML += ' ';
    resultSum += results[i];
  }
  resultHTML += '</ul>';
  resultHTML += '<p> for a total of: ' + resultSum + '</p>';

  resultDiv.innerHTML = resultHTML;
});
