import React from 'react'

function Footer() {
    return (
      <footer className="mt-12" style={{ backgroundColor: 'rgba(37, 38, 65, 1)'}}>
        <div className="max-w-lg mx-auto">
          <div
            className="
              flex
              py-12
              justify-center
              text-white
              items-center
              px-20
              sm:px-36
            "
          >
            <div className="relative mr-4">
              <img height={70} width={70} src='./onlylogo.png'></img>
            </div>
            <span className="border-l border-gray-500 text-sm pl-5 py-2 font-semibold"
              >Badan Pusat Statistik</span>
          </div>
      
          <div className="flex items-center text-gray-400 text-sm justify-center">
            <a  className="pr-3">Careers</a>
            <a  className="border-l border-gray-400 px-3">Privacy</a>
            <a  className="border-l border-gray-400 pl-3"
              >Terms & Conditions</a
            >
          </div>
          <div className="text-center text-white">
            <p className="my-3 text-gray-400 text-sm">
              &copy; 2021 Badan Pusat Statistik.
            </p>
            <div className="py-3 tracking-wide">
              <p>
                Badan Pusat Statistik <span className="font-light"> - Kota Banjarmasin</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
