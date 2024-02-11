import React from 'react'
import Title from '../../components/Title'

function Contact() {
  return (
    <>
      <Title text="Contact Us"></Title>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-2 -mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mt-28 hover:animate-background rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4  sm:p-6 ">
                  <p className='font-bold'>Contact Person: Mr. Arun Sharma </p>
                  <p>President E-mail: mfinewdelhi@gmail.com</p>
                  {/* <p>Address: New Delhi Pincode-110001</p> */}
                  <p>+91-9313462630/9868230229</p>
                  <p>E-mail: mediafederation@yahoo.com</p>
                  {/* <p>Url: http://www.mediafederationofindia.com</p> */}
                </div>
              </div>
              <div className="mt-12 hover:animate-background rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4 sm:p-6">
                  <p className='font-bold'>A/C : Media Federation of India </p>
                  <p className='font-bold'>Bank : State Bank of India</p>
                  <p>Sector-9, Rohini, New Delhi-110085 (INDIA)</p>
                  <p>Account No: 34747313886</p>
                  <p>IFSC :SBIN0004394</p>
                </div>
              </div>
            </div>
            <div className="lg:py-24">
              <div className="max-w-xl lg:max-w-3xl">
                <div className="relative block">
                  <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Reach Us!
                  </h1>
                </div>

                <form
                  action="#"
                  className="mt-4 grid grid-cols-6 md:grid-cols-12 gap-6"
                >
                  <div className="col-span-12">
                    <label
                      htmlFor="Name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="Name"
                      name="name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="Address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>

                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="Phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>

                    <input
                      type="number"
                      id="Phone"
                      name="phone"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="Feedback"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enquiry/Feedback
                    </label>

                    <textarea
                      id="Feedback"
                      class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="col-span-6 md:col-span-12 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact