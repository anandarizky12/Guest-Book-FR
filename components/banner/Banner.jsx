import React from "react";
import Router from "next/router";

function Banner() {
  return (
    <div className="flex items-center justify-center px-20">
      <div className="flex flex-col md:flex-row  items-center justify-between w-maxWidth">
        <div className="mt-52 md:mt-0 md:px-10 px-2 ">
          <div className="items-center flex flex-wrap">
            <div className="w-full px-4 ml-auto mr-auto text-center lg:text-left">
              <div>
                <h1
                  data-aos="slide-up"
                  className="text-blue-800 font-semibold md:font-bold text-2xl md:text-5xl"
                >
                  Selamat Datang Di
                  <span className="text-yellow-500"> Badan</span>{" "}
                  <span className="text-green-600">Pusat </span>
                  <span className="text-blue-400">Statistik.</span>
                </h1>
                <p
                  onClick={() => handleNav(aboutRef)}
                  data-aos="slide-right"
                  className="my-4 text-xs md:text-base text-gray-400"
                >
                  Silahkan isi data diri Anda. #MelayaniDenganHati❤️
                </p>

                <button
                  data-aos="fade-in"
                  data-aos-duration="950"
                  data-aos-dellay="100"
                  onClick={() => Router.push("/inputguest")}
                  className="cursor-pointer hover:bg-indigo-500 p-2 px-12 
                          rounded-full  font-normal md:font-normal text-gray-200 bg-blue-700 w-"
                >
                  Isi Data
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="sPlide-left"
          className="hidden md:inline-block float-right w-full mr-12 h-maxHeight  bg-gray-100 bg-bps_login bg-top bg-cover"
        />
        <div
          data-aos="slide-up"
          className=" md:hidden w-full h-2/6  bg-gray-100 bg-wave  bg-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
