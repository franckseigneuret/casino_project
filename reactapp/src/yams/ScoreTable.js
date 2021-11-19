import React, { useState } from 'react';

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
const ScoreTable = () => {
  const [score, setScore] = useState(scoreCategories)

  const handleClick = ({ name, value }) => {
    console.log('name = ', name, ' value= ', value);
  }

  const cells = Object.keys(scoreCategories).map((item, i) => {
    return <div key={i} style={{ display: 'flex' }}>
      <Cell value={item} />
      <Cell
        handleClick={handleClick}
        name={item}
        value=""
        color="grey"
      />
    </div>
  })

  return cells
}

export default ScoreTable
