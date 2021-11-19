import './App.css';

import YamsGame from './yams/YamsGame';

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

        <YamsGame />
      </header>
    </div>
  );
}

export default App;
