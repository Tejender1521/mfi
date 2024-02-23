import React from "react";
import Title from "../../components/Title";
import Nirmal from "../../images/international/Nirmala.jpg";
import Svetlana from "../../images/international/Svetlana.jpg";
import Vasily from "../../images/international/Vasily.jpg";

function Educators() {
  const data = [
    { name: "Nirmal Mani Adhakari (Nepal)", image: Nirmal },
    { name: "Dr. Svetlana Badrunova", image: Svetlana },
    { name: "Vasily Pushkov", image: Vasily },
  ];

  return (
    <>
      <Title text="Educators / Experts" />

      <div className="flex flex-row flex-wrap justify-around">
        {data.map((one) => (
          <div className="px-10 py-8">
            <img
              src={one.image}
              className="w-60 md:w-52 h-72 object-cover object-center rounded-lg shadow-lg shadow-gray-500"
            ></img>
            <p className="text-xl font-semibold text-indigo-700 text-center py-3">
              {one.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Educators;
