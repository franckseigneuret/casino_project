import React, { useState } from 'react';
import { connect } from 'react-redux'

import Cell from "./ScoreTableCell";

const scoreCategories = {
  'as': '', 'two': '', 'three': '', 'four': '', 'five': '', 'six': '',
  'subTotal': '',
  'bonus': '',
  'total1': '',
  'fullHouse': '', 'smallStraight': '', 'largeStraight': '', 'threeOfAKind': '', 'fourOfAKind': '', 'yahtzee': '', 'min': '', 'max': '',
  'chance': '',
  'total2': '',
  'total': '',
}

const mapNameValue = {
  'as': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6,
}

const sumDices = (dicesList) => {
  return dicesList.reduce((a, b) => a + b, 0)
}


const ScoreTable = ({ dicesList }) => {
  const [score, setScore] = useState(scoreCategories)

  const calculScore = ({ name, dicesList }) => {
    console.log(score);
    let sum = 0
    
    switch (name) {
      case 'as':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
      case 'six':
        return mapNameValue[name] * dicesList.filter(item => item === mapNameValue[name]).length

      case 'min':
        sum = sumDices(dicesList)
        return score.max === '' || sum < score.max ? sum : 0
      case 'max':
        sum = sumDices(dicesList)
        return score.min === '' || score.min < sum ? sum : 0

      default:
        return 0
    }
  }
  const handleClick = ({ name }) => {
    const newCategoryScore = calculScore({ name, dicesList })

    setScore({
      ...score,
      [name]: newCategoryScore
    })
  }

  const cells = Object.keys(scoreCategories).map((item, i) => {
    return <div key={i} style={{ display: 'flex' }}>
      <Cell value={item} />
      <Cell
        handleClick={handleClick}
        name={item}
        value={score[item]}
        color="grey"
      />
    </div>
  })

  return cells
}


const mapStateToProps = (state) => {
  return { dicesList: state.dices }
}

export default connect(
  mapStateToProps,
  null,
)(ScoreTable)
