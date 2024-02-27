const shadowBoxEl = document.getElementById("shadow-box-model");















const linkedPairs = {
  range: [],
  digit: [],
}

const userValues = {

}




const findRanges = document.querySelectorAll(`input[type="range"]`)

const findNumbers = document.querySelectorAll(`input[type="number"]`)


for (let i = 0; i < findRanges.length; i++) {
  linkedPairs["range"].push(findRanges[i].id);
}

for (let i = 0; i < findNumbers.length; i++) {
  linkedPairs["digit"].push(findNumbers[i].id)
}









function linkPair(rangeId, digitId) {
  const rangeElement = document.getElementById(`${rangeId}`);
  const digitElement = document.getElementById(`${digitId}`);

  rangeElement.addEventListener('input', () => {
    digitElement.value = rangeElement.value;
    userValues[digitElement.id] = digitElement.value
  })

  digitElement.addEventListener('input', () => {
    rangeElement.value = digitElement.value
    userValues[rangeElement.id] = rangeElement.value
  })
}

for (let i = 0; i < linkedPairs.range.length; i++) {
  linkPair(linkedPairs.range[i], linkedPairs.digit[i])
}



const findColor = document.getElementById("color");

findColor.addEventListener("change", () => {
  HexRip(findColor.value)
})


function HexRip(hex) {
  if (hex.length === 7) {
    const userHexRed = parseInt(hex.slice(1, 3), 16);
    const userHexGreen = parseInt(hex.slice(3, 5), 16);
    const userHexBlue = parseInt(hex.slice(5-7), 16);  
    userValues["red"] = userHexRed;
    userValues["green"] = userHexGreen;
    userValues["blue"] = userHexBlue;
  }
  
}

document.querySelectorAll(`input[type="radio"]`).forEach(function(radios) {
  radios.addEventListener("change", (radios) => {
    userValues["inset"] = radios.target.value
  })
});




const radioTrueEl = document.getElementById("radio-true");
const radioFalseEl = document.getElementById("radio-false");

const test3 = () => {
console.log(radioFalseEl.value, radioTrueEl.value);
console.log(radioFalseEl.checked , radioTrueEl.checked);
}