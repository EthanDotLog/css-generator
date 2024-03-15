
















//find elements for linked values (slider/input) on page. range are the sliders, numbers are the inputs
const findRanges = document.querySelectorAll(`input[type="range"]`)
const findNumbers = document.querySelectorAll(`input[type="number"]`)

//store ids for slider/input to be linked
const linkedPairs = {
  range: [],
  digit: [],
}

const userValues = {
  red: 0,
  blue: 0,
  green: 0,
};

//pushes the values into linked pairs for all slider/inputs
for (let i = 0; i < findRanges.length; i++) {
  linkedPairs["range"].push(findRanges[i].id);
}
for (let i = 0; i < findNumbers.length; i++) {
  linkedPairs["digit"].push(findNumbers[i].id)
}


for (let i = 0; i < linkedPairs.range.length; i++) {
  const rangeElement = document.getElementById(`${linkedPairs.range[i]}`);
  const digitElement = document.getElementById(`${linkedPairs.digit[i]}`);

  linkPair(rangeElement, digitElement)
  userValues[rangeElement.id] = rangeElement.value;
}


//adds event listeners to sliders using infro from pulled sliders and inputs
function linkPair(rangeElement, digitElement) {
  rangeElement.addEventListener('input', () => {
    digitElement.value = rangeElement.value;
    userValues[rangeElement.id] = digitElement.value
  })

  digitElement.addEventListener('input', () => {
    rangeElement.value = digitElement.value
    userValues[rangeElement.id] = rangeElement.value
  })
}

//find color element
const findColor = document.getElementById("color");

//add listener event
findColor.addEventListener("change", () => {
  hexRip(findColor.value)
})


function hexRip(hex) {
  if (hex.length === 7) {
    const userHexRed = parseInt(hex.slice(1, 3), 16);
    const userHexGreen = parseInt(hex.slice(3, 5), 16);
    const userHexBlue = parseInt(hex.slice(5-7), 16);  
    userValues["red"] = userHexRed;
    userValues["green"] = userHexGreen;
    userValues["blue"] = userHexBlue;
  }
  
}



//finds and adds event to track if display should be inset or not.
document.querySelectorAll(`input[type="radio"]`).forEach(function(radios) {
  radios.addEventListener("change", (radios) => {
    if (radios.target.value === "true") {
      userValues["inset"] = "inset"
    } else {
      userValues["inset"] = ""
    }
    console.log(radios.target.value)
  })
});



















// const shadowBoxEl = document.getElementById("shadow-box-model");

// function printShadow() {
// shadowBoxEl.style = "";
// if (userValues.inset === "inset") {
// shadowBoxEl.style = `
//   box-shadow: ${userValues.inset} ${userValues.sliderHoff}px ${userValues.sliderVoff}px ${userValues.sliderBlur}px ${userValues.sliderSpread}px rgba(${userValues.red}, ${userValues.green}, ${userValues.blue}, ${userValues.sliderShadow});
// `
// }else {
//   shadowBoxEl.style = "";
//   shadowBoxEl.style = `
//   box-shadow: ${userValues.sliderHoff}px ${userValues.sliderVoff}px ${userValues.sliderBlur}px ${userValues.sliderSpread}px rgba(${userValues.red}, ${userValues.green}, ${userValues.blue}, ${userValues.sliderShadow});
// `
// }
// }


// function startShow() {
//   HexRip(findColor.value)
//   printShadow()
// }

// startShow()