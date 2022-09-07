import React from "react";
import { useRouter } from "next/router";
import { getFiltered, paginationData } from "../utils/filtered";

function AdminDataPrint({ admin, filter, activePage }) {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full p-5 items-center my-2">
      <div className="flex bb-2">
        <img src="/onlylogo.png" alt="BPS" width={70} />
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
        DATA ADMIN PADA BADAN PUSAT STATISTIK KOTA BANJARMASIN
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
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {!admin && <p>Loading . . . </p>}
              {admin &&
                paginationData(
                  getFiltered(admin.adminData, filter),
                  activePage,
                  10
                ).map((admin, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{admin.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="bg-red-500 text-gray-100 py-1 px-3 rounded-full text-sm">
                          {admin.email}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className="bg-green-500 tracking-wide text-gray-100 py-1 px-3 rounded-full text-sm">
                          {admin.phone}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{admin.address}</span>
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

export default AdminDataPrint;
