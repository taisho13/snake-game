

import Navigation from './components/Navigation';
import ManipulationPanel from './components/ManipulationPanel';
import Field from './components/Field';
import Button from './components/Button';

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
