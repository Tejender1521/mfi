import { Stack, ImageList, ImageListItem, Box } from "@mui/material";

import img1 from "../../images/award/states/uttarpradesh/photo1645679260-1-150x150.jpeg";
import img2 from "../../images/award/states/uttarpradesh/photo1645679260-2-150x150.jpeg";
import img3 from "../../images/award/states/uttarpradesh/photo1645679260-3-150x150.jpeg";
import img4 from "../../images/award/states/uttarpradesh/photo1645679260-4-150x150.jpeg";
import img5 from "../../images/award/states/uttarpradesh/photo1645679260-5-150x150.jpeg";
import img6 from "../../images/award/states/uttarpradesh/photo1645679260-6-150x150.jpeg";
import img7 from "../../images/award/states/uttarpradesh/photo1645679260-7-150x150.jpeg";
import img8 from "../../images/award/states/uttarpradesh/photo1645679260-8-150x150.jpeg";
import img9 from "../../images/award/states/uttarpradesh/photo1645679260-9-150x150.jpeg";
import img10 from "../../images/award/states/uttarpradesh/photo1645679260-10-150x150.jpeg";
import img11 from "../../images/award/states/uttarpradesh/photo1645679260-11-150x150.jpeg";
import img12 from "../../images/award/states/uttarpradesh/photo1645679260-12-150x150.jpeg";
import img13 from "../../images/award/states/uttarpradesh/photo1645679260-13-150x150.jpeg";
import img14 from "../../images/award/states/uttarpradesh/photo1645679260-14-150x150.jpeg";
import img15 from "../../images/award/states/uttarpradesh/photo1645679260-15-150x150.jpeg";
import img16 from "../../images/award/states/uttarpradesh/photo1645679260-16-150x150.jpeg";
import img17 from "../../images/award/states/uttarpradesh/photo1645679260-17-150x150.jpeg";
import img18 from "../../images/award/states/uttarpradesh/photo1645679260-18-150x150.jpeg";
import img19 from "../../images/award/states/uttarpradesh/photo1645679260-19-150x150.jpeg";
import img20 from "../../images/award/states/uttarpradesh/photo1645679260-20-150x150.jpeg";
import img21 from "../../images/award/states/uttarpradesh/photo1645679260-21-150x150.jpeg";
import img22 from "../../images/award/states/uttarpradesh/photo1645679260-22-150x150.jpeg";
import img23 from "../../images/award/states/uttarpradesh/photo1645679260-23-150x150.jpeg";
import img24 from "../../images/award/states/uttarpradesh/photo1645679260-24-150x150.jpeg";
import img25 from "../../images/award/states/uttarpradesh/photo1645679260-25-150x150.jpeg";
import img26 from "../../images/award/states/uttarpradesh/photo1645679260-26-150x150.jpeg";
import img27 from "../../images/award/states/uttarpradesh/photo1645679260-27-150x150.jpeg";
import img28 from "../../images/award/states/uttarpradesh/photo1645679260-28-150x150.jpeg";
import img29 from "../../images/award/states/uttarpradesh/photo1645679260-29-150x150.jpeg";
import img31 from "../../images/award/states/uttarpradesh/photo1645679260-31-150x150.jpeg";
import img32 from "../../images/award/states/uttarpradesh/photo1645679260-32-150x150.jpeg";
import img33 from "../../images/award/states/uttarpradesh/photo1645679260-33-150x150.jpeg";



import img01 from "../../images/award/states/uttarpradesh/photo1645679301-1-150x150.jpeg";
import img02 from "../../images/award/states/uttarpradesh/photo1645679301-2-150x150.jpeg";
import img03 from "../../images/award/states/uttarpradesh/photo1645679301-3-150x150.jpeg";
import img04 from "../../images/award/states/uttarpradesh/photo1645679301-4-150x150.jpeg";
import img05 from "../../images/award/states/uttarpradesh/photo1645679301-5-150x150.jpeg";
import img06 from "../../images/award/states/uttarpradesh/photo1645679301-6-150x150.jpeg";
import img07 from "../../images/award/states/uttarpradesh/photo1645679301-7-150x150.jpeg";
import img08 from "../../images/award/states/uttarpradesh/photo1645679301-8-150x150.jpeg";
import img09 from "../../images/award/states/uttarpradesh/photo1645679301-9-150x150.jpeg";
import img100 from "../../images/award/states/uttarpradesh/photo1645679301-10-150x150.jpeg";
import img110 from "../../images/award/states/uttarpradesh/photo1645679301-11-150x150.jpeg";
import img120 from "../../images/award/states/uttarpradesh/photo1645679301-12-150x150.jpeg";
import img130 from "../../images/award/states/uttarpradesh/photo1645679301-13-150x150.jpeg";
import img140 from "../../images/award/states/uttarpradesh/photo1645679301-14-150x150.jpeg";
import img150 from "../../images/award/states/uttarpradesh/photo1645679301-15-150x150.jpeg";
import img160 from "../../images/award/states/uttarpradesh/photo1645679301-16-150x150.jpeg";
import img170 from "../../images/award/states/uttarpradesh/photo1645679301-17-150x150.jpeg";
import img180 from "../../images/award/states/uttarpradesh/photo1645679301-18-150x150.jpeg";
import img190 from "../../images/award/states/uttarpradesh/photo1645679301-19-150x150.jpeg";
import img200 from "../../images/award/states/uttarpradesh/photo1645679301-20-150x150.jpeg";
import img210 from "../../images/award/states/uttarpradesh/photo1645679301-21-150x150.jpeg";

export const MuiImageListUttarPradesh = () => {
  return (
    <Stack
      spacing={4}
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
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

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
  {
    img: img21,
    title: "Title",
  },
  {
    img: img22,
    title: "Title",
  },
  {
    img: img23,
    title: "Title",
  },
  {
    img: img24,
    title: "Title",
  },
  {
    img: img25,
    title: "Title",
  },
  {
    img: img26,
    title: "Title",
  },
  {
    img: img27,
    title: "Title",
  },
  {
    img: img28,
    title: "Title",
  },
  {
    img: img29,
    title: "Title",
  },
  // {
  //   img: img30,
  //   title: "Title",
  // },
  {
    img: img31,
    title: "Title",
  },
  {
    img: img32,
    title: "Title",
  },
  {
    img: img33,
    title: "Title",
  },




  {
    img: img01,
    title: "Title",
  },
  {
    img: img02,
    title: "Title",
  },
  {
    img: img03,
    title: "Title",
  },
  {
    img: img04,
    title: "Title",
  },
  {
    img: img05,
    title: "Title",
  },
  {
    img: img06,
    title: "Title",
  },
  {
    img: img07,
    title: "Title",
  },
  {
    img: img08,
    title: "Title",
  },
  {
    img: img09,
    title: "Title",
  },
  {
    img: img100,
    title: "Title",
  },
  {
    img: img110,
    title: "Title",
  },
  {
    img: img120,
    title: "Title",
  },
  {
    img: img130,
    title: "Title",
  },
  {
    img: img140,
    title: "Title",
  },
  {
    img: img150,
    title: "Title",
  },
  {
    img: img160,
    title: "Title",
  },
  {
    img: img170,
    title: "Title",
  },
  {
    img: img180,
    title: "Title",
  },
  {
    img: img190,
    title: "Title",
  },
  {
    img: img200,
    title: "Title",
  },
  {
    img: img210,
    title: "Title",
  },
];
