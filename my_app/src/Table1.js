import React from 'react'
import {useState} from 'react'

const Table1 = (prop) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeName = (e)=>{
    setName(e.target.value)
    console.log(name);
  };
  const changeAge=(e)=>{
    setAge(e.target.value)
    console.log(age);
  };
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      age,
    };
    prop.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setAge('');
  };
   
  

  return (
    <div>
      <input type="text" name="" id="name" placeholder = "Name" value={name} onChange={changeName}/>
      <input type="number" id="age" placeholder="Age" value= {age} onChange={changeAge} />
      <br /><br />
      <button className="btn" onClick={transferValue} >Add</button>
    </div>
  )
}

export default Table1;