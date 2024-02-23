import React from "react";
import Title from "../../components/Title";
import sliderimg1 from "../../images/publication/cf1.jpg";
import sliderimg2 from "../../images/publication/cf2.jpg";
import sliderimg3 from "../../images/publication/cf3.jpg";
import { Carousel } from "flowbite-react";
import bajaj from "../../images/about/state/bajaj.jpg";
function Crowdfunding() {
  return (
    <>
      <Title text="Crowd Funding" />
      <section className="mx-auto min-h-full w-5/6 py-4">
        <div>
          <div className=" items-center justify-between gap-10 md:flex">
            <div className="md:h-[60vh] md:w-[40vw] h-[40vh]">
              <Carousel>
                <img alt="..." src={sliderimg1} className="rounded-xl" />
                <img alt="..." src={sliderimg2} className="rounded-xl" />
                <img alt="..." src={sliderimg3} className="rounded-xl" />
              </Carousel>
            </div>
            <div>
              <div className="relative">
                <div className="mt-8 ">
                  <div>
                    <h3 className="font-bold text-3xl">
                      People Funds, for People Support -MADD मदद
                    </h3>
                  </div>
                </div>
              </div>
              {/* DESCRIPT */}
              <div>
                <p className="my-3 md:w-[40vw]">
                  MFI invites Online donation & crowd funding to support needy
                  people through providing Medical Treatment, Food, Education,
                  Shelter, Sanitization, Old Age care, Orphanage, Seedmoney for
                  livelihoods etc. The MADD मदद.... "a movement to assist"
                  revolves around children, women, old age people and
                  differently abled people.
                </p>
              </div>
              {/* BUTTON */}
              {/* <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-red-600"
                  >
                    <a target="_blank" href="#" rel="noreferrer">
                      Apply Now
                    </a>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <Para text="Media Federation of India honors journalists and media personalities for the remarkable contribution / service to the society through Journalism. MFI holds National Awards and on the other hand Regional Awards in almost all States as State Awards. Now, MFI is going to elevate the Awards at International Level with prominent Media Organisations, Clubs, Federation & Associations across the globe. This initiative will provide an opportunity to the Indian Journalists to  earn honour and identification on World Forum. " /> */}
    </>
  );
}

export default Crowdfunding;
