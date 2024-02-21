import React from "react";
import Title from "../../components/Title";
import book from "../../images/publication/book1.jpeg";
import book2 from "../../images/publication/book2.jpeg";
import { Card } from "flowbite-react";
import sov1 from "../../images/publication/sov1.png";
import sov2 from "../../images/publication/sov2.png";

function Souvenir() {
  return (
    <>
      <Title text="Souvenir" />
      <div className="flex flex-row flex-wrap justify-around ">
        <Card
          className="max-w-sm"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={sov1}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Chhattisgarh Souvenir
            </h5>
          </a>
          <div className="mb-2 flex items-center">
            <a
              href="https://drive.google.com/file/d/1V-qreiKASahWrRyGR77RHwJ8wEkgYhYC/view?usp=sharing"
              target="_blank"
            >
              <span className="ml-3 mr-2 cursor-pointer rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                Click to view
              </span>
            </a>
          </div>
        </Card>
        <Card className="max-w-sm" imgAlt="Book" imgSrc={sov2}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Delhi Souvenir
            </h5>
          </a>
          <div className="mb-2 flex items-center">
            <a
              href="https://drive.google.com/file/d/1cRqKI1xZHhMh2Es3iDl_fmEx_ng3vwXl/view?usp=sharing"
              target="_blank"
            >
              <span className="ml-3 mr-2 cursor-pointer rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                Click to view
              </span>
            </a>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Souvenir;
