import React from 'react'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react";
function OrganisationOffline() {
  return (
    <>
      <Title text="Organisation Form"></Title>
      <section className="bg-white">
        <div>
          <main className="flex items-center justify-center px-8 py-8 sm:px-12  lg:px-16 lg:py-2 ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Download Offline Organisation form 🦑
              </h1>

              <Button
                outline
                size="lg"
                gradientDuoTone="tealToLime"
                className="mt-8"
              >
                <Link
                  className="text-lg font-medium"
                  to="/Organaization.docx"
                  target="_blank"
                  download
                >
                  Download
                </Link>
              </Button>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default OrganisationOffline