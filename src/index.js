import store,{subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {addPost,updateNewPost} from './redux/state'

export let renderThree= (state) =>{
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} dispatch ={store.dispatch .bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
      );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
renderThree(store.getState());
store.subscribe(renderThree);


