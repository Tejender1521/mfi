import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Title from '../../components/Title'
import { Grid, Typography } from '@mui/material';
import { MuiImageList2019 } from './2019';
import { MuiImageList2020 } from './2020';
import { MuiImageList2021 } from './2021';
import { MuiImageList2022 } from './2022';
import { MuiImageList2018 } from "./2018";
import { MuiImageList2016 } from "./2016";
import { MuiImageList2015 } from "./2015";
import { MuiImageList2014 } from "./2014";
import { MuiImageList2013 } from "./2013";
import { MuiImageList2012 } from "./2012";
import { MuiImageList2011 } from "./2011";
import { MuiImageList2010 } from "./2010";
import { MuiImageList2009 } from "./2009";
import { MuiImageList2008 } from "./2008";
import { MuiImageList2007 } from "./2007";
function Award() {
  return (
    <>
      <Title text="Awards Gallery" />
      <Tabs defaultIndex={0} className="">
        <TabList className="text-indigo-800 flex flex-wrap justify-around text-xl md:mx-10 sm:text-3xl my-6">
          
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2022</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2021</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2020</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2019</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2018</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2016</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2015</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2014</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2013</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2012</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2011</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2010</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2009</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2008</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2007</Tab>
        </TabList>

        
        <TabPanel>
          <MuiImageList2022 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2021 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2020 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2019 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2018 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2016 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2015 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2014 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2013 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2012 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2011 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2010 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2009 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2008 />
        </TabPanel>
        <TabPanel>
          <MuiImageList2007 />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Award;
