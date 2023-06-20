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
      <Title text="Awards Gallery"/>
      <Tabs defaultIndex={0} className=''>
    <TabList className='text-indigo-800 flex justify-around text-xl sm:text-3xl my-6'>
      <Tab className='px-4 pt-2 pb-3'>2019</Tab>
      <Tab className='px-4 pt-2 pb-3'>2020</Tab>
      <Tab className='px-4 pt-2 pb-3'>2021</Tab>
      <Tab className='px-4 pt-2 pb-3'>2022</Tab>
      
    
    </TabList>

    <TabPanel>
      <MuiImageList2019 />
    </TabPanel>
    <TabPanel>
    <MuiImageList2020 />
    </TabPanel>
    <TabPanel>
    <MuiImageList2021 />
    </TabPanel>
    <TabPanel>
    <MuiImageList2022 />
    </TabPanel>
  </Tabs>
    </>
  );
}

export default Award;
