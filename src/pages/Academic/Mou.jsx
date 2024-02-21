import React from 'react'
import Title from '../../components/Title'
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from '@mui/material'

import img1 from '../../images/mou/1.jpeg'
import img2 from '../../images/mou/2.jpg'
import img3 from '../../images/mou/3.jpg'
import img4 from '../../images/mou/4.jpeg'
import img5 from '../../images/mou/5.jpg'
import img6 from '../../images/mou/6.webp'
import img7 from "../../images/mou/7.jpg";
function Mou() {
  const data = [
    {
      image: img1,
      title: "CCS University Meerut inked MoU with MFI",
      description:
        "Media Federation of India has entered into a MoU with the highest ranked government university of Uttar Pradesh Chaudhary Charan Singh University, Meerut on June 6, 2022. The mutual documents were signed by the Hon’ble Vice-chancellor of CCS University Prof. Sangeeta Shukla, Prof. Y. Vimla- Pro VC, Prof. (Dr.) Prashant Kumar – Director School of Journalism and Mass Communication, Dhirendra Kumar Verma- Registrar and other officials. The proceedings from MFI was executed by Mr. Arun Sharma- President Media Federation Of India & Ms. Amita Sharma- National Secretary MFI. During the ceremony the VC & Director both expressed their positive statements regarding MoU and explained that how this joint venture will benefit the students regarding internship, training & placements.",
    },
    {
      image: img2,
      title: "AAFT University & Marwah Studios signed MoU with MFI",
      description:
        "Academia and Industry are two corners of career and both need a platform to develop skills as well as understanding the moderated demands for placement. This time a step ahead taken by Dr. Sandeep Marwah, Chancellor AAFT University & Chairman Marwah Studios and a MoU was signed with Mr. Arun Sharma, President- Media Federation of India for the mutual operations of skill learning and academic orientation.",
    },
    {
      image: img3,
      title: "NISCOT inked MoU with MFI",
      description:
        "As on date Academia & Industry requires collaborative approach to shape the students of Journalism and Mass Communication to fulfill demands of both.Considering this perspective an another initiative was taken by Media Federation of India. An MoU got signed between MFI & NISCOT to benefit the students. The documents of togetherness were exchanged by Mr. Arun Sharma – President, Media Federation Of India & Fr. Robinson Silvester Rodrigues Chairman NISCOT along with Dr. Ritu Dubey Tiwari- HOD, Journalism & Mass Communication.",
    },

    {
      image: img6,
      title: "NIMS University signed MoU with MFI",
      description:
        "Media Federation Of India is minimising the gap of Industry & Academia through MoU with educational institutions. It has opened the doors to help the students discover their career. Recently NIMS University got associated with MFI to avail specialized training, internship, OJT & placement for their students. The MoU was signed by Prof. (Dr.) B. S. Tomar, Chancellor, NIMS University Rajasthan & Mr. Arun Sharma, President – MFI initiated by Dr. Sandeep Tripathi, Registrar & Prof. (Dr.) Sachin Batra, Principal – NIJMC. The MoU is an exchange program for mutual benefits & to extend support for creative, collective & constructive growth.",
    },
    {
      image: img4,
      title: "IMS Noida join hands with MFI, signed MoU",
      description:
        "Media Federation Of India is welcoming educational institutions to get associated for practical exposure to their students through MoU. It offers multiple solutions to academia and filled the gap of skill transformation. Recently IMS, Noida also got associated with MFI to avail specialized training, internship, OJT & placement for their students. The MoU was signed by Mr. Rajeev Gupta, Chairman IMS Noida & Mr. Arun Sharma, President MFI and documents were exchanged by Dr. Manju Gupta, Dean- Academics initiated by Prof. (Dr.) Raj Mishra, HoD- SJMC. The simply crafted MoU offered mutual benefits & to extend support for creative, collective & constructive growth.",
    },
    {
      image: img7,
      title: "Jaipur National University associated with MFI ",
      description:
        "Jaipur National University has entered into an MoU with the Media Federation of India for national-international level training, industry-focused internship, and placement coordination in newspapers and television channels for students studying in the journalism and mass communication courses. The agreement was signed by Pro-Chancellor Prof. H. N. Verma on behalf of JNU  and National President of the Media Federation of India Arun Sharma during a special ceremony held at JNU on Tuesday. Whereas Prof. R.L. Raina, Vice-Chancellor JNU thanked MFI and presented a memento to Mr Arun Sharma.",
    },
    {
      image: img5,
      title: "IMS Ghaziabad initiated tie-up with MFI",
      description:
        "MoU sign between Dr. Ajay Kumar, Director, IMS UC Gaziabad and Mr. Arun Sharma, National President, Media Federation of India also present profesor Dr. Anil Nigam, IMS UC and profesor Dr. Sanjay Diwedi, Director General, IIMC, New Delhi.",
    },
  ];

  return (
    <>
      <Title text="MoU's" />
      <div className="w-screen flex flex-wrap justify-around px-2">
        {data.map((item) => (
          <Box my={4} width={{ sx: "300px", md: "550px" }}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div>
    </>
  );
}

export default Mou