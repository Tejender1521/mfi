import { Stack, ImageList, ImageListItem, Box } from "@mui/material";

import img1 from "../../images/award/2007/1.jpg";
import img2 from "../../images/award/2007/2.jpg";
import img3 from "../../images/award/2007/3.jpg";
import img4 from "../../images/award/2007/4.jpg";


export const MuiImageList2007 = () => {
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
  }
];
