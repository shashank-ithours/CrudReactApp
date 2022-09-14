import React from "react";
import { useState } from "react";
import "./Tabledata.css";
import Table1 from "./Table1";

const Editdata = () => {
  const [user, setUser] = useState({});
  const [studentData, setStudentData] = useState([]);

  console.log(studentData.name);
  const EditStudent = (i) => {
    let Edtdata = [...studentData];
    Edtdata = Edtdata.filter((_, idx) => i === idx);
    console.log(Edtdata.name);
    Edtdata.isInEditMode = !Edtdata.isInEditMode;
  };
  const tableRow = studentData.map((info, i) => {
    return (
      <tr key={i}>
        {info.isInEditMode ? (
          <td>{info.name}</td>
        ) : (
          <td>
            <input type="text" placeholder={info.name} />
          </td>
        )}
        {info.isInEditMode ? (
          <td>{info.age}</td>
        ) : (
          <td>
            <input type="text" placeholder={info.age} />
          </td>
        )}

        {info.isInEditMode ? (
          <td>
            <button onClick={(e) => EditStudent(i)}>Edit</button>
          </td>
        ) : (
          <td>
            <button>Update</button>
            <button>Cancel</button>
          </td>
        )}
      </tr>
    );
  });
  const addRow = (data) => {
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
    console.log(data);
  };

  return (
    <div>
      <Table1 user={user} setUser={setUser} func={addRow} />
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

export default Editdata;