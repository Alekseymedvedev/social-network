import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
     <Main />
      <footer className="footer">

      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
