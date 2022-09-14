import React from "react";
import { useState } from "react";
import "./Tabledata.css";
import Table1 from "./Table1";

const Tabledata = () => {
  const [user, setUser] = useState({name:"", age: ""})
  const [studentData, setStudentData] = useState([]);

  console.log([...studentData]);

  const deletestudent = (i) => {
    let delData =  [...studentData];
    delData = delData.filter((_,idx)=>i!==idx)
    setStudentData(delData);
  };

  // console.log("studentData", studentData[0]);

  const tableRow = studentData.map((info, i) => {
    return (
      <tr key={i}>
        <td>{info.name}</td>
        <td>{info.age}</td>
        <td>
          <button onClick ={(e)=>deletestudent(i)}>delete</button>
        </td>
      </tr>
    );
  });
  const addRow = (data) => {
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div>
      <Table1 user = {user} setUser={setUser} func={addRow} />
      <table id="table24">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  );
};

export default Tabledata;
