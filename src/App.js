import "./App.css";
import { useState} from "react";

function App() {
  const [toDos,setToDos]=useState([]) //this todos used to save array inserted into input box
  const [toDo,setToDo]=useState('') // this todo is used to add items into input box 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Plan smart. Work smarter.wr</h2>
      </div>
      <div className="input">
        <input  value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." /> 
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])}className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((value)=>{
          return (
      <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(value)
              setToDos(toDos.filter(obj=>{
                if(obj.id===value.id){
                  obj.status=e.target.checked
                }
                return obj
              }))
            }} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setToDos(toDos.filter(obj=>
                obj.id!== value.id))
              
            }} className="fas fa-times"></i>
          </div>
        </div> 
        )
       }) }

       {toDos.map((value)=>{
        if(value.status){
          return(<h1>{value.text}</h1>)

        }
        return null

       } )}
       
       
 
      </div>
    </div>
  )
}
export default App;
