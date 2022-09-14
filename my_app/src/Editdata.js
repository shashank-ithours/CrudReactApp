import React from "react";
import { useState } from "react";
import "./Tabledata.css";
import Table1 from "./Table1";

const Editdata = () => {
  const [user, setUser] = useState({});
  const [studentData, setStudentData] = useState([]);
  const [updateData, setUpdateData] = useState({});

  console.log(updateData);

  const EditStudent = (i) => {
    let Edtdata = [...studentData];
    Edtdata = Edtdata.filter((val, idx) => {
      if (i === idx) {
        setUpdateData(val);
        return (val.isInEditMode = false);
      }
      return val;
    });
    console.log(Edtdata);
    setUser(Edtdata);
  };

  const UpdateStudent = (e) => {
    let updateUser = { ...updateData };
    console.log(e);
    if (e.target.name === "name") {
      updateUser.name = e.target.value;
    } else if (e.target.name === "age") {
      updateUser.age = e.target.value;
    }
    updateUser.isInEditMode = true;
    console.log(e);
    // updateUser.isInEditMode = true;
    setUpdateData(updateUser);
  };

  const finalValue = (i) => {
    let finval = [...studentData];
    finval = finval.map((val, ind) => {
      if (i === ind) {
        val=updateData;
      }
      return val;
    });
    console.log(finval.isInEditMode);
    setStudentData(finval);
  };

  const CancelUpdateStudent = (i) => {
    let Edtdata = [...studentData];
    Edtdata = Edtdata.filter((val, idx) => {
      if (i === idx) {
        return (val.isInEditMode = true);
      }
      return val;
    });
    console.log(Edtdata);
    setUser(Edtdata);
  };
  const tableRow = studentData.map((info, i) => {
    console.log(info);
    return (
      <tr key={i}>
        {info.isInEditMode ? (
          <td>{info.name}</td>
        ) : (
          <td>
            <input
              name="name"
              type="text"
              onChange={UpdateStudent}
              value={updateData.name}
            />
          </td>
        )}
        {info.isInEditMode ? (
          <td>{info.age}</td>
        ) : (
          <td>
            <input
              name="age"
              type="number"
              onChange={UpdateStudent}
              value={updateData.age}
            />
          </td>
        )}

        {info.isInEditMode ? (
          <td>
            <button onClick={(e) => EditStudent(i)}>Edit</button>
          </td>
        ) : (
          <td>
            <button onClick={(e) => finalValue(i)}>Update</button>
            <button onClick={(e) => CancelUpdateStudent(i)}>Cancel</button>
          </td>
        )}
      </tr>
    );
  });
  const addRow = (data) => {
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
    console.log(data.name);
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
