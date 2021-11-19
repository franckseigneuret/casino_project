import React from 'react'

import YamsGame from './yams/YamsGame'
import './App.css'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import dices from './reducers/dices.reducer'
const store = createStore(
  combineReducers({ dices }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pour lire le store dans extension chrome
);


const handleClick = async () => {
  let body = ''
  await fetch(`/grid`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message)
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="hidden" onClick={() => handleClick()}>
          CLICK THIS to check fetch with DB (cf network XHR & console)
        </p>

        <Provider store={store}>
          <YamsGame />
        </Provider>
      </header>
    </div>
  );
}

export default App;
