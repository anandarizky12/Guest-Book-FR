import React from "react";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { checkImage } from "../utils/image";
// components

export default function CardProfile({ data }) {
  return (
    <>
      <div className=" flex flex-col min-w-0 break-words bg-white w-full  shadow-xl rounded-lg ">
        <div className=" h-48  justify-center flex  w-full relative">
          <div className="bg-blue-800 w-full absolute items-start h-3/6"></div>
          <img
            alt="Change Fotos"
            htmlFor="attachment"
            src={checkImage(data.profile)}
            className="shadow-xl mt-8 rounded-full h-32 align-middle border-none absolute max-w-150-px cursor-pointer"
          />
        </div>
        <div className="px-2 p-5">
          <div className="text-center">
            <h3 className="text-md font-bold text-gray-600 flex items-center justify-start">
              <FaUserAlt className="mr-2 text-blue-700" />
              {data.name}
            </h3>
            <div className="text-sm font-semibold text-gray-700 flex items-center justify-start mt-2">
              <FaMapMarkerAlt className="mr-2 text-red-400" />
              {data.address}
            </div>
            <h3 className="text-sm font-semibold text-gray-700 flex items-center justify-start mt-2">
              <FaEnvelope className="mr-2 text-yellow-400" />
              {data.email}
            </h3>
            <div className="text-sm font-semibold text-gray-700 flex items-center justify-start mt-2">
              <FaPhoneAlt className="mr-2 text-green-500" />
              {`+${data.phone}`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
