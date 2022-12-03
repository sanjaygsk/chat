import React from 'react';
import {AppIcon} from './assets/svg';
import { getNews } from './redux/actions/action'
import { useDispatch, useSelector } from 'react-redux'


const App = (props:any) => {

  const dispatch = useDispatch()

  // const users = useSelector(state => state)

  return (
    <div style={{height: "100%", width: "100%", color: 'blue', backgroundColor: 'yellow'}}>
      <AppIcon />
      <h1>GSKKUMAR</h1>
      <button onClick={() => dispatch(getNews())}>GSKKUMAR</button>
    </div>
  );
}



export default App;
