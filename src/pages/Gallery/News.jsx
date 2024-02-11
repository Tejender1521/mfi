import React from 'react'
import Title from '../../components/Title'
import { Stack, ImageList, ImageListItem, Box } from '@mui/material'


import img1 from '../../images/news/1.jpg'
import img2 from '../../images/news/2.jpg'
import img3 from '../../images/news/3.jpg'
import img4 from '../../images/news/4.jpg'
import img5 from '../../images/news/5.jpg'
import img6 from '../../images/news/6.jpg'
import img7 from '../../images/news/7.jpg'
import img8 from '../../images/news/8.jpg'
import img9 from '../../images/news/9.jpg'
import img10 from "../../images/news/10.jpg";
import img11 from "../../images/news/11.jpg";
import img12 from "../../images/news/12.jpg";
import img13 from "../../images/news/13.jpg";
import img14 from "../../images/news/14.jpg";
import img15 from "../../images/news/15.jpg";
import img16 from "../../images/news/16.jpg";
import img17 from "../../images/news/17.jpg";
import img18 from "../../images/news/18.jpg";
import img19 from "../../images/news/19.jpg";
import img20 from "../../images/news/20.jpg";

function News() {
  return (
    <>
      <Title text="News"></Title>
      <Stack
        spacing={8}
        justifyContent={"center"}
        alignItems={"center"}
        p={1}
        mb={4}
      >
        <ImageList className="w-auto sm:w-8/12" cols={3} rowHeight={"auto"}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                className="w-auto sm:w-8/12"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </>
  );
}


const itemData = [
  {
    img: img1,
    title: "Title",
  },
  {
    img: img2,
    title: "Title",
  },
  {
    img: img3,
    title: "Title",
  },
  {
    img: img4,
    title: "Title",
  },
  {
    img: img5,
    title: "Title",
  },
  {
    img: img6,
    title: "Title",
  },
  {
    img: img7,
    title: "Title",
  },
  {
    img: img8,
    title: "Title",
  },
  {
    img: img9,
    title: "Title",
  },
  {
    img: img10,
    title: "Title",
  },
  {
    img: img11,
    title: "Title",
  },
  {
    img: img12,
    title: "Title",
  },
  {
    img: img13,
    title: "Title",
  },
  {
    img: img14,
    title: "Title",
  },
  {
    img: img15,
    title: "Title",
  },
  {
    img: img16,
    title: "Title",
  },
  {
    img: img17,
    title: "Title",
  },
  {
    img: img18,
    title: "Title",
  },
  {
    img: img19,
    title: "Title",
  },
  {
    img: img20,
    title: "Title",
  },
];


export default News