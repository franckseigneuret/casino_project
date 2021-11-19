import React from 'react';

import Cell from "./ScoreTableCell";

// const cases = [
//   'as', 'two', 'three', 'four', 'five', 'six', 'subTotal', 'bonus', 'total1',
//   'fullHouse', 'smallStraight', 'largeStraight', 'prime', 'threeOfAKind', 'fourOfAKind', 'yahtzee', 'chance', 'min', 'max', 'total2',
//   'total'
// ]
const cases = {
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

  const handleClick = async ({ name, value }) => {
    // ...
  }

  const cells = Object.keys(cases).map((item, i) => {
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
