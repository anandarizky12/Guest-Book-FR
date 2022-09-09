import React from "react";

function AboutCard() {
  return (
    <div className="mt-5 w-full flex items-center justify-center">
      <div className="w-maxWidth px-20">
        <header className="font-semibold text-blue-800 text-2xl md:text-4xl md:text-left text-center">
          Tentang Kami
        </header>
        <div className=" w-full  flex  flex-col md:flex-row mt-5">
          <div className="  w-full md:w-3/6 border-gray-400  lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
            <div className="mb-3">
              <p className="text-gray-500 font-light md:text-xl text-center md:text-justify">
                Badan Pusat Statistik adalah Lembaga Pemerintah Non Kementerian
                yang bertanggung jawab langsung kepada Presiden. Sebelumnya, BPS
                merupakan Biro Pusat Statistik, yang dibentuk berdasarkan UU
                Nomor 6 Tahun 1960 tentang Sensus dan UU Nomer 7 Tahun 1960
                tentang Statistik. Sebagai pengganti kedua UU tersebut
                ditetapkan UU Nomor 16 Tahun 1997 tentang Statistik. Berdasarkan
                UU ini yang ditindaklanjuti dengan peraturan perundangan
                dibawahnya, secara formal nama Biro Pusat Statistik diganti
                menjadi Badan Pusat Statistik.
              </p>
            </div>
          </div>

          <div className=" bg-bps_about  h-56 md:h-86 w-full md:w-3/6  bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
