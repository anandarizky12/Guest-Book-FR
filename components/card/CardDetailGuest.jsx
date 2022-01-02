import React from 'react'
import moment from 'moment';
import ButtonPrint from '../print/ButtonPrint';
function CardDetailGuest({id, data}) {
    const componentRef = React.useRef()
    return (
        <div ref={componentRef} className="border border-gray-300 md:rounded-lg w-full p-3 relative">
           <p className='text-xl text-gray-700 ml-2 mb-7 mt-2'>Info dasar</p>
             
           <div removeAfterPrint={true} className="absolute top-4 right-5">
                    <ButtonPrint   componentRef={componentRef}/>
                </div>
           <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
               <div className="w-52 text-xs uppercase text-gray-500">
                    <p>Nama</p>
               </div>
               <div className="font-sans text-base text-gray-800">
                   {data.name}
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
               <div className="font-sans text-base text-gray-800">
                   {data.gender}
               </div>
           </div>

           <p className='text-xl text-gray-700 ml-2 mb-7 mt-5'>Info kontak</p>
           <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
               <div className="w-52 text-xs uppercase text-gray-500">
                    <p>Email</p>
               </div>
               <div className="font-sans text-base text-gray-800">
                   {data.email}
               </div>
           </div>
           <div className="w-full  border-b border-gray-300 p-3 flex items-center flex-row flex-wrap">
               <div className="w-52 text-xs uppercase text-gray-500">
                    <p>Telepon</p>
               </div>
               <div className="font-sans text-base text-gray-800">
                   {data.phone}
               </div>
           </div>

           <p className='text-xl text-gray-700 ml-2 mb-7 mt-5'>Info tambahan</p>
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
                   {moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}
               </div>
           </div>
           <div className="w-full   p-3 flex items-center flex-row flex-wrap">
               <div className="w-52 text-xs uppercase text-gray-500">
                    <p>Kreator / Penginput</p>
               </div>
               <div className="font-sans text-base text-gray-800">
                   {data._creator ? `Admin (${data._creator.name})`  : 'User'}
               </div>
           </div>
        </div>
    )
}

export default CardDetailGuest
