import React from 'react'

function Title(props) {
  return (
    <div className='font-semibold text-4xl md:text-5xl text-indigo-900  bg-indigo-200 mt-5 sm:mt-8 mb-4 py-6 text-center'>{props.text}</div>

  )
}

export default Title