import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPencilFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import {TbClipboardText} from 'react-icons/tb'
import Button from "react-bootstrap/Button";
import { addTodo } from "./containers/addData.js";

function App() {
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
   } 
   
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
            <Button> Delete All</Button>
          </div>
          <div className="listSpace"> 
          <ul id="addTodo" >
          </ul>
          </div>
        </div>
      <addTodo datach ='Sualeh' />
      </div>
    </div>
  );
}

export default App;
