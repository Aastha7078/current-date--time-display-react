import React from 'react';
import ReactDOM from 'react-dom';
//import  {add,sub,mul,div} from "./calc";
import "./index.css";
const currdate= new Date().toLocaleDateString();
const currtime= new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <h1 className='nav'>Date and time website</h1>
<div className='date'>
  <h1>current date is{currdate}</h1>
</div>
<div className='time'>
  <h1>current time is {currtime}</h1>
</div>
  </>,
  document.getElementById("root")
);
