import React, { useState, useEffect } from "react";
import homeimg1 from "../../images/homepage/1.webp";
import homeimg2 from "../../images/homepage/2.webp";
import homeimg3 from "../../images/homepage/3.webp";
import Slider from "./slider";
import slides from "./mock.json";
import "./home.css";
import Slide from "./slide";
import navlogo from "../../images/logo/navlogo.png";
import logo from "../../images/logo/logo.png"




function Home() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <div className="md:mx-8">
      <div className="pb-5 first">
        <div className="container flex items-center justify-center">
          <div className="align-middle row row-eq-height">
            <div className=" mx-4  md:mt-32 col-lg-6 flex flex-col items-center">
              <div className=" md:-mt-20">
                <img src={logo} className="h-72" />
              </div>
              <h1 className="pt-4 font-mono text-4xl subpixel-antialiased font-semibold d-inline-block">
                About Us
              </h1>
              <p className="pt-4 text-star pe-5 font-semibold">
                Media Federation of India is a reputed organization of and for
                Journalists of our country. Media federation of india was formed
                In the year 2006 by group of journalist organizations of india
                To work for the benefit and to support media professionals.
              </p>
              <button
                type="button"
                className="px-4 py-2 mt-10 font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-500"
              >
                Know More
              </button>
            </div>
            <div className="pt-4 my-auto col-lg-5 h-96">
              <Slide />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mb-3 card" style="max-width: 540px;"> */}
      <div className="container">
        <div className="py-5 mx-0 row ">
          {isDesktop ? (
            <>
              <div className="pt-4 col-lg-4">
                <img src={homeimg2} className="rounded img-fluid" alt="..." />
              </div>
              <div className="col-lg-8">
                <div className="pt-4 card-body">
                  <h1 className="pt-4 font-mono text-4xl subpixel-antialiased font-semibold card-title d-inline-block">
                    MFI Events
                  </h1>
                  <p className="pt-4 card-text font-semibold">
                    MFI holds national awards and on the other hand regional
                    awards in almost all states as state awards. MFI is also
                    taken a step ahead to organise seminars aiming overall
                    development of journalists.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-8">
                <div className="pt-4 card-body">
                  <h1 className="pt-4 font-mono text-4xl subpixel-antialiased font-semibold card-title d-inline-block">
                    MFI Events
                  </h1>
                  <p className="pt-4 card-text font-semibold">
                    MFI holds national awards and on the other hand regional
                    awards in almost all states as state awards. MFI is also
                    taken a step ahead to organise seminars aiming overall
                    development of journalists.
                  </p>
                </div>
              </div>
              <div className="pt-4 col-lg-4">
                <img src={homeimg2} className="rounded img-fluid" alt="..." />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="background">
        <div className="container">
          <div className="py-5 mx-2 row">
            <div className="col-lg-8">
              <div className="py-4 card-body">
                <h1 className="pt-4 font-mono text-4xl subpixel-antialiased font-semibold card-title d-inline-block">
                  Business Summit
                </h1>
                <p className="pt-4 card-text font-semibold">
                  MFI also organises business summit for the benefit of the
                  Newspaper publishers, news channels and digital mediums. These
                  Business summits are held in metrocities & major towns of the
                  Country.
                </p>
              </div>
            </div>
            <div className="pt-4 col-lg-4">
              <img src={homeimg1} className="rounded img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-5 mx-2 row">
          {isDesktop ? (
            <>
              <div className="col-lg-4">
                <img src={homeimg3} className="rounded img-fluid" alt="..." />
              </div>
              <div className="col-lg-8">
                <div className="pt-4 card-body">
                  <h1 className="pt-4 font-mono text-4xl subpixel-antialiased font-semibold card-title d-inline-block">
                    Training
                  </h1>
                  <p className="pt-4 card-text font-semibold">
                    Media Federation of India provides career opportunities to
                    Its members & journalists as well. It supports both
                    Technical, non technical and other fields to pursue jobs
                    Along with learning skills. The basic objective of the
                    Federation is to open desired career ventures to the
                    Associated members and journalists.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-8">
                <div className="pt-4 card-body">
                  <h1 className="pt-4 font-mono text-4xl subpixel-antialiased font-semibold card-title d-inline-block">
                    Training
                  </h1>
                  <p className="pt-4 card-text font-semibold">
                    Media Federation of India provides career opportunities to
                    Its members & journalists as well. It supports both
                    Technical, non technical and other fields to pursue jobs
                    Along with learning skills. The basic objective of the
                    Federation is to open desired career ventures to the
                    Associated members and journalists.
                  </p>
                </div>
              </div>
              <div className="pt-4 col-lg-4">
                <img src={homeimg3} className="rounded img-fluid" alt="..." />
              </div>
            </>
          )}
        </div>
      </div>
      <Slider slides={slides} />
      {/* </div> */}
    </div>
  );
}

export default Home;
