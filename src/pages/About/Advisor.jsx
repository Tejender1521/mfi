import React from 'react'

import saneep from '../../images/about/advisor/saneep.jpg'
import ajay from '../../images/about/advisor/ajay.jpg'
import anhu from '../../images/about/advisor/anhu.jpg'
import anita from '../../images/about/advisor/anita.jpeg'
import arvind from '../../images/about/advisor/arvind.jpg'
import narendra from '../../images/about/advisor/narendra.jpg'
import om from '../../images/about/advisor/om.jpg'
import pradeep from '../../images/about/advisor/pradeep.jpeg'
import sachin from '../../images/about/advisor/sachin.jpg'
import shiva from '../../images/about/advisor/shiva.jpg'
import yogesh from "../../images/about/advisor/yogesh.jpeg";
import Title from '../../components/Title'


function Advisor() {

  const data = [
    {name: 'Dr. Sandeep Marwah', image: saneep},
    {name: 'Mr. Shiva Bhatia', image: shiva},
    {name: 'Mr. Om Prakash', image: om},
    {name: 'Dr. Sachin Batra', image: sachin},
    {name: 'Mr. Narendra Singh Bisht', image: narendra},
    {name: 'Mr. Arvind k Singh', image: arvind},
    {name: 'Dr. Ajay Gambhir', image: ajay},
    {name: 'Dr. Anhu Gambhir', image: anhu},
    {name: 'Dr. Pradeep Bhardwaj', image: pradeep},
    { name: 'Dr. Anita Bhardwaj', image: anita },
    {name: 'Dr. Yogesh Agarwal', image: yogesh}
   
  ];

  return (
    <>
      <Title text="Our Team Advisors"/>

      <div className='flex flex-row flex-wrap justify-around'>

      {data.map((one) => 
        <div className='px-10 py-8'>
        <img src={one.image} className='w-60 md:w-52 h-72 object-cover object-center rounded-lg shadow-lg shadow-gray-500'>
        </img>
        <p className='text-xl font-semibold text-indigo-700 text-center py-3'>{one.name}</p>
      </div>
      )}
     
      
      </div>

    </>
  )
}

export default Advisor