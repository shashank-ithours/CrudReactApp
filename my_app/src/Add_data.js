// import React from "react";
// import "./Add_data.css";
// import useState from "react";

// const AddData = (prop) => {
//   const [name, setName] = useState(" ");
//   const [city, setCity] = useState(" ");

//   const changeName = (event) => {
//     setName(event.target.value);
//   };

//   const changeCity = (event) => {
//     setCity(event.target.value);
//   };
//   const transformValue = (event) => {
//     event.prevntDefault();
//     const val = {
//       name,
//       city,
//     };
//   };
//   return (
//     <>
//       <input
//         type="text"
//         id="name"
//         placeholder="Write Name Here"
//         value={name}
//         onChange={changeName}
//       />
//       <input
//         type="number"
//         id="number"
//         placeholder="Age"
//         value={city}
//         onChange={changeCity}
//       />
//       <br />
//       <br />
//       <button onClick={transformValue}>Add</button>
//       <table id="table1">
//         <tbody>
//           <tr>
//             <th class="name">Name</th>
//             <th class="age">Age</th>
//           </tr>
//           <tr>
//             <td>shashank</td>
//             <td>shashank</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AddData;
