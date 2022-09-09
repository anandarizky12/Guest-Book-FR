import React from "react";

import { getFiltered, paginationData } from "../utils/filtered";
import { FaVenus } from "@react-icons/all-files/fa/FaVenus";
import { FaMars } from "@react-icons/all-files/fa/FaMars";
import Image from "next/image";

function DataGuestsPrint({ guest, filter, activePage }) {
  return (
    <div className="flex flex-col w-full p-5 items-center my-2">
      <div className="flex bb-2">
        <Image src="/onlylogo.png" alt="BPS" width={70} height={70} />
        <div className="text-center">
          <p className="text-xl">BADAN PUSAT STATISTIK KOTA BANJARMASIN</p>
          <p className="text-sm">
            Jalan Gatot Subroto No. 5 Banjarmasin 70235, Telpon (0511) 6773031,
            6773932
          </p>
        </div>
      </div>
      <hr className="mb-4 md:min-w-full b-2 text-red-600 bg-red-500" />

      <header className="text-sm">
        DATA TAMU PADA BADAN PUSAT STATISTIK KOTA BANJARMASIN
      </header>

      <div className="w-full lg:w-6/6">
        <div className="bg-white shadow-md rounded my-6 ">
          <table className="min-w-full  table-auto border">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-center">Telepon</th>
                <th className="py-3 px-6 text-center">Alamat</th>
                <th className="py-3 px-6 text-center">Jenis Kelamin</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {!guest && <p>Loading . . . </p>}
              {guest &&
                paginationData(
                  getFiltered(guest.guest, filter),
                  activePage,
                  10
                ).map((guest, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{guest.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="bg-red-500 text-gray-100 py-1 px-3 rounded-full text-sm">
                          {guest.email}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className="bg-green-500 tracking-wide text-gray-100 py-1 px-3 rounded-full text-sm">
                          {guest.phone}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>
                        {guest.instance ? guest.instance.name : guest.address}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          {guest.gender == "Laki-Laki" ? (
                            <FaMars className="text-blue-500" />
                          ) : (
                            <FaVenus className="text-red-400" />
                          )}
                        </div>
                        <span>{guest.gender}</span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataGuestsPrint;
