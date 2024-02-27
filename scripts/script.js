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









function linkPair(rangeElement, digitElement) {

  rangeElement.addEventListener('input', () => {
    digitElement.value = rangeElement.value;
    userValues[rangeElement.id] = digitElement.value
    printShadow()
  })

  digitElement.addEventListener('input', () => {
    rangeElement.value = digitElement.value
    userValues[rangeElement.id] = rangeElement.value
    printShadow()
  })
}

for (let i = 0; i < linkedPairs.range.length; i++) {
  const rangeElement = document.getElementById(`${linkedPairs.range[i]}`);
  const digitElement = document.getElementById(`${linkedPairs.digit[i]}`);

  linkPair(rangeElement, digitElement)

  userValues[rangeElement.id] = rangeElement.value
}



const findColor = document.getElementById("color");

findColor.addEventListener("change", () => {
  HexRip(findColor.value)
  printShadow()
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
    if (radios.target.value === "true") {
      userValues["inset"] = "inset"
    } else {
      userValues["inset"] = ""
    }
    console.log(radios.target.value)
    printShadow()
  })
});




const radioTrueEl = document.getElementById("radio-true");
const radioFalseEl = document.getElementById("radio-false");

const test3 = () => {
console.log(radioFalseEl.value, radioTrueEl.value);
console.log(radioFalseEl.checked , radioTrueEl.checked);
}


function printShadow() {
shadowBoxEl.style = "";
if (userValues.inset === "inset") {
shadowBoxEl.style = `
  box-shadow: ${userValues.inset} ${userValues.sliderHoff}px ${userValues.sliderVoff}px ${userValues.sliderBlur}px ${userValues.sliderSpread}px rgba(${userValues.red}, ${userValues.green}, ${userValues.blue}, ${userValues.sliderShadow});
`
}else {
  shadowBoxEl.style = "";
  shadowBoxEl.style = `
  box-shadow: ${userValues.sliderHoff}px ${userValues.sliderVoff}px ${userValues.sliderBlur}px ${userValues.sliderSpread}px rgba(${userValues.red}, ${userValues.green}, ${userValues.blue}, ${userValues.sliderShadow});
`
}
}


function startShow() {
  HexRip(findColor.value)
  printShadow()
}

startShow()