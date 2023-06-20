import React from 'react'
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className='flex justify-center h-screen items-center flex-col'>
    <h1 className='text-4xl font-bold pb-4 text-red-600'>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p className='text-center'>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  )
}

export default ErrorPage