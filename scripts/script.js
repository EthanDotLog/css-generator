















const linkedPairs = {
  range: "",
  digit: ""
}



document.querySelectorAll(input[type="range"])

document.querySelectorAll(input[type="numbers"])







function linkPair(rangeId, digitId) {
  const rangeElement = document.getElementById(`${rangeId}`);
  const digitElement = document.getElementById(`${digitId}`);

  rangeElement.addEventListener('input', () => {
    digitElement.value = rangeElement.value;
  })

  digitElement.addEventListener('input', () => {
    rangeElement.value = digitElement.value
  })
}