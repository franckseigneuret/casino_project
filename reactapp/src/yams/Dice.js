import React, { useState } from 'react';
import styled from 'styled-components'

const Img = styled.img`
  border: 3px solid white;

  &.selected {
    border: 3px solid red;
  }
`

const Dice = ({ value }) => {

  const [blocked, setBlocked] = useState(false)

  const selectMe = () => {
    setBlocked(!blocked) // on inverse son statut blocked
  }

  return (
    <Img className={`dice dice-${value} ${blocked ? 'selected' : ''}`}
      src={`/img/dice-${value}.svg`}
      alt={value}
      blocked={blocked}
      onClick={selectMe} />
  )
}

export default Dice;
