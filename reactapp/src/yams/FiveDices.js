import React, { useState } from 'react'
import { Button } from 'reactstrap'

import Dice from './Dice'

const NB_DICES = 5
const initialDicesValues = [] // au début les dés n'ont pas de valeur
const initialDicesClickable = [true, true, true, true, true] // au début les dés sont tous clicables

const shuffleBetween1and6 = () => Math.ceil(Math.random() * 6)

function FiveDices() {

  const [actualDicesValues, setActualDicesValues] = useState(initialDicesValues)
  const [dicesClickable, setDicesClickable] = useState(initialDicesClickable)

  const changeDiceValue = () => {
    let tempValues = []
    let value

    for (let i = 0; i < NB_DICES; i++) {
      // si le bouton est en état clicable on lui assigne une valeur au hasard sinon on maintient sa valeur
      value = dicesClickable[i] ? shuffleBetween1and6() : actualDicesValues[i]
      tempValues.push(value)
    }
    setActualDicesValues(tempValues) //on met à jour le tableau des valeurs en cours
  }


  // au clic sur un dé, on met à jour son état
  const refreshSelectedArray = ({ position, blocked }) => {
    dicesClickable[position] = blocked
    setDicesClickable(dicesClickable)
  }

  // construction de l'affichage des dés à partir du tableau de leur valeur
  const dices = actualDicesValues.map((dice, i) => {
    return <Dice key={i} value={dice} position={i} handleSelect={refreshSelectedArray} />
  })


  return (
    <>
      <Button color="primary" onClick={() => changeDiceValue()}>Lancer</Button>
      <hr />
      {dices}
    </>
  )
}

export default FiveDices
