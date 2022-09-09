import Image from "next/image";
import React from "react";

function VisitDataPrint({ year, total, totalGuest }) {
  const allmonth = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

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
        DATA KUNJUNGAN TAHUN {year.year} PADA BADAN PUSAT STATISTIK KOTA
        BANJARMASIN
      </header>
      <div className="w-full lg:w-6/6">
        <div className="bg-white shadow-md rounded my-6 ">
          <table className="min-w-full  table-auto border">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">Bulan</th>
                <th className="py-3 px-6 text-center">Jumlah Kunjungan</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {total &&
                total.map((each, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-center whitespace-nowrap">
                      <div>
                        <span className="font-medium">{allmonth[index]}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div>
                        <span className=" py-1  rounded-full text-sm">
                          {each} Orang
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">Total Kunjungan</th>
                <th className="py-3 px-6 text-center">{totalGuest} Orang</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VisitDataPrint;
