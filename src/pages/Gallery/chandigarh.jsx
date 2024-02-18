import { Stack, ImageList, ImageListItem, Box } from "@mui/material";

// Import images
import img1 from "../../images/award/states/chandigarh/42DSC_5347-150x150.png";
import img2 from "../../images/award/states/chandigarh/236DSC_5344-150x150.png";
import img3 from "../../images/award/states/chandigarh/425DSC_5333-150x150.png";
import img4 from "../../images/award/states/chandigarh/767DSC_5336-150x150.png";
import img5 from "../../images/award/states/chandigarh/793DSC_5321-150x150.png";
import img6 from "../../images/award/states/chandigarh/1120DSC_5325-150x150.png";
import img7 from "../../images/award/states/chandigarh/1391DSC_5298-150x150.png";
import img8 from "../../images/award/states/chandigarh/1884DSC_5309-150x150.png";
import img9 from "../../images/award/states/chandigarh/2354DSC_5341-150x150.png";
import img10 from "../../images/award/states/chandigarh/2399DSC_5311-150x150.png";
import img11 from "../../images/award/states/chandigarh/2469DSC_5315-150x150.png";
import img12 from "../../images/award/states/chandigarh/2674DSC_5307-150x150.png";
import img13 from "../../images/award/states/chandigarh/2985DSC_5301-150x150.png";
import img14 from "../../images/award/states/chandigarh/3290DSC_5319-150x150.png";
import img15 from "../../images/award/states/chandigarh/3503DSC_5317-150x150.png";
import img16 from "../../images/award/states/chandigarh/4016DSC_5305-150x150.png";
import img17 from "../../images/award/states/chandigarh/4461DSC_5297-150x150.png";
import img18 from "../../images/award/states/chandigarh/4664DSC_5332-150x150.png";
import img19 from "../../images/award/states/chandigarh/4826DSC_5356-150x150.png";
import img20 from "../../images/award/states/chandigarh/5495IMG_1423-1-150x150.png";
import img21 from "../../images/award/states/chandigarh/5848DSC_5300-150x150.png";
import img22 from "../../images/award/states/chandigarh/5930DSC_5312-150x150.png";
import img23 from "../../images/award/states/chandigarh/6598DSC_5346-150x150.png";
import img24 from "../../images/award/states/chandigarh/7748DSC_5327-150x150.png";
import img25 from "../../images/award/states/chandigarh/8497DSC_5338-150x150.png";
import img26 from "../../images/award/states/chandigarh/8860DSC_5302-150x150.png";
import img27 from "../../images/award/states/chandigarh/8898DSC_5329-150x150.png";
import img28 from "../../images/award/states/chandigarh/9815DSC_5340-150x150.png";
import img29 from "../../images/award/states/chandigarh/FB_IMG_1531368992201-150x150.jpg";
import img30 from "../../images/award/states/chandigarh/FB_IMG_1531369004782-150x150.jpg";
import img31 from "../../images/award/states/chandigarh/FB_IMG_1531417008630-150x150.jpg";
import img32 from "../../images/award/states/chandigarh/FB_IMG_1531505728167-150x150.jpg";
import img33 from "../../images/award/states/chandigarh/FB_IMG_1531505766904-150x150.jpg";
import img34 from "../../images/award/states/chandigarh/FB_IMG_1531505786715-150x150.jpg";
import img35 from "../../images/award/states/chandigarh/FB_IMG_1531505796971-150x150.jpg";
import img36 from "../../images/award/states/chandigarh/FB_IMG_1531505819891-150x150.jpg";
import img37 from "../../images/award/states/chandigarh/FB_IMG_1531505843535-150x150.jpg";
import img38 from "../../images/award/states/chandigarh/FB_IMG_1531505853053-150x150.jpg";
import img39 from "../../images/award/states/chandigarh/FB_IMG_1531505876352-150x150.jpg";
import img40 from "../../images/award/states/chandigarh/FB_IMG_1531505897658-150x150.jpg";
import img41 from "../../images/award/states/chandigarh/FB_IMG_1531838502490-150x150.jpg";
import img42 from "../../images/award/states/chandigarh/FB_IMG_1532165730907-150x150.jpg";
import img43 from "../../images/award/states/chandigarh/FB_IMG_1532165742682-150x150.jpg";
import img44 from "../../images/award/states/chandigarh/FB_IMG_1532165758280-150x150.jpg";
import img45 from "../../images/award/states/chandigarh/FB_IMG_1532165788097-150x150.jpg";
import img46 from "../../images/award/states/chandigarh/FB_IMG_1532165801425-150x150.jpg";
import img47 from "../../images/award/states/chandigarh/FB_IMG_1532165832696-150x150.jpg";
import img48 from "../../images/award/states/chandigarh/FB_IMG_1532165841608-150x150.jpg";
import img49 from "../../images/award/states/chandigarh/FB_IMG_1532165851587-150x150.jpg";
import img50 from "../../images/award/states/chandigarh/FB_IMG_1532165864764-150x150.jpg";
import img51 from "../../images/award/states/chandigarh/FB_IMG_1532165881425-150x150.jpg";
import img52 from "../../images/award/states/chandigarh/FB_IMG_1532165891953-150x150.jpg";
import img53 from "../../images/award/states/chandigarh/FB_IMG_1532165902041-150x150.jpg";
import img54 from "../../images/award/states/chandigarh/FB_IMG_1532165911512-150x150.jpg";
import img55 from "../../images/award/states/chandigarh/FB_IMG_1532165922554-150x150.jpg";
import img56 from "../../images/award/states/chandigarh/FB_IMG_1532165934039-150x150.jpg";
import img57 from "../../images/award/states/chandigarh/FB_IMG_1532166047777-150x150.jpg";
import img58 from "../../images/award/states/chandigarh/FB_IMG_1532166062985-150x150.jpg";
import img59 from "../../images/award/states/chandigarh/FB_IMG_1532166075870-150x150.jpg";
import img60 from "../../images/award/states/chandigarh/FB_IMG_1532166085256-150x150.jpg";
import img61 from "../../images/award/states/chandigarh/FB_IMG_1532166095172-150x150.jpg";
import img62 from "../../images/award/states/chandigarh/FB_IMG_1532166107084-150x150.jpg";
import img63 from "../../images/award/states/chandigarh/FB_IMG_1532166118162-150x150.jpg";
import img64 from "../../images/award/states/chandigarh/FB_IMG_1532166128126-150x150.jpg";
import img65 from "../../images/award/states/chandigarh/FB_IMG_1532166136558-150x150.jpg";
import img66 from "../../images/award/states/chandigarh/FB_IMG_1532166144858-150x150.jpg";
import img67 from "../../images/award/states/chandigarh/FB_IMG_1532166153180-150x150.jpg";
import img68 from "../../images/award/states/chandigarh/FB_IMG_1532166162261-150x150.jpg";
import img69 from "../../images/award/states/chandigarh/FB_IMG_1532166170711-150x150.jpg";
import img70 from "../../images/award/states/chandigarh/FB_IMG_1532166180713-150x150.jpg";
import img71 from "../../images/award/states/chandigarh/FB_IMG_1532166194298-150x150.jpg";
import img72 from "../../images/award/states/chandigarh/FB_IMG_1532166205204-150x150.jpg";
import img73 from "../../images/award/states/chandigarh/FB_IMG_1532166217355-150x150.jpg";
import img74 from "../../images/award/states/chandigarh/FB_IMG_1532166228352-150x150.jpg";
import img75 from "../../images/award/states/chandigarh/FB_IMG_1532166274380-150x150.jpg";
import img76 from "../../images/award/states/chandigarh/IMG_20220527_001858_491-150x150.jpg";
import img77 from "../../images/award/states/chandigarh/IMG_20220527_001906_482-150x150.jpg";
import img78 from "../../images/award/states/chandigarh/IMG_20220527_001908_561-150x150.jpg";
import img79 from "../../images/award/states/chandigarh/IMG_20220527_001909_445-150x150.jpg";
import img80 from "../../images/award/states/chandigarh/IMG_20220527_001911_411-150x150.jpg";
import img81 from "../../images/award/states/chandigarh/IMG_20220527_001913_244-150x150.jpg";
import img82 from "../../images/award/states/chandigarh/IMG_20220527_001914_117-150x150.jpg";
import img83 from "../../images/award/states/chandigarh/IMG_20220527_001915_959-150x150.jpg";
import img84 from "../../images/award/states/chandigarh/IMG_20220527_001917_003-150x150.jpg";
import img85 from "../../images/award/states/chandigarh/IMG_20220527_001920_674_2-150x150.jpg";
import img86 from "../../images/award/states/chandigarh/IMG_20220527_001923_163-150x150.jpg";
import img87 from "../../images/award/states/chandigarh/IMG_20220527_001924_061-150x150.jpg";
import img88 from "../../images/award/states/chandigarh/IMG_20220527_001926_153-150x150.jpg";
import img89 from "../../images/award/states/chandigarh/IMG_20220527_001927_656-150x150.jpg";
import img90 from "../../images/award/states/chandigarh/IMG_20220527_001929_076-150x150.jpg";
import img91 from "../../images/award/states/chandigarh/IMG_20220527_001930_647-150x150.jpg";
import img92 from "../../images/award/states/chandigarh/IMG_20220527_001931_470-150x150.jpg";
import img93 from "../../images/award/states/chandigarh/IMG_20220527_001933_220-150x150.jpg";
import img94 from "../../images/award/states/chandigarh/IMG_20220527_001934_517-150x150.jpg";
import img95 from "../../images/award/states/chandigarh/IMG_20220527_001936_383-150x150.jpg";
import img96 from "../../images/award/states/chandigarh/IMG_20220527_001937_625-150x150.jpg";
import img97 from "../../images/award/states/chandigarh/IMG_20220527_001939_825-150x150.jpg";
import img98 from "../../images/award/states/chandigarh/IMG_20220527_001941_193-150x150.jpg";
import img99 from "../../images/award/states/chandigarh/IMG_20220527_001942_565-150x150.jpg";
import img100 from "../../images/award/states/chandigarh/IMG_20220527_001943_305-150x150.jpg";
import img101 from "../../images/award/states/chandigarh/IMG_20220527_001945_380-150x150.jpg";
import img102 from "../../images/award/states/chandigarh/IMG_20220527_001947_122-150x150.jpg";
import img103 from "../../images/award/states/chandigarh/IMG_20220527_001947_899-150x150.jpg";
import img104 from "../../images/award/states/chandigarh/IMG_20220527_001949_248-150x150.jpg";
import img105 from "../../images/award/states/chandigarh/mohali-1-150x150.jpg";
import img106 from "../../images/award/states/chandigarh/mohali-150x150.jpg";

const itemData = [
  {
    img: img1,
    title: "42DSC_5347-150x150.png",
  },
  {
    img: img2,
    title: "236DSC_5344-150x150.png",
  },
  {
    img: img3,
    title: "425DSC_5333-150x150.png",
  },
  {
    img: img4,
    title: "767DSC_5336-150x150.png",
  },
  {
    img: img5,
    title: "793DSC_5321-150x150.png",
  },
  {
    img: img6,
    title: "1120DSC_5325-150x150.png",
  },
  {
    img: img7,
    title: "1391DSC_5298-150x150.png",
  },
  {
    img: img8,
    title: "1884DSC_5309-150x150.png",
  },
  {
    img: img9,
    title: "2354DSC_5341-150x150.png",
  },
  {
    img: img10,
    title: "2399DSC_5311-150x150.png",
  },
  {
    img: img11,
    title: "2469DSC_5315-150x150.png",
  },
  {
    img: img12,
    title: "2674DSC_5307-150x150.png",
  },
  {
    img: img13,
    title: "2985DSC_5301-150x150.png",
  },
  {
    img: img14,
    title: "3290DSC_5319-150x150.png",
  },
  {
    img: img15,
    title: "3503DSC_5317-150x150.png",
  },
  {
    img: img16,
    title: "4016DSC_5305-150x150.png",
  },
  {
    img: img17,
    title: "4461DSC_5297-150x150.png",
  },
  {
    img: img18,
    title: "4664DSC_5332-150x150.png",
  },
  {
    img: img19,
    title: "4826DSC_5356-150x150.png",
  },
  {
    img: img20,
    title: "5495IMG_1423-1-150x150.png",
  },
  {
    img: img21,
    title: "5848DSC_5300-150x150.png",
  },
  {
    img: img22,
    title: "5930DSC_5312-150x150.png",
  },
  {
    img: img23,
    title: "6598DSC_5346-150x150.png",
  },
  {
    img: img24,
    title: "7748DSC_5327-150x150.png",
  },
  {
    img: img25,
    title: "8497DSC_5338-150x150.png",
  },
  {
    img: img26,
    title: "8860DSC_5302-150x150.png",
  },
  {
    img: img27,
    title: "8898DSC_5329-150x150.png",
  },
  {
    img: img28,
    title: "9815DSC_5340-150x150.png",
  },
  {
    img: img29,
    title: "FB_IMG_1531368992201-150x150.jpg",
  },
  {
    img: img30,
    title: "FB_IMG_1531369004782-150x150.jpg",
  },
  {
    img: img31,
    title: "FB_IMG_1531417008630-150x150.jpg",
  },
  {
    img: img32,
    title: "FB_IMG_1531505728167-150x150.jpg",
  },
  {
    img: img33,
    title: "FB_IMG_1531505766904-150x150.jpg",
  },
  {
    img: img34,
    title: "FB_IMG_1531505786715-150x150.jpg",
  },
  {
    img: img35,
    title: "FB_IMG_1531505796971-150x150.jpg",
  },
  {
    img: img36,
    title: "FB_IMG_1531505819891-150x150.jpg",
  },
  {
    img: img37,
    title: "FB_IMG_1531505843535-150x150.jpg",
  },
  {
    img: img38,
    title: "FB_IMG_1531505853053-150x150.jpg",
  },
  {
    img: img39,
    title: "FB_IMG_1531505876352-150x150.jpg",
  },
  {
    img: img40,
    title: "FB_IMG_1531505897658-150x150.jpg",
  },
  {
    img: img41,
    title: "FB_IMG_1531838502490-150x150.jpg",
  },
  {
    img: img42,
    title: "FB_IMG_1532165730907-150x150.jpg",
  },
  {
    img: img43,
    title: "FB_IMG_1532165742682-150x150.jpg",
  },
  {
    img: img44,
    title: "FB_IMG_1532165758280-150x150.jpg",
  },
  {
    img: img45,
    title: "FB_IMG_1532165788097-150x150.jpg",
  },
  {
    img: img46,
    title: "FB_IMG_1532165801425-150x150.jpg",
  },
  {
    img: img47,
    title: "FB_IMG_1532165832696-150x150.jpg",
  },
  {
    img: img48,
    title: "FB_IMG_1532165841608-150x150.jpg",
  },
  {
    img: img49,
    title: "FB_IMG_1532165851587-150x150.jpg",
  },
  {
    img: img50,
    title: "FB_IMG_1532165864764-150x150.jpg",
  },
  {
    img: img51,
    title: "FB_IMG_1532165881425-150x150.jpg",
  },
  {
    img: img52,
    title: "FB_IMG_1532165891953-150x150.jpg",
  },
  {
    img: img53,
    title: "FB_IMG_1532165902041-150x150.jpg",
  },
  {
    img: img54,
    title: "FB_IMG_1532165911512-150x150.jpg",
  },
  {
    img: img55,
    title: "FB_IMG_1532165922554-150x150.jpg",
  },
  {
    img: img56,
    title: "FB_IMG_1532165934039-150x150.jpg",
  },
  {
    img: img57,
    title: "FB_IMG_1532166047777-150x150.jpg",
  },
  {
    img: img58,
    title: "FB_IMG_1532166062985-150x150.jpg",
  },
  {
    img: img59,
    title: "FB_IMG_1532166075870-150x150.jpg",
  },
  {
    img: img60,
    title: "FB_IMG_1532166085256-150x150.jpg",
  },
  {
    img: img61,
    title: "FB_IMG_1532166095172-150x150.jpg",
  },
  {
    img: img62,
    title: "FB_IMG_1532166107084-150x150.jpg",
  },
  {
    img: img63,
    title: "FB_IMG_1532166118162-150x150.jpg",
  },
  {
    img: img64,
    title: "FB_IMG_1532166128126-150x150.jpg",
  },
  {
    img: img65,
    title: "FB_IMG_1532166136558-150x150.jpg",
  },
  {
    img: img66,
    title: "FB_IMG_1532166144858-150x150.jpg",
  },
  {
    img: img67,
    title: "FB_IMG_1532166153180-150x150.jpg",
  },
  {
    img: img68,
    title: "FB_IMG_1532166162261-150x150.jpg",
  },
  {
    img: img69,
    title: "FB_IMG_1532166170711-150x150.jpg",
  },
  {
    img: img70,
    title: "FB_IMG_1532166180713-150x150.jpg",
  },
  {
    img: img71,
    title: "FB_IMG_1532166194298-150x150.jpg",
  },
  {
    img: img72,
    title: "FB_IMG_1532166205204-150x150.jpg",
  },
  {
    img: img73,
    title: "FB_IMG_1532166217355-150x150.jpg",
  },
  {
    img: img74,
    title: "FB_IMG_1532166228352-150x150.jpg",
  },
  {
    img: img75,
    title: "FB_IMG_1532166274380-150x150.jpg",
  },
  {
    img: img76,
    title: "IMG_20220527_001858_491-150x150.jpg",
  },
  {
    img: img77,
    title: "IMG_20220527_001906_482-150x150.jpg",
  },
  {
    img: img78,
    title: "IMG_20220527_001908_561-150x150.jpg",
  },
  {
    img: img79,
    title: "IMG_20220527_001909_445-150x150.jpg",
  },
  {
    img: img80,
    title: "IMG_20220527_001911_411-150x150.jpg",
  },
  {
    img: img81,
    title: "IMG_20220527_001913_244-150x150.jpg",
  },
  {
    img: img82,
    title: "IMG_20220527_001914_117-150x150.jpg",
  },
  {
    img: img83,
    title: "IMG_20220527_001915_959-150x150.jpg",
  },
  {
    img: img84,
    title: "IMG_20220527_001917_003-150x150.jpg",
  },
  {
    img: img85,
    title: "IMG_20220527_001920_674_2-150x150.jpg",
  },
  {
    img: img86,
    title: "IMG_20220527_001923_163-150x150.jpg",
  },
  {
    img: img87,
    title: "IMG_20220527_001924_061-150x150.jpg",
  },
  {
    img: img88,
    title: "IMG_20220527_001926_153-150x150.jpg",
  },
  {
    img: img89,
    title: "IMG_20220527_001927_656-150x150.jpg",
  },
  {
    img: img90,
    title: "IMG_20220527_001929_076-150x150.jpg",
  },
  {
    img: img91,
    title: "IMG_20220527_001930_647-150x150.jpg",
  },
  {
    img: img92,
    title: "IMG_20220527_001931_470-150x150.jpg",
  },
  {
    img: img93,
    title: "IMG_20220527_001933_220-150x150.jpg",
  },
  {
    img: img94,
    title: "IMG_20220527_001934_517-150x150.jpg",
  },
  {
    img: img95,
    title: "IMG_20220527_001936_383-150x150.jpg",
  },
  {
    img: img96,
    title: "IMG_20220527_001937_625-150x150.jpg",
  },
  {
    img: img97,
    title: "IMG_20220527_001939_825-150x150.jpg",
  },
  {
    img: img98,
    title: "IMG_20220527_001941_193-150x150.jpg",
  },
  {
    img: img99,
    title: "IMG_20220527_001942_565-150x150.jpg",
  },
  {
    img: img100,
    title: "IMG_20220527_001943_305-150x150.jpg",
  },
  {
    img: img101,
    title: "IMG_20220527_001945_380-150x150.jpg",
  },
  {
    img: img102,
    title: "IMG_20220527_001947_122-150x150.jpg",
  },
  {
    img: img103,
    title: "IMG_20220527_001947_899-150x150.jpg",
  },
  {
    img: img104,
    title: "IMG_20220527_001949_248-150x150.jpg",
  },
  {
    img: img105,
    title: "mohali-1-150x150.jpg",
  },
  {
    img: img106,
    title: "mohali-150x150.jpg",
  },
];


export const MuiImageListChandigarh = () => {
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
