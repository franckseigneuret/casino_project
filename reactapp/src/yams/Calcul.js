const sumDices = (dicesList) => {
  return dicesList.reduce((a, b) => a + b, 0)
}

const getQtyEachDie = (array) => {
  let numberOfElements = {}
  array.forEach(el => {
    numberOfElements[el] = numberOfElements[el] === undefined ? 1 : ++numberOfElements[el]
  })
  return numberOfElements
}

const getDieWithXTimes = (obj, x) => {
  let die = null
  Object.keys(obj).forEach(k => {
    if (obj[k] >= x) {
      die = k
    }
  })
  return die
}

export {
  sumDices,
  getQtyEachDie,
  getDieWithXTimes,
}
