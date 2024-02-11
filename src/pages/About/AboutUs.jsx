import React from "react";
import Title from "../../components/Title";
import arun from "./arun.jpg";

function AboutUs() {
  

  return (
    <>
      <Title text="About Us" />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 overflow-hidden rounded-lg lg:order-last lg:h-full">
              <img
                alt="Party"
                src={arun}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <p className="mt-4 text-gray-600">
                Media Federation of India is a reputed organization of and for
                journalists of our country. Media Federation of India was formed
                in the year 2006 by group of journalist organizations of India
                to work for the benefit and to support media professionals. At
                present, there are more than fifteen thousand member journalists
                in the Federation. Along with many journalist organisations &
                foundations across the country, many prominent societies of
                journalists are also associated with MFI. The federation has
                close bonding with working journalists, publishers of newspaper
                & magazine, professionals from news channels and both social &
                digital media. The Federation holds Media Excellence Awards,
                Film and Media Excellence Awards, Seminars, Business Summits,
                News Shows, skill exchange workshops & various extensive
                activities for the benefit of journalists. It is to mention that
                the correspondents from rural – urban areas of the country are
                our backbone & the Federation pays special attention to improve
                their standards. Our network is widely spread into metro cities.
                Now MFI has taken another initiative to fill the gap between
                Media Industry & Academia. Our Federation is inducting Media
                Academicians of our country and foreign journalists as well as
                organisations also to strengthen knowledge transformation
                process. The core philosophy behind all activities is to provide
                benefit, support and to help the journalist community from local
                to global level. The primary aim of our Federation is to join
                hands together and to raise the quality of profession & life
                collectively.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
