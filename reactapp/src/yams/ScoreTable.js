import React, { useState, useEffect } from 'react';
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
  const [unitDicesScore, setUnitDicesScore] = useState({})

  // if scores for each die are set, then calculate subTotal, bonus and total1
  useEffect(() => {
    const diceScores = Object.values(unitDicesScore)
    if (diceScores.length === 6) {
      let subTotalScore = 0
      diceScores.map(diceScore => subTotalScore += diceScore)

      setScore({
        ...score,
        subTotal: subTotalScore,
        bonus: subTotalScore > 62 ? 35 : 0,
        total1: subTotalScore > 62 ? subTotalScore + 35 : subTotalScore,
      })
    }
  }, [unitDicesScore]);

  const calculScore = ({ name, dicesList }) => {
    let diceScore = 0

    switch (name) {
      case 'as':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
      case 'six':
        diceScore = mapNameValue[name] * dicesList.filter(item => item === mapNameValue[name]).length
        setUnitDicesScore({ ...unitDicesScore, [name]: diceScore })
        return diceScore

      case 'min':
        diceScore = sumDices(dicesList)
        return score.max === '' || diceScore < score.max ? diceScore : 0
      case 'max':
        diceScore = sumDices(dicesList)
        return score.min === '' || score.min < diceScore ? diceScore : 0

      default:
        return ''
    }
  }

  const handleClick = ({ name }) => {
    if (dicesList.length > 0) {

      const newCategoryScore = calculScore({ name, dicesList })

      setScore({
        ...score,
        [name]: newCategoryScore
      })

    }
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
