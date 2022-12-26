import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setAge(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // prevent adding empty values
    if (e.target.name.value !== "" && e.target.age.value !== "") {
      props.addItems({ name, age });
      setName("");
      setAge("");
    } else {
      return false;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name ..."
          id="name"
          onChange={handleChange}
          value={name}
        />
        <input
          type="number"
          placeholder="Enter age ..."
          id="age"
          onChange={handleChange}
          value={age}
        />
        <input type="submit" value="add" />
      </form>
    </div>
  );
}

export default AddItem;
