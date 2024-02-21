import React from 'react'
import Title from '../../components/Title'

function Fees() {
  return (
    <>
      <Title text="Fees"></Title>
      <div className="mx-auto max-w-screen-sm px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-2 -mt-16">
        <div className="grid grid-cols-1 gap-8 ">
          <div className="mt-28 hover:animate-background rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 sm:p-6">
              <p className="font-bold">General Member INR : 500/- Per year </p>
              <p className="font-bold">
                Associate Member INR : 2100/- Per year
              </p>

              <p className="font-bold">
                International Journalist US $ : 20 Per year
              </p>

              <p className="font-bold">
                International Associate Member US $ : 1000 Per year
              </p>
              <br />
              <p className="font-bold">
                Organization Member INR : 2100/- One time International
              </p>

              <p className="font-bold">Organization US $ : 100 One time</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fees