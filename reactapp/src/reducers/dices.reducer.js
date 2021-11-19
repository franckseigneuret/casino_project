const diceReducer = (dicesList = [], action) => {

  switch (action.type) {

    case 'memoDices':
      return action.dicesValues

    default:
      return dicesList

  }

}

export default diceReducer
