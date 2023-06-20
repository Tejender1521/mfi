import React from 'react'
import Title from '../../components/Title'

import rajeev from '../../images/about/state/rajeev.jpg'
import bajaj from '../../images/about/state/bajaj.jpg'
import saheb from '../../images/about/state/saheb.jpeg'
import mukesh from '../../images/about/state/mukesh.jpg'
import arun from '../../images/about/state/arun.jpg'
import dilliram from '../../images/about/state/dilliram.jpg'
import anandpal from '../../images/about/state/anandpal.jpg'
import nand from '../../images/about/state/nand.jpg'
import satya from '../../images/about/state/satya.jpg'
import vimal from '../../images/about/state/vimal.jpg'
import ranjeet from '../../images/about/state/ranjeet.jpg'
import arvind from '../../images/about/state/arvind.jpg'
import devend from '../../images/about/state/devend.jpg'

function State() {
  const data = [
    {name: 'Dr. Rajeev Pathria', image: rajeev, tag:'President (Himachal Pradesh)'},
    {name: 'J.S.Bajaj', image: bajaj, tag:'President (Maharashtra)'},
    {name: 'Saheb Singh Bajaj', image: saheb, tag:'President (Goa)'},
    {name: 'Mukesh Bedi', image: mukesh, tag:'President (Uttar Pradesh)'},
    {name: 'Arun Sharma', image: arun, tag:'President (Uttarakhand)'},
    {name: 'Dilliram Dulal', image: dilliram, tag:'President (Sikkim)'},
    {name: 'Anandpal Singh Tomar', image: anandpal, tag:'President (Rajasthan)'},
    {name: 'Nand Kishor Yadav', image: nand, tag:'President (Chhattisgarh)'},
    {name: 'Satyanarayan Sharma', image: satya, tag:'President (Madhya Pradesh)'},
    {name: 'Vimal Manchanda', image: vimal, tag:'President (Jammu & Kashmir)'},
    {name: 'Ranjeet Singh', image: ranjeet, tag:'President (Punjab)'},
    {name: 'Arvind Prakash', image: arvind, tag:'President (Uttar Pradesh)'},
    {name: 'Devendra Mandora', image: devend, tag:'President (Gujarat)'},
    
    
   
  ];
  return (
    <>
    <Title text="State Team"/>

    <div className='flex flex-row flex-wrap justify-around'>

    {data.map((one) => 
      <div className='px-10 py-8'>
      <img src={one.image} className='w-60 md:w-52 h-72 object-cover object-center rounded-lg shadow-lg shadow-gray-500'>
      </img>
      <p className='text-xl font-semibold text-indigo-700 text-center py-3'>{one.name}</p>
      <p className='text-base text-gray-700 text-center' style={{marginTop: "-10px"}}>{one.tag}</p>
    </div>
    )}
   
    
    </div>

  </>
  )
}

export default State