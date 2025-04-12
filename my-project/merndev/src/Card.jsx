import React from "react";
import { useState } from "react";

const Card = ({ image, name, details, price }) => {
  return (
    <div className="bg-[#344CB7] shadow-2xl rounded-lg p-4 w-80 mx-4.5 transition ease-in-out delay-100 duration-200 hover:scale-120">
      <img src={image} className="w-full h-1/2 object-cover rounded" />
      <h2 className="text-xl text-white font-bold mt-2">{name}</h2>
      <p className="text-[#FFEB00]">{details}</p>
      <p className="text-ig text-white font-semibold mt-2">Species: {price}</p>
      <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-900">
        Order
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#000957]">
      <Card
        image="https://assetsio.gnwcdn.com/sonic-the-hedgehog-is-30-years-old-today-1624463363945.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
        name="Sonic"
        details="The Blue, The Beloved"
        price="Hedgehog"
      />

      <Card
        image="https://www.slashfilm.com/img/gallery/weve-got-the-prower-why-tails-is-the-best-part-of-sonic-the-hedgehog/intro-1639590583.jpg"
        name="Tails"
        details="The Golden Brains"
        price="Fox"
      />

      <Card
        image="https://i0.wp.com/theilluminerdi.com/wp-content/uploads/2024/04/knuckles-trailer.jpeg"
        name="Knuckles"
        details="The Red Muscles"
        price="Echidna"
      />

      <Card
        image="https://comicbook.com/wp-content/uploads/sites/4/2024/11/Shadow-the-Hedgehog-Movie.jpg"
        name="Shadow"
        details="The Cooler Hedgehod"
        price="Hedgehog"
      />
    </div>
  );
};

export default App;
