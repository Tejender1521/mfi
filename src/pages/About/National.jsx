import React from 'react'
import Title from '../../components/Title'

import arun from '../../images/about/national/arun.jpg'
import ashish from '../../images/about/national/ashish.jpg'
import dharm  from '../../images/about/national/dharm.jpg'
import rupesh from '../../images/about/national/rupesh.jpg'
import k from '../../images/about/national/k.jpg'
import prakash from '../../images/about/national/prakash.jpg'
import ramesh from '../../images/about/national/ramesh.jpg'
import shishir from '../../images/about/national/shishir.jpeg'
import amita from '../../images/about/national/amita.jpg'
import anil from '../../images/about/national/anil.jpeg'
import  baleshwar from '../../images/about/national/baleshwar.jpg'
import urvashi from '../../images/about/national/urvashi.jpg'
import shiva from '../../images/about/national/shiva.jpg'
import sanjaeev from '../../images/about/national/sanjaeev.jpeg'
import neha from '../../images/about/national/neha.jpg'
import dinesh from '../../images/about/national/dinesh.jpg'
import kishor from '../../images/about/national/kishor.jpeg'

function National() {
  const data = [
    {name: 'Arun Sharma', image: arun, tag:'National President'},
    {name: 'Ashish K Singh', image: ashish, tag:'Sr.Vice President'},
    {name: 'Dharmveer Anand', image: dharm, tag:'General Secretary'},
    {name: 'Dr. Rupesh Kumar', image: rupesh, tag:'North India President'},
    {name: 'K. Kumar', image: k, tag:'South India President'},
    {name: 'Prakash Asthana', image: prakash, tag:'Vice-President'},
    {name: 'Shishir Srivastav', image: shishir, tag:'Vice-President (Global Chapter)'},
    {name: 'Amita Sharma', image: amita, tag:'National Secretary'},
    {name: 'Anil Maheshwari', image: anil, tag:'National Secretary'},
    {name: 'Baleshwar Gupta', image: baleshwar, tag:'Treasurer'},
    {name: 'Urvashi Gaur', image: urvashi, tag:'Secretary (Global Chapter)'},
    {name: 'Shiva Kumar', image: shiva, tag:'National Secretary'},
    {name: 'Sanjeev K Ahuja', image: sanjaeev, tag:'Vice President, Asia Chapter'},
    {name: 'Neha Singh', image: neha, tag:'National Executive Member'},
    {name: 'Dinesh Tyagi', image: dinesh, tag:'Jr. Secretary'},
    {name: 'Kishor Thaplial', image: kishor, tag:'Executive Member'}
    
   
  ];
  return (
    <>
    <Title text="National Team"/>

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

export default National