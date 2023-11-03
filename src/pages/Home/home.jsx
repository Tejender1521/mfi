import React, { useState, useEffect } from "react";
import homeimg1 from "../../images/homepage/1.webp";
import homeimg2 from "../../images/homepage/2.webp";
import homeimg3 from "../../images/homepage/3.webp";
import Slider from "./slider";
import slides from "./mock.json";
import "./home.css";
import Slide from "./slide";
import navlogo from "../../images/logo/navlogo.png";



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
    <div>
      
      <div className="first pb-5">
        <div className="container h-screen flex justify-center items-center">
          <div className="row  align-middle row-eq-height">
            <div className="col-lg-6 pl-10">
              {/* <div className="text-center">
                <img className="pt-4" src={navlogo} height="50" />
                <br />
              </div> */}
              <h1 className="d-inline-block font-mono subpixel-antialiased text-4xl font-semibold pt-4">
                About Us
              </h1>
              <p className="text-star pe-5 pt-4">
                MEDIA FEDERATION OF INDIA IS A REPUTED ORGANIZATION OF AND FOR
                JOURNALISTS OF OUR COUNTRY. MEDIA FEDERATION OF INDIA WAS FORMED
                IN THE YEAR 2006 BY GROUP OF JOURNALIST ORGANIZATIONS OF INDIA
                TO WORK FOR THE BENEFIT AND TO SUPPORT MEDIA PROFESSIONALS.
              </p>
              <button
                type="button"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 mt-10 rounded-full"
              >
                Know More
              </button>
            </div>

            <div className="col-lg-6 my-auto pt-4 h-96">
              <Slide/>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card mb-3" style="max-width: 540px;"> */}
      <div className="container">
        <div className="row py-5 mx-0 ">
          {isDesktop ? (
            <>
              <div className="col-lg-4 pt-4">
                <img src={homeimg2} className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-lg-8">
                <div className="card-body pt-4">
                  <h1 className="card-title d-inline-block font-mono subpixel-antialiased text-4xl font-semibold pt-4">
                    MFI Events
                  </h1>
                  <p className="card-text pt-4">
                    MFI HOLDS NATIONAL AWARDS AND ON THE OTHER HAND REGIONAL
                    AWARDS IN ALMOST ALL STATES AS STATE AWARDS. MFI IS ALSO
                    TAKEN A STEP AHEAD TO ORGANISE SEMINARS AIMING OVERALL
                    DEVELOPMENT OF JOURNALISTS.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-8">
                <div className="card-body pt-4">
                  <h1 className="card-title d-inline-block font-mono subpixel-antialiased text-4xl font-semibold pt-4">
                    MFI Events
                  </h1>
                  <p className="card-text pt-4">
                    MFI HOLDS NATIONAL AWARDS AND ON THE OTHER HAND REGIONAL
                    AWARDS IN ALMOST ALL STATES AS STATE AWARDS. MFI IS ALSO
                    TAKEN A STEP AHEAD TO ORGANISE SEMINARS AIMING OVERALL
                    DEVELOPMENT OF JOURNALISTS.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 pt-4">
                <img src={homeimg2} className="img-fluid rounded" alt="..." />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="background">
        <div className="container">
          <div className="row py-5 mx-2">
            <div className="col-lg-8">
              <div className="card-body py-4">
                <h1 className="card-title d-inline-block font-mono subpixel-antialiased text-4xl font-semibold pt-4">
                  Business Summit
                </h1>
                <p className="card-text pt-4">
                  MFI ALSO ORGANISES BUSINESS SUMMIT FOR THE BENEFIT OF THE
                  NEWSPAPER PUBLISHERS, NEWS CHANNELS AND DIGITAL MEDIUMS. THESE
                  BUSINESS SUMMITS ARE HELD IN METROCITIES & MAJOR TOWNS OF THE
                  COUNTRY.
                </p>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <img src={homeimg1} className="img-fluid rounded" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5 mx-2">
          {isDesktop ? (
            <>
              <div className="col-lg-4">
                <img src={homeimg3} className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-lg-8">
                <div className="card-body pt-4">
                  <h1 className="card-title font-mono subpixel-antialiased text-4xl font-semibold d-inline-block pt-4">
                    Training
                  </h1>
                  <p className="card-text pt-4">
                    MEDIA FEDERATION OF INDIA PROVIDES CAREER OPPORTUNITIES TO
                    ITS MEMBERS & JOURNALISTS AS WELL. IT SUPPORTS BOTH
                    TECHNICAL, NON TECHNICAL AND OTHER FIELDS TO PURSUE JOBS
                    ALONG WITH LEARNING SKILLS. THE BASIC OBJECTIVE OF THE
                    FEDERATION IS TO OPEN DESIRED CAREER VENTURES TO THE
                    ASSOCIATED MEMBERS AND JOURNALISTS.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-8">
                <div className="card-body pt-4">
                  <h1 className="card-title font-mono subpixel-antialiased text-4xl font-semibold d-inline-block pt-4">
                    Training
                  </h1>
                  <p className="card-text pt-4">
                    MEDIA FEDERATION OF INDIA PROVIDES CAREER OPPORTUNITIES TO
                    ITS MEMBERS & JOURNALISTS AS WELL. IT SUPPORTS BOTH
                    TECHNICAL, NON TECHNICAL AND OTHER FIELDS TO PURSUE JOBS
                    ALONG WITH LEARNING SKILLS. THE BASIC OBJECTIVE OF THE
                    FEDERATION IS TO OPEN DESIRED CAREER VENTURES TO THE
                    ASSOCIATED MEMBERS AND JOURNALISTS.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 pt-4">
                <img src={homeimg3} className="img-fluid rounded" alt="..." />
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
