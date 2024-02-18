import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Title from "../../components/Title";

import { MuiImageListMaharashtra } from "./maharashtra";
import { MuiImageListSikkim } from "./sikkim";
import { MuiImageListMadhyaPradesh } from "./madhyapradesh";
import { MuiImageListChhattisgarh } from "./chhattisgarh";
import { MuiImageListChandigarh } from "./chandigarh";
import { MuiImageListUttarakhand } from "./uttarakhand";
import { MuiImageListUttarPradesh } from "./uttarpradesh";
import { MuiImageListTamilNadu } from "./tamilnadu";
;
function StateActivity() {
  return (
    <>
      <Title text="State Activity" />
      <Tabs defaultIndex={0} className="">
        <TabList className="text-indigo-800 flex flex-wrap justify-around text-xl md:mx-10 sm:text-3xl my-6">
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Maharashtra</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Sikkim</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Madhya Pradesh</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Chhattisgarh</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Chandigarh</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Uttarakhand</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Uttar Pradesh</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">Tamil Nadu</Tab>
        </TabList>

        <TabPanel>
          <MuiImageListMaharashtra />
        </TabPanel>
        <TabPanel>
          <MuiImageListSikkim />
        </TabPanel>
        <TabPanel>
          <MuiImageListMadhyaPradesh />
        </TabPanel>
        <TabPanel>
          <MuiImageListChhattisgarh />
        </TabPanel>
        <TabPanel>
          <MuiImageListChandigarh />
        </TabPanel>
        <TabPanel>
          <MuiImageListUttarakhand />
        </TabPanel>
        <TabPanel>
          <MuiImageListUttarPradesh />
        </TabPanel>
        <TabPanel>
          <MuiImageListTamilNadu />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default StateActivity;
