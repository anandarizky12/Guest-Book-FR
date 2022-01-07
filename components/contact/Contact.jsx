import React from 'react'
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../map/Map'), { ssr: false })
function Contact() {
  

    return (
        <div className='flex flex-col'>
            <div className='text-2xl text-center md:text-left md:text-4xl font-semibold text-blue-800'>
                Kontak Kami
            </div>
            <div className='flex flex-col md:flex-row mt-12 text-gray-600'>
                <div className='w-full md:w-2/6'>
                    <div className='flex items-center'>
                        <div className='mr-5 text-gray-500 text-base lg:text-xl'>
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <div className="text-base lg:text-xl font-semibold">Alamat Kantor</div>
                            <div className='font-light text-sm lg:text-xl'>Jalan Gatot Subroto No. 5 Banjarmasin 70235</div>
                        </div>
                    </div>
                    <div className='flex items-center mt-8'>
                         <div className='mr-5 text-gray-500 text-base lg:text-xl'>
                            <FaEnvelope/>
                        </div>
                        <div>
                            <div className="text-base lg:text-xl font-semibold">Email</div>
                            <div className='font-light text-sm lg:text-xl'>bps6371@bps.go.id, bps6371@gmail.com</div>
                        </div>
                    </div>
                    <div className='flex items-center mt-8'>
                        <div className='mr-5 text-gray-500 text-base lg:text-xl' >
                            <FaPhoneAlt/>
                        </div>
                        <div>
                            <div className="text-base lg:text-xl font-semibold">Call</div>
                            <div className='font-light text-sm lg:text-xl'>(0511) 6773031, 6773932</div>
                        </div>
                    </div>
                </div>
              
                <div className='z-10 mt-12 md:mt-0 bg-gray-500 h-38 w-full lg:h-96 lg:w-4/6'>
                        <Map />
                </div>
           
            </div>
        </div>
    )
}

export default Contact
