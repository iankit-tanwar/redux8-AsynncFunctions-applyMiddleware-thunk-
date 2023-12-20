
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { asynFun } from '.';

function App() {

  let state = useSelector(state=>state)


   const dispatch = useDispatch()


  return (
    <div className="App">
     
     <h1>{state.name}</h1>

     <button onClick={()=>{dispatch(asynFun())}}>Change my name</button>
    </div>
  );
}

export default App;
