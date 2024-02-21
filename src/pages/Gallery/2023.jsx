import { Stack, ImageList, ImageListItem, Box } from "@mui/material";


import img3 from "../../images/award/2023/DSC_0046.jpg";
import img4 from "../../images/award/2023/DSC_0070.jpg";
import img5 from "../../images/award/2023/DSC_0074.jpg";
import img6 from "../../images/award/2023/DSC_0085.jpg";
import img7 from "../../images/award/2023/DSC_0092.jpg";
import img8 from "../../images/award/2023/DSC_0098.jpg";
import img9 from "../../images/award/2023/DSC_0175.jpg";
import img10 from "../../images/award/2023/DSC_0178.jpg";
import img11 from "../../images/award/2023/DSC_0184.jpg";
import img12 from "../../images/award/2023/DSC_0191.jpg";
import img13 from "../../images/award/2023/DSC_0193.jpg";
import img14 from "../../images/award/2023/DSC_0271.jpg";
import img15 from "../../images/award/2023/DSC_0277.jpg";
import img16 from "../../images/award/2023/DSC_0283.jpg";
import img17 from "../../images/award/2023/DSC_0289.jpg";
import img18 from "../../images/award/2023/DSC_0296.jpg";
import img19 from "../../images/award/2023/DSC_0302.jpg";
import img20 from "../../images/award/2023/DSC_0305.jpg";
import img21 from "../../images/award/2023/DSC_0316.jpg";
import img22 from "../../images/award/2023/DSC_0318.jpg";
import img23 from "../../images/award/2023/DSC_0321.jpg";
import img24 from "../../images/award/2023/DSC_0324.jpg";
import img25 from "../../images/award/2023/DSC_0366.jpg";
import img26 from "../../images/award/2023/DSC_0368.jpg";
import img27 from "../../images/award/2023/DSC_0378.jpg";
import img28 from "../../images/award/2023/DSC_0385.jpg";
import img29 from "../../images/award/2023/DSC_0408.jpg";
import img30 from "../../images/award/2023/DSC_0411.jpg";
import img31 from "../../images/award/2023/DSC_0415.jpg";
import img32 from "../../images/award/2023/DSC_0421.jpg";
import img33 from "../../images/award/2023/DSC_0423.jpg";
import img34 from "../../images/award/2023/DSC_0425.jpg";
import img35 from "../../images/award/2023/DSC_0428.jpg";
import img36 from "../../images/award/2023/DSC_0430.jpg";
import img37 from "../../images/award/2023/DSC_0431.jpg";

export const MuiImageList2023 = () => {
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

// Update the itemData array with the new image objects
const itemData = [
  { img: img3, title: "Title" },
  { img: img4, title: "Title" },
  { img: img5, title: "Title" },
  { img: img6, title: "Title" },
  { img: img7, title: "Title" },
  { img: img8, title: "Title" },
  { img: img9, title: "Title" },
  { img: img10, title: "Title" },
  { img: img11, title: "Title" },
  { img: img12, title: "Title" },
  { img: img13, title: "Title" },
  { img: img14, title: "Title" },
  { img: img15, title: "Title" },
  { img: img16, title: "Title" },
  { img: img17, title: "Title" },
  { img: img18, title: "Title" },
  { img: img19, title: "Title" },
  { img: img20, title: "Title" },
  { img: img21, title: "Title" },
  { img: img22, title: "Title" },
  { img: img23, title: "Title" },
  { img: img24, title: "Title" },
  { img: img25, title: "Title" },
  { img: img26, title: "Title" },
  { img: img27, title: "Title" },
  { img: img28, title: "Title" },
  { img: img29, title: "Title" },
  { img: img30, title: "Title" },
  { img: img31, title: "Title" },
  { img: img32, title: "Title" },
  { img: img33, title: "Title" },
  { img: img34, title: "Title" },
  { img: img35, title: "Title" },
  { img: img36, title: "Title" },
  { img: img37, title: "Title" },
];
