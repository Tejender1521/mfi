import { Stack, ImageList, ImageListItem, Box } from "@mui/material";

import img1 from "../../images/award/states/uttarakhand/photo1645679774-1-150x150.jpeg";
import img2 from "../../images/award/states/uttarakhand/photo1645679774-2-150x150.jpeg";
import img3 from "../../images/award/states/uttarakhand/photo1645679774-3-150x150.jpeg";
import img4 from "../../images/award/states/uttarakhand/photo1645679774-4-150x150.jpeg";
import img5 from "../../images/award/states/uttarakhand/photo1645679774-5-150x150.jpeg";
import img6 from "../../images/award/states/uttarakhand/photo1645679774-6-150x150.jpeg";
import img7 from "../../images/award/states/uttarakhand/photo1645679774-7-150x150.jpeg";
import img8 from "../../images/award/states/uttarakhand/photo1645679774-8-150x150.jpeg";
import img9 from "../../images/award/states/uttarakhand/photo1645679774-9-150x150.jpeg";
import img10 from "../../images/award/states/uttarakhand/photo1645679774-10-150x150.jpeg";
import img11 from "../../images/award/states/uttarakhand/photo1645679774-11-150x150.jpeg";
import img12 from "../../images/award/states/uttarakhand/photo1645679774-12-150x150.jpeg";
import img13 from "../../images/award/states/uttarakhand/photo1645679774-13-150x150.jpeg";
import img14 from "../../images/award/states/uttarakhand/photo1645679774-14-150x150.jpeg";
import img15 from "../../images/award/states/uttarakhand/photo1645679774-15-150x150.jpeg";
import img16 from "../../images/award/states/uttarakhand/photo1645679774-16-150x150.jpeg";
import img17 from "../../images/award/states/uttarakhand/photo1645679774-17-150x150.jpeg";
import img18 from "../../images/award/states/uttarakhand/photo1645679774-18-150x150.jpeg";
import img19 from "../../images/award/states/uttarakhand/photo1645679774-19-150x150.jpeg";
import img20 from "../../images/award/states/uttarakhand/photo1645679774-20-150x150.jpeg";
import img21 from "../../images/award/states/uttarakhand/photo1645679774-21-150x150.jpeg";
import img22 from "../../images/award/states/uttarakhand/photo1645679774-22-150x150.jpeg";
import img23 from "../../images/award/states/uttarakhand/photo1645679774-23-150x150.jpeg";
import img24 from "../../images/award/states/uttarakhand/photo1645679774-24-150x150.jpeg";
import img25 from "../../images/award/states/uttarakhand/photo1645679774-25-150x150.jpeg";
import img26 from "../../images/award/states/uttarakhand/photo1645679774-26-150x150.jpeg";
import img27 from "../../images/award/states/uttarakhand/photo1645679774-27-150x150.jpeg";
import img28 from "../../images/award/states/uttarakhand/photo1645679774-28-150x150.jpeg";
import img29 from "../../images/award/states/uttarakhand/photo1645679774-29-150x150.jpeg";
import img30 from "../../images/award/states/uttarakhand/photo1645679774-30-150x150.jpeg";
import img31 from "../../images/award/states/uttarakhand/photo1645679774-31-150x150.jpeg";
import img32 from "../../images/award/states/uttarakhand/photo1645679774-32-150x150.jpeg";
import img33 from "../../images/award/states/uttarakhand/photo1645679774-33-150x150.jpeg";
import img34 from "../../images/award/states/uttarakhand/photo1645679774-34-150x150.jpeg";
import img35 from "../../images/award/states/uttarakhand/photo1645679774-35-150x150.jpeg";
import img36 from "../../images/award/states/uttarakhand/photo1645679774-26-150x150.jpeg";
import img37 from "../../images/award/states/uttarakhand/photo1645679774-27-150x150.jpeg";
import img38 from "../../images/award/states/uttarakhand/photo1645679774-28-150x150.jpeg";
import img39 from "../../images/award/states/uttarakhand/photo1645679774-29-150x150.jpeg";
import img40 from "../../images/award/states/uttarakhand/photo1645679774-30-150x150.jpeg";
import img41 from "../../images/award/states/uttarakhand/photo1645679774-31-150x150.jpeg";
import img42 from "../../images/award/states/uttarakhand/photo1645679774-32-150x150.jpeg";
import img43 from "../../images/award/states/uttarakhand/photo1645679774-33-150x150.jpeg";


export const MuiImageListUttarakhand = () => {
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
  {
    img: img30,
    title: "Title",
  },
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
    img: img34,
    title: "Title",
  },
  {
    img: img35,
    title: "Title",
  },
  {
    img: img36,
    title: "Title",
  },
  {
    img: img37,
    title: "Title",
  },
  {
    img: img38,
    title: "Title",
  },
  {
    img: img39,
    title: "Title",
  },
  {
    img: img40,
    title: "Title",
  },
  
  {
    img: img41,
    title: "Title",
  },
  {
    img: img42,
    title: "Title",
  },
  {
    img: img43,
    title: "Title",
  },
];
