import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    <Header />
      <main className="Main">
        <div className="Container">
         <Sidebar />
        <div className="content">
          <img src="https://avatars.mds.yandex.net/get-zen_doc/3453969/pub_5f0d5a879a510533f2a305ad_5f0d5d98ffa7730389fb55d2/scale_1200" alt="" />
           <Profile />
        
        </div>
        </div>
     
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
