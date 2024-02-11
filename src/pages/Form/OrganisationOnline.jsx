import React from 'react'
import Title from '../../components/Title'
import { Link } from "react-router-dom";
import { Checkbox, Label, Select } from "flowbite-react";
function OrganisationOnline() {
  
  return (
    <>
      <Title className="w-screen" text="Organisation Form"></Title>

      <section className="bg-white mt-20">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-12 lg:px-16 lg:py-2 xl:col-span-12">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Online Organisation form 🦑
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
                    Name of Organization
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
                    htmlFor="RegistrationNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Registration Number
                  </label>

                  <input
                    type="text"
                    id="RegistrationNumber"
                    name="registrationnumber"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-12">
                  <label
                    htmlFor="OrgMembers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Members in Organization
                  </label>

                  <input
                    type="number"
                    id="OrgMembers"
                    name="orgmembers"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-12">
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Office Address
                  </label>

                  <input
                    type="text"
                    id="Address"
                    name="address"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-12">
                  <label
                    htmlFor="State"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>

                  <input
                    type="text"
                    id="State"
                    name="state"
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
                    htmlFor="Mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile
                  </label>

                  <input
                    type="number"
                    id="Mobile"
                    name="mobile"
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
                    htmlFor="Website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website
                  </label>

                  <input
                    type="text"
                    id="Website"
                    name="website"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="Chief"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name of the Chief in Organization
                  </label>

                  <input
                    type="text"
                    id="Chief"
                    name="chief"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-12">
                  <label
                    htmlFor="Affiliation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Affiliation with any other Organization
                  </label>

                  <input
                    type="text"
                    id="Affiliation"
                    name="affiliation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Organization Registration Certificate
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div class="col-span-12">
                  <label for="MarketingAccept" class="flex gap-4">
                    {/* <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    /> */}
                    <Checkbox id="agree" />

                    <span class="text-sm text-gray-700">
                      I/We undertake to abide by the Memorandum of Articles of
                      Federation, byelaws and rules of the organization. I/We
                      have read the terms & conditions and declare that, I/We
                      satisfy with Media Federation of India.
                    </span>
                  </label>
                </div>
                <div className="col-span-6 md:col-span-12 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default OrganisationOnline