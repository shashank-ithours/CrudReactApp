import React from "react";


const Table1 = ({ user, setUser, func }) => {
  console.log(user);

  const handleChange = (e) => {
    let newUser = { ...user };
    if (e.target.name === "name") {
      newUser.name = e.target.value;
    } else if (e.target.name === "age") {
      newUser.age = e.target.value;
    }
    newUser.isInEditMode = true;
    setUser(newUser);
  };

  console.log(user)
  
  const transferValue = (event) => {
    event.preventDefault();
    func(user);
    clearState();
  };

  const clearState = () => {
    setUser({ name: "", age: "" });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={(e) => handleChange(e)}
        
      />
      <br />
      <br />
      <button className="btn" onClick={transferValue}>
        Add
      </button>
    </div>
  );
};

export default Table1;
