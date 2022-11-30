import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPencilFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import {TbClipboardText} from 'react-icons/tb'
import Button from "react-bootstrap/Button";
import { addTodo } from "./containers/addData";

function App() {
  function checkVal(event) {
    console.log(event)
  }
  var data;
  function check(event) {
    console.log(event.target.value)
    data = event.target.value
  }
  function add(event){
   var inpData =  document.getElementById('inpSpace')
   console.log(inpData)
   if(inpData.value.trim()==="") {
    alert('Add Value')
   }  else {
   document.getElementById('addTodo').innerHTML += 
   `
   <li> ${inpData.value} <button id='editBtn'>Edit</button> </li>
   `
  }
}
function detAll() {
  document.getElementById('addTodo').innerHTML = ""
}

let editBtn = document.getElementById('editBtn')

if(editBtn) {
  console.log('Button Clicked')
}

  return (
    <div className="space-con">
      <h2>
        {" "}
        <GiNotebook /> Todo Application{" "}
      </h2>
      <div className="container">
        <div className="space">
          <div className="input">
            <input onChange={check} id='inpSpace' className="input-space" type="text" placeholder="Enter Your Todo Here" />
            <Button onClick={add}> Add Todo</Button>
            <Button onClick={detAll}> Delete All</Button>
          </div>
          <div className="listSpace"> 
          <ul id="addTodo" >
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
