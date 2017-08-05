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
