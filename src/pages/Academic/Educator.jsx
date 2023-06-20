import React from "react";
import Title from "../../components/Title";
import { Typography, Grid } from "@mui/material";

function Educator() {
  const EduName = [
    { name: "Prof.(Dr.)Sachin Batra" },
    { name: "Prof. (Dr.) Suresh Nayak " },
    { name: "Prof. (Dr.) Manoj Lodha" },
    { name: "Prof. (Dr.) Amitabh Srivastava " },
    { name: "Prof. (Dr.) Raj Mishra " },
    { name: "Dr. Ruhi Lal" },
    { name: "Dr. Jayant Panda" },
    { name: "Mr. Ravi Upadhyay" },
    { name: "Dr. Tasha Singh" },
    { name: "Ms. Benum Yadav" },
    { name: "Ms. Sangeeta Sharma" },
    { name: "Mr. Gajanand" },
    { name: "Mr. Chandan Saxena" },
    { name: "Prof. (Dr.) Mukesh Kumar " },
    { name: "Prof. (Dr.) Ritu Sood " },
    { name: "Prof. (Dr.) Durgesh " },
    { name: "Prof. (Dr.) Sangeeta Pranavendra " },
    { name: "Prof. (Dr.) Anil Nigam " },
    { name: "Prof. (Dr.) Prashant Kumar" },
    { name: "Prof. (Dr.) Kunjan Acharya" },
    { name: "Prof. (Dr.) Trishu Sharma" },
    { name: "Prof. (Dr.) Amit Chawla" },
    { name: "Prof. (Dr.) Narendra Kaushik" },
    { name: "Prof. (Dr.) Anurag Dave" },
    { name: "Prof. (Dr.) Manas P Goswami" },
    { name: "Prof. (Dr.) Vinita Gupta" },
    { name: "Prof. (Dr.) Anjani Jha" },
    { name: "Dr. Rajesh Agrawal" },
    { name: "Dr. Aditya Shukla" },
    { name: "Dr. Ritu Dubey" },
    { name: "Dr. Ashish Sharma" },
    { name: "Dr. Sayantani Roy" },
    { name: "Mr. Devesh Pandey" },

  ];

  return (
    <>
      <Title text="Educator" />

      <ol className="list-decimal my-10 px-10">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          m={0}
        >
          {EduName.map((item) => (
            <Grid item sx md={4}>
              <li className="text-xl py-1 font-semibold">{item.name}</li>
            </Grid>
          ))}
        </Grid>
      </ol>
    </>
  );
}

export default Educator;
