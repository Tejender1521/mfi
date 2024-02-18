import React from "react";
import Title from "../../components/Title";
import { Typography, Grid } from "@mui/material";

function Educator() {
  const EduName = [
    { name: "Prof.(Dr.)Sachin Batra" },
    { name: "Prof.(Dr.)Prashant Kumar" },
    { name: "Prof. (Dr.) Sangeeta Pranavendra " },
    { name: "Prof. (Dr.) Suresh K. Nayak " },
    { name: "Prof. (Dr.) Manoj Lodha" },
    { name: "Prof. (Dr.) Raj Mishra " },
    { name: "Prof. (Dr.) Anil Nigam " },
    { name: "Prof. (Dr.) Amitabh Srivastava " },
    { name: "Prof. (Dr.) S.M. Johri" },
    { name: "Prof. (Dr.) Trishu Sharma" },
    { name: "Prof. (Dr.) Amit Chawla" },
    { name: "Dr. Ruhi Lal" },
    { name: "Dr. Tasha Singh" },
    { name: "Dr. Rajesh Agrawal" },
    { name: "Dr. Harish Kumar" },
    { name: "Dr. Fakir M. Nahak" },
    { name: "Mr. Vijay Sharma" },
    { name: "Ms. Benum Yadav" },
    { name: "Mr. Ravi Upadhyay" },
    { name: "Mr. Adarsh Kumar" },
    { name: "Dr. Ms. Poonam Kumari" },
    { name: "Mr. Chandan Saxena" },

    { name: "Dr. Mukta Martolia" },
    { name: "Dr. C. P. Rashmi " },
    { name: "Dr. Amit Verma " },
    { name: "Dr. Juhi P Pathak " },
    { name: "Dr. Sanjai K. Srivastava" },
    { name: "Dr. Taranjeet Kaur Chawla" },
    { name: "Dr. Vijayta Taneja Kapoor" },
    { name: "Dr. Kriti Singh" },
    { name: "Dr. Manish K Jaisal" },
    { name: "Dr. Neha Bhushan" },
    { name: "Dr. Disha Batra" },
    { name: "Dr. Vaibhav Upadhyay" },
    
  ];

  return (
    <>
      <Title text="Member Educators & Research Team" />

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
