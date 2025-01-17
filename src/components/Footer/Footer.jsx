import React from "react";
import { useForm } from "react-hook-form";

import logo from "../../images/logo/logo.png";
function Footer() {
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
    // <div className='bg-indigo-700 text-white red'>
    //   <h1 className='text-4xl border-2 border-red-800 px-7 py-2'>Footer</h1>
    // </div>
    <>
      <footer class="bg-[#ecf3f6]">
        <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 -mt-7">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div>
              <div class="flex justify-center sm:justify-start">
                <img src={logo} height="100" />
              </div>

              <ul class="mt-2 flex justify-center gap-6  md:gap-8">
                <li>
                  <a
                    href="https://www.facebook.com/mediafederationofindia/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span class="sr-only">Facebook</span>
                    <svg
                      class="h-12 w-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/journalist.arunsharma"
                    rel="noreferrer"
                    target="_blank"
                    class="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span class="sr-only">Instagram</span>
                    <svg
                      class="h-12 w-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/ArunSharmamedia"
                    rel="noreferrer"
                    target="_blank"
                    class="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span class="sr-only">Twitter</span>
                    <svg
                      class="h-12 w-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/arun-sharma-b0906146/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span class="sr-only">Linkedin</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fill="currentColor"
                      width="45"
                      height="45"
                      viewBox="0 0 50 50"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div class="text-center sm:text-left">
                <p class="text-2xl font-medium text-gray-900">
                  Important Links
                </p>

                <ul class="mt-4 space-y-4 text-sm">
                  {/* <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      MEDIA DIRECTORY
                    </a>
                  </li> */}

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="https://www.presscouncil.nic.in/"
                    >
                      Press Council of India
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="https://www.rni.nic.in/"
                    >
                      Registrar Newspaper India
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="https://www.pib.gov.in/indexd.aspx"
                    >
                      Press Information Bureau
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="https://www.davp.nic.in/"
                    >
                      Central Bureau of Communication
                    </a>
                  </li>
                  {/* <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      GOVERNMENT MEDIA DIRECTORY
                    </a>
                  </li> */}
                </ul>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-2xl font-medium text-gray-900">Contact Us</p>

                <ul class="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span class="flex-1 text-gray-700">
                        mfinewdelhi@gmail.com mediafederation@yahoo.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span class="flex-1 text-gray-700">
                        +91-9868230229, 9313462630
                      </span>
                    </a>
                  </li>

                  <li class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                      Corresponding Office-21B Citizen Enclave, Prahsant Vihar,
                      New Delhi(110085)(India)
                    </address>
                  </li>
                </ul>
              </div>
              {/* <div class="text-center sm:text-left">
                <h2>Subscribe</h2>

              </div> */}

              <form
                class="-mt-8"
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/mediafederation@yahoo.com"
                method="POST"
              >
                <div class="bg-white px-14 py-8 md:px-4 rounded-xl shadow-md">
                  <div class="space-y-4">
                    <div>
                      <label
                        for="email"
                        class="block mb-1 text-gray-600 font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        {...register("email", {
                          required: true,
                          maxLength: 100,
                        })}
                        class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                      />
                    </div>

                    <div>
                      <label
                        for="query"
                        class="block mb-1 text-gray-600 font-semibold"
                      >
                        General Query
                      </label>
                      <input
                        type="text"
                        {...register("message", {
                          required: true,
                        })}
                        class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-2 border-t border-gray-100">
            <div class="text-center sm:flex sm:justify-center sm:text-left">
              <p class="mt-1 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2023 All Right Reserved – Designed and Developed by
                Copzip Technology Private Limited
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
