
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className = "header" >
        <div className = "title-conteiner">
          <h1 className = "title">Snake Game</h1>
        </div>
        <Navigation/>
      </header>

      <main className = "main">
        <Field/>
      </main>

      <footer className = "footer">
        <Button/>
        <ManipulationPanel/>
      </footer>
    </div>
  );
}

export default App;
