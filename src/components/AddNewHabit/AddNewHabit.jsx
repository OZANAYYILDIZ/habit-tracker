import "./AddNewHabit.css";
import { useState } from "react";

const AddNewHabit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new habit submitted " + inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="inputId"
          type="text"
          placeholder="Enter new habit"
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>
      <button>Add New Habit</button>
    </form>
  );
};

export default AddNewHabit;
