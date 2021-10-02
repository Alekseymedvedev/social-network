import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter } from "react-router-dom";
import Footer from './Components/Footer/Header/Footer';



function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <Main state={props.state} dispatch ={props.dispatch } />
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
