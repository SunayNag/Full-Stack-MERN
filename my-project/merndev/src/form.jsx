import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name);
        }}
      >
        <label>Enter your name:</label>
        <br />
        <input
          type="text"
          value={name}
          className="border p-2 rounded w-100"
          onChange={handleChange}
          placeholder="Type a text..."
        />
        <br />
        <button
          type="submit"
          className="bg-violet-500 border-500 border-black rounded-lg hover:bg-violet-900 w-100 h-8 mt-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
