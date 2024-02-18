import { Stack, ImageList, ImageListItem, Box } from "@mui/material";

import img1 from "../../images/award/states/chhattisgarh/photo1645677313-1-150x150.jpeg";
import img2 from "../../images/award/states/chhattisgarh/photo1645677313-2-150x150.jpeg";
import img3 from "../../images/award/states/chhattisgarh/photo1645677313-3-150x150.jpeg";
import img4 from "../../images/award/states/chhattisgarh/photo1645677313-4-150x150.jpeg";
import img5 from "../../images/award/states/chhattisgarh/photo1645677313-5-150x150.jpeg";
import img6 from "../../images/award/states/chhattisgarh/photo1645677313-6-150x150.jpeg";
import img7 from "../../images/award/states/chhattisgarh/photo1645677313-7-150x150.jpeg";
import img8 from "../../images/award/states/chhattisgarh/photo1645677313-8-150x150.jpeg";
import img9 from "../../images/award/states/chhattisgarh/photo1645677313-9-150x150.jpeg";
import img10 from "../../images/award/states/chhattisgarh/photo1645677313-10-150x150.jpeg";
import img11 from "../../images/award/states/chhattisgarh/photo1645677313-11-150x150.jpeg";
import img12 from "../../images/award/states/chhattisgarh/photo1645677313-12-150x150.jpeg";
import img13 from "../../images/award/states/chhattisgarh/photo1645677313-13-150x150.jpeg";
import img14 from "../../images/award/states/chhattisgarh/photo1645677313-150x150.jpeg";


export const MuiImageListChhattisgarh = () => {
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
  }
];
