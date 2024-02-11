import { Stack, ImageList, ImageListItem, Box } from "@mui/material";

import img1 from "../../images/award/2018/1.jpg";
import img2 from "../../images/award/2018/2.jpg";
import img3 from "../../images/award/2018/3.jpg";
import img4 from "../../images/award/2018/4.jpg";
import img5 from "../../images/award/2018/5.jpg";
import img6 from "../../images/award/2018/6.jpg";
import img7 from "../../images/award/2018/7.jpg";
import img8 from "../../images/award/2018/8.jpg";
import img9 from "../../images/award/2018/9.jpg";
import img10 from "../../images/award/2018/10.jpg";
import img11 from "../../images/award/2018/11.jpg";
import img12 from "../../images/award/2018/12.jpg";
import img13 from "../../images/award/2018/13.jpg";
import img14 from "../../images/award/2018/14.jpg";
import img15 from "../../images/award/2018/15.jpg";
import img16 from "../../images/award/2018/16.jpg";
import img17 from "../../images/award/2018/17.jpg";
import img18 from "../../images/award/2018/18.jpg";
import img19 from "../../images/award/2018/19.jpg";
import img20 from "../../images/award/2018/20.jpg";
import img21 from "../../images/award/2018/21.jpg";
import img22 from "../../images/award/2018/22.jpg";
import img23 from "../../images/award/2018/23.jpg";

export const MuiImageList2018 = () => {
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
  }
];
