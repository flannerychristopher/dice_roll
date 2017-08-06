const sideInput = document.getElementById('sideInput');
const dieInput = document.getElementById('dieInput');
const button = document.querySelector('button');
const resultDiv = document.getElementById('resultDiv');
let results = [];

const selectDieInput = document.getElementById('dieInput');
for (i = 2; i < 99; i++) {
  let option = document.createElement('option');
  option.innerText = i;
  selectDieInput.appendChild(option);
}

const selectSideInput = document.getElementById('sideInput');
for (i = 6; i < 99; i++) {
  let option = document.createElement('option');
  option.innerText = i;
  selectSideInput.appendChild(option);
}

let dice = {
  sides: 6,
  roll: function() {
    let result = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}

button.addEventListener("click", () => {
  dice.sides = parseInt(sideInput.value);
  let dieNumber = parseInt(dieInput.value);

  for (i = 0; i < dieNumber; i++) {
    let result = dice.roll();
    results[i] = result;
  }

  let resultHTML = '<ul>';
  let resultSum = 0;
  for (i = 0; i < results.length; i++) {
    resultHTML += '<li>' + results[i] + '</li> ';
    resultSum += results[i];
  }
  resultHTML += '</ul>';
  resultHTML += '<p> for a total of: ' + resultSum + '</p>';
  resultDiv.innerHTML = resultHTML;
});
