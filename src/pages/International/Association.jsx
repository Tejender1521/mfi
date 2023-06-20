import React from "react";
import Title from "../../components/Title";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Grid
} from "@mui/material";

import img1 from '../../images/association/1.jpg'
import img2 from '../../images/association/2.jpg'
import img3 from '../../images/association/3.jpg'
import img4 from '../../images/association/4.jpg'

function Association() {
  return (
    <>
      <Title text="Association" />
      <div className="w-screen flex flex-wrap justify-around px-2">
        <Box my={4} width={{ sx: "300px", md: "70%" }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={img1}
              alt="image"
            />
            <CardContent>
              <div className="text-indigo-700 font-bold text-2xl my-4">
              Media Federation signed MoU with Sputnik News Russia
              </div> 
              <Typography variant="body1">
              Media Federation of India has signed an MoU with Sputnik News Russia during the auspicious occasion of 17th Media Excellence Awards & International Seminar at Pyarelal Bhawan Auditorium on Saturday (March 4, 2023). The collaborative friendship tie-up was signed by Mr. Arun Sharma, President MFI & Ms. Olga Dycheva, Chief Representative India Sputnik News Russia and exchanged wishes to each other. The MoU proceedings were accompanied by Ms. Amita Sharma, National Secretary, MFI & Prof. (Dr.) Sachin Batra, Advisor- MFI. After entering to the collaborative relationship Media Federation Of India & Sputnik News Russia will work together for promoting media literacy and will organise various programs jointly for media industry & academia. This friendship bond of indo-russia relationship is dedicated to strengthen media relations of both countries too.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
      <Grid container mt={2}>
        <Grid item sx md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <img src={img2} width="90%"></img>
          
        </Grid>
        <Grid item sx md={6} p={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
         <p className="text-lg ">In the journey of shaking hands for the betterment & extention to develop Country Class Media Centre, MFI has entered into International Collaboration. These tie-ups will offer solutions as well as support to Academic Partners, Media Houses and Press Associations also. <br></br> <br></br> The notable initiative has taken by Media Federation of India to get associated with the Media & Entertainment Committee BIS of the Government of India. Dr. Sandeep Marwah, National President of M&EC- BIS & Mr. Arun Sharma, President – Media Federation of India agreed to work together for comprehensive makeover of the Industry.</p>
          
        </Grid>
      </Grid>
      <Grid container my={4}>
        <Grid item sx md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <img src={img3} width="90%"></img>
          
        </Grid>
        <Grid item sx md={6} p={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
         <p className="text-lg ">ACN Network inks MoU with Media Federation of India to set up Federation’s Asian chapters. Both sides would work together to enhance cooperation with various Foreign Media Houses, Media Associations & Federations, and Media Clubs in Asian nations.</p>
          
        </Grid>
      </Grid>
    </>
  );
}

export default Association;
