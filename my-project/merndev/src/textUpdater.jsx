import React from "react";
import { useState } from "react";

function Text() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-1/2 text-center"
        placeholder="Type something..."
        style={{
          border: "solid black 1px",
        }}
      />
      <p className="mt-2 text-gray-500">You typed: {text}</p>
    </div>
  );
}

export default Text;
