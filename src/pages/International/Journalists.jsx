import React from "react";
import Title from "../../components/Title";
import Lise from '../../images/international/Lise.jpg';
import Gina from "../../images/international/Gina.jpeg";
import Tracy from "../../images/international/Tracy.png";
import Alexander from "../../images/international/Alexander.png";
import Olga from "../../images/international/Olga.jpg";
function Journalists() {
  const data = [
    { name: "Lise Olsen (USA)", image: Lise },
    { name: "Gina Wild", image: Gina },
    { name: "Tracey Eaton (Mexico)", image: Tracy },
    { name: "Alexander Belenky (Russia)", image: Alexander },
    { name: "Olga Ducheva (Russia-India)", image: Olga },
  ];

  return (
    <>
      <Title text="Journalists" />

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

export default Journalists;
