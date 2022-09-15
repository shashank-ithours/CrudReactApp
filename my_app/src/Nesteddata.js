import React from "react";
import { useState } from "react";
import "./Tabledata.css";
import Table1 from "./Table1";

const Editdata = () => {
  const [user, setUser] = useState({});
  const [studentData, setStudentData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  // const [subject, setSubject] = useState([]);

  console.log(studentData);
  // console.log(subject);

  const addsubject = (idxh) => {
    let subName = [...studentData];
    let addedsubj = prompt("please enter your subject name");
    subName = subName.map((subval, idx) => {
      if (idxh === idx) {
        setUpdateData(subval);
        return subval.subject.sub.push(addedsubj);
      }
      return subval;
    });
    setUser(subName);
  };

  const EditStudent = (i) => {
    let Edtdata = [...studentData];
    Edtdata = Edtdata.filter((val, idx) => {
      if (i === idx) {
        console.log(val);
        setUpdateData(val);
        return (val.isInEditMode = false);
      }
      return val;
    });
    console.log(Edtdata);
    setUser(Edtdata);
  };
   const EditSubject = (i)=>{
    let Edtsub = [...studentData];
    Edtsub = Edtsub.filter((val, inn)=>{
      if (i===inn) {
        setUpdateData(val);
        return (val.subject.isInEditMode= false)
      }
      return val;
    })
    setUser(Edtsub);
   }

  const delStudent = (i) => {
    let delData = [...studentData];
    // eslint-disable-next-line no-restricted-globals
    confirm('are you sure')
    delData = delData.filter((_, idx) => i !==idx);
    setStudentData(delData);
  };

  const DelSubject = (index)=>{
    let delsub = [...studentData]
    delsub = delsub.filter((val,idx)=>{
      return val
    })
    console.log(delsub.subject);
    // setStudentData(delsub);
  }

  const UpdateStudent = (e) => {
    let updateUser = { ...updateData };
    console.log(e);
    if (e.target.name === "name") {
      updateUser.name = e.target.value;
    } else if (e.target.name === "age") {
      updateUser.age = e.target.value;
    }
    updateUser.isInEditMode = true;

    setUpdateData(updateUser);
  };

  const finalValue = (i) => {
    let finval = [...studentData];
    finval = finval.map((val, ind) => {
      if (i === ind) {
        val = updateData;
        console.log(val);
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

  const CancelUpdateSubject = (i) => {
    let cncldata = [...studentData];
    cncldata = cncldata.filter((val, idxcv) => {
      if (i === idxcv) {
        console.log((val.subject.isInEditMode = true));
      }
      return val;
    });
    setUser(cncldata);
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

        <td>
          <table>
            <tbody>
              {info.subject.sub.map((value, index) => {
                return (
                  <tr key={index}>
                    {info.subject.isInEditMode ? (
                      <div>
                        <span>{value}</span>
                        <button onClick={(e)=>EditSubject(i)}>Edit</button>
                        <button onClick={(e)=>DelSubject(index)}>Delete</button>
                      </div>
                    ) : (
                      <div>
                        <input
                          name="subject"
                          type="text"
                          value={updateData.subject.sub}
                        />
                        <button>Update</button>
                        <button onClick={(e) => CancelUpdateSubject(i)}>
                          Cancel
                        </button>
                        <button>Delete</button>
                      </div>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={(e) => addsubject(i)}>Add</button>
        </td>

        {info.isInEditMode ? (
          <td>
            <button onClick={(e) => EditStudent(i)}>Edit</button>
            <button onClick={(e) => delStudent(i)}>Delete</button>
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
            <th>Subjects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  );
};

export default Editdata;
