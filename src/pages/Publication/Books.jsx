import React from "react";
import Title from "../../components/Title";
import book from "../../images/publication/book1.jpeg";
import book2 from "../../images/publication/book2.jpeg";
import { Card } from "flowbite-react";

function Books() {
  return (
    <>
      <Title text="Books" />
      <div className="flex flex-row flex-wrap justify-around ">
        <Card
          className="max-w-sm"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={book}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              व्यवहारिक पत्रकारिता
            </h5>
          </a>
          <div className="mb-2 flex items-center">
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              Author - Dr.Sachin Batra
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              500/-
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Buy Now
            </a>
          </div>
        </Card>
        <Card className="max-w-sm" imgAlt="Book" imgSrc={book2}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              मीडिया साक्षात्कार
            </h5>
          </a>
          <div className="mb-2 flex items-center">
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              Author - Dr.Sachin Batra
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              250/-
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Buy Now
            </a>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Books;
