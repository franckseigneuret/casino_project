const diceReducer = (dicesList = [], action) => {

  switch (action.type) {

    case 'memoDices':
      console.log(action);

      return action.dicesValues

    default:
      return dicesList

  }

}

export default diceReducer
