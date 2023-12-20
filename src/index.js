import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';



let rootReducer = (preState, action) => {
  let newState = preState;

  switch(action.type){
    case 'A':
    return {
      ...newState,
      name : "Tanwar"
    }
    break;


  }


  return newState;
}

let initialState = {
  name: 'Ankit'
}

let actionCreator =()=>{
  return {
    type:'A'
  }
}

export const asynFun =()=>{
 console.log('okkk')
  return (dispatch)=>{
    setTimeout(function(){
      return dispatch(actionCreator())
    },5000)
    
  }
}


let store = legacy_createStore(rootReducer, initialState , applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
);

