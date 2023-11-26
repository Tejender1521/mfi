import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Title from '../../components/Title'
import { Grid, Typography } from '@mui/material';
import { MuiImageList2019 } from './2019';
import { MuiImageList2020 } from './2020';
import { MuiImageList2021 } from './2021';
import { MuiImageList2022 } from './2022';

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
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2017</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2016</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2015</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2014</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2013</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2012</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2010</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2009</Tab>
          <Tab className="px-4 pt-2 pb-3 cursor-pointer">2011</Tab>
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
      </Tabs>
    </>
  );
}

export default Award;
