import React from "react";
import moment from "moment";
import Image from "next/image";

function DataGuestPrint({ data }) {
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

      <div className="border border-gray-300 md:rounded-lg w-full mt-2 p-3 relative">
        <p className="text-xl text-gray-700 ml-2 mb-7 mt-2">Info dasar</p>

        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Nama</p>
          </div>
          <div className="font-sans text-base text-gray-800">{data.name}</div>
        </div>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Instansi</p>
          </div>
          <div className="font-sans text-base text-gray-800">
            {data.instance ? data.instance.name : "-"}
          </div>
        </div>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Alamat</p>
          </div>
          <div className="font-sans text-base text-gray-800">
            {data.address}
          </div>
        </div>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Jenis Kelamin</p>
          </div>
          <div className="font-sans text-base text-gray-800">{data.gender}</div>
        </div>

        <p className="text-xl text-gray-700 ml-2 mb-7 mt-5">Info kontak</p>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Email</p>
          </div>
          <div className="font-sans text-base text-gray-800">{data.email}</div>
        </div>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Telepon</p>
          </div>
          <div className="font-sans text-base text-gray-800">{data.phone}</div>
        </div>

        <p className="text-xl text-gray-700 ml-2 mb-7 mt-5">Info tambahan</p>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Tujuan Kunjungan</p>
          </div>
          <div className="font-sans text-base text-gray-800">
            {data.purpose}
          </div>
        </div>
        <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Tanggal kunjungan</p>
          </div>
          <div className="font-sans text-base text-gray-800">
            {moment(data.date).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
        <div className="w-full   p-3 flex items-center flex-row flex-wrap">
          <div className="w-52 text-xs uppercase text-gray-500">
            <p>Kreator / Penginput</p>
          </div>
          <div className="font-sans text-base text-gray-800">
            {data._creator ? `Admin (${data._creator.name})` : "User"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataGuestPrint;
