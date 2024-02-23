import React from 'react'
import Title from '../../components/Title'
import { useForm } from "react-hook-form";
import { Label, Select } from "flowbite-react";
function MembershipOnline() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <>
      <Title text="Membership Form"></Title>

      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-12 lg:px-16 lg:py-2 xl:col-span-12">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Online Membership form 🦑
                </h1>

                <p className="mt-4 leading-relaxed flex justify-center items-center text-gray-500">
                  DOCUMENTS REQUIRE
                  <br />
                  Passport size photo
                  <br />
                  Media ID Card for Media Professionals
                  <br />
                  Aadhar Card for Associate Members
                </p>
              </div>

              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/mediafederation@yahoo.com"
                method="POST"
                className="mt-4 grid grid-cols-6 md:grid-cols-12 gap-6"
              >
                <div className="col-span-6 sm:col-span-12">
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
                    {...register("Name", {
                      required: true,
                      maxLength: 100,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-12">
                  <label
                    htmlFor="FatherName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Father's Name
                  </label>

                  <input
                    type="text"
                    id="FatherName"
                    name="father_name"
                    {...register("FatherName", {
                      required: true,
                      maxLength: 100,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Dob"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    id="Dob"
                    name="dob"
                    {...register("DOB", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Residence Address
                  </label>

                  <input
                    type="text"
                    id="Address"
                    name="address"
                    {...register("Address", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
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
                    {...register("MobileNo", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
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
                    {...register("PhoneNum", {})}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
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
                    {...register("Email", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="Organisation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name of Organization, Print / Electronic Media
                  </label>

                  <input
                    type="text"
                    id="Organisation"
                    name="organisation"
                    {...register("Organisation", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="OffAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Office Address
                  </label>

                  <input
                    type="text"
                    id="OffAddress"
                    name="offaddress"
                    {...register("OfficeAddress", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="OffPhone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Office Phone
                  </label>

                  <input
                    type="number"
                    id="OffPhone"
                    name="offphone"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="OffEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Office Email
                  </label>

                  <input
                    type="email"
                    id="OffEmail"
                    name="offemail"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="Designation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Designation
                  </label>

                  <input
                    type="text"
                    id="Designation"
                    name="designation"
                    {...register("Designation", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    htmlFor="Income"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Monthly Income
                  </label>

                  <input
                    type="text"
                    id="Income"
                    name="income"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    htmlFor="Dependent"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No. Of Dependent
                  </label>

                  <input
                    type="number"
                    id="Dependent"
                    name="dependent"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="FD1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Family Details
                  </label>

                  <input
                    type="text"
                    id="FD1"
                    name="fd1"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="FD1Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="FD1Name"
                    name="fd1name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="FD1Relation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Relation
                  </label>

                  <input
                    type="text"
                    id="FD1Relation"
                    name="fd1relation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="FD1Age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>

                  <input
                    type="number"
                    id="FD1Age"
                    name="fd1age"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className=" block">
                    <Label
                      htmlFor="bloodgroup"
                      className="block text-sm font-medium text-gray-700"
                      value="Blood Group"
                    />
                  </div>
                  <Select id="bloodgroup" required>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </Select>
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="FD2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Family Details
                  </label>

                  <input
                    type="text"
                    id="FD2"
                    name="fd2"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="FD2Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="FD2Name"
                    name="fd2name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="FD2Relation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Relation
                  </label>

                  <input
                    type="text"
                    id="FD2Relation"
                    name="fd2relation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="FD2Age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>

                  <input
                    type="number"
                    id="FD2Age"
                    name="fd2age"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className=" block">
                    <Label
                      htmlFor="bloodgroup"
                      className="block text-sm font-medium text-gray-700"
                      value="Blood Group"
                    />
                  </div>
                  <Select id="bloodgroup" required>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </Select>
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    htmlFor="WorkExp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Work Experience
                  </label>

                  <input
                    type="text"
                    id="WorkExp"
                    name="workexp"
                    {...register("WorkExperience", {
                      required: true,
                    })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    htmlFor="Association"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name of Union / Press Club / Association
                  </label>

                  <input
                    type="text"
                    id="Association"
                    name="association"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    htmlFor="Publisher"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name of Editor / Publisher / Organization Head
                  </label>

                  <input
                    type="text"
                    id="Publisher"
                    name="publisher"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Passport Size Photo
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input1"
                    type="file"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Media ID Card / Aadhar Card
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input2"
                    type="file"
                  />
                </div>
                <div className="col-span-6 md:col-span-12 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
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
 
export default MembershipOnline