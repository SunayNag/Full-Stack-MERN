import React from "react";
import { useState } from "react";

function Button() {
  return (
    <div className="p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl ">
      <label className="text-lg my-3 ">This div is for button</label>
      <button
        onClick={(e) => {
          console.log("Button Clicked!");
        }}
        className="bg-blue-500 hover:bg-blue-950 text-white border rounded-md px-2 py-1 "
      >
        Click me
      </button>
    </div>
  );
}

export default Button;
