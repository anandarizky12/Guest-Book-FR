import React from 'react'
import { useRouter } from 'next/router'
import { getFiltered, paginationData } from '../utils/filtered'
import { FaVenus } from "@react-icons/all-files/fa/FaVenus";
import { FaMars } from "@react-icons/all-files/fa/FaMars";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { handleDelete } from '../utils/handleDelete';
import  { useDispatch } from 'react-redux'
function TableGuests( { guest, filter, setFilter, activePage, setActivePage} ) {
    
    const dispatch = useDispatch();
    const router = useRouter()

    return (
                <div className=' w-full'>
                    <div className ="w-full lg:w-6/6 ">
                        <div className = "min-w-full overflow-x-auto bg-white shadow-md rounded my-6">
                            <table className ="min-w-full border-collapse table-fixed">
                                <thead>
                                    <tr className ="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                                        <th className ="text-xs text-center">Nama</th>
                                        <th className ="py-3 px-6 text-left">Email</th>
                                        <th className ="py-3 px-6 ">Telepon</th>
                                        <th className ="py-3 px-6 ">Alamat/Instansi</th>
                                        <th className ="py-3 px-6 ">Jenis Kelamin</th>
                                        <th className ="py-3 px-6 ">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className ="text-gray-600  text-xs md:text-sm font-light">
                                    {guest &&  paginationData(getFiltered(guest.guest , filter), activePage, 10).map((guest , index) => (
                                           <tr key={index} className ="border-b border-gray-200 hover:bg-gray-100">
                                                <td className ="py-3 px-6 text-left">
                                                    <div className ="flex items-center ">
                                                        <span className ="font-medium">{guest.name}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3">
                                                    <div className ="flex  justify-start ">
                                                        <span className ="bg-red-500 tracking-wide text-gray-100 py-1 px-3 rounded-full text-xs">{guest.email}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 ">
                                                    <div className ="flex justify-center">
                                                        <span className ="bg-green-500 tracking-wide text-gray-100 py-1 px-3 rounded-full text-sm">{guest.phone}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 ">
                                                    <span >{guest.address}</span>
                                                </td>
                                                <td className ="py-3 px-6 text-left">
                                                    <div className ="flex items-center">
                                                        <div className ="mr-2">
                                                            {guest.gender == "Laki-Laki" ? <FaMars className='text-blue-500'/> : <FaVenus className='text-red-400'/>}
                                                        </div>
                                                        <span>{guest.gender}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 ">
                                                    <div className ="flex item-center justify-center">
                                                        <div onClick={()=>router.push(`detailguest/${guest._id}`)} className ="w-4 mr-2 text-green-500 transform hover:text-purple-500 hover:scale-110">
                                                           <FaEye/>
                                                        </div>
                                                        <div onClick={()=>router.push(`editguest/${guest._id}`)} className ="w-4 mr-2 text-yellow-500 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div onClick={()=>handleDelete(dispatch, guest._id)} className ="w-4 mr-2 text-red-600 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
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

export default TableGuests
