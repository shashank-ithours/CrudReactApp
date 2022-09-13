import React from 'react'
import {useState} from 'react';
import './Tabledata.css'
import Table1 from "./Table1"
import jsondata from './data.json'

const Tabledata = () => {
    const [studentData, setStudentData] = useState(jsondata)
    console.log("studentData",studentData);
    console.log("data",jsondata);
    const tableRow = studentData.map((info)=>{
        return (
            <tr>
                <td>{info.name}</td>
                <td>{info.age}</td>
                <td><button>delete</button></td>
            </tr>
        )
    });
        const addRow = (data)=>{
            const updatedStudentData = [...studentData];
            updatedStudentData.push(data)
            console.log(data[2]);
            setStudentData(updatedStudentData);
        }
  return (
    <div>
        <Table1 func={addRow}/>
        <table id="table24">
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{tableRow}</tbody>
        </table>
    </div>
  )
}

export default Tabledata