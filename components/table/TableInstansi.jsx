import React from 'react'
import { useRouter } from 'next/router'
import { getFiltered, paginationData } from '../utils/filtered'
import { FaVenus } from "@react-icons/all-files/fa/FaVenus";
import { FaMars } from "@react-icons/all-files/fa/FaMars";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { handleDelete } from '../utils/handleDelete';
import  { useDispatch } from 'react-redux'
function TableInstansi( { instansi, filter, setFilter, activePage, setActivePage} ) {
    
    const dispatch = useDispatch();
    const router = useRouter()

    return (
                <div className=' w-full'>
                    <div className ="w-full lg:w-6/6 ">
                        <div className = "min-w-full overflow-x-auto bg-white shadow-md rounded my-6">
                            <table className ="min-w-full border-collapse table-fixed">
                                <thead>
                                    <tr className ="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                                        <th className ="py-3 px-6 text-left">Nama</th>
                                        <th className ="py-3 px-6 text-left">Perangkat daerah</th>
                                        <th className ="py-3 px-6 text-left">Kunjungan</th>
                                    </tr>
                                </thead>
                                <tbody className ="text-gray-600  text-xs md:text-sm font-light">
                                    {instansi &&  paginationData(getFiltered(instansi , filter), activePage, 10).map((instansi , index) => (
                                           <tr key={index} className ="border-b border-gray-200 hover:bg-gray-100">
                                                <td className ="py-3 px-6 ">
                                                    <div >
                                                        <span className ="font-medium">{instansi.name}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3">
                                                    <div className =" ">
                                                        <span className ="py-1 px-6">{instansi.perangkat_daerah}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 ">
                                                    <div >
                                                        <span className ="py-1 px-3 font-semibold">{instansi.guest.length} Orang</span>
                                                    </div>
                                                </td>
                                             
                                                
                                       </tr>
                                    ))} 
                                 
                          
                                </tbody>
                            </table>
                        </div>
                    </div>
                
                </div>
           
  
    )
}

export default TableInstansi
