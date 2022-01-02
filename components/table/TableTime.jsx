import React from 'react'
import { useRouter } from 'next/router'
import { getFiltered, paginationData } from '../utils/filtered'
import { handleDelete } from '../utils/handleDelete';
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import  { useDispatch } from 'react-redux'
import moment from 'moment'

function TableTime( { guest, filter, setFilter, activePage, setActivePage} ) {
    
    const dispatch = useDispatch();
    const router = useRouter()
    return (
        <div className=' w-full'>
            <div className ="w-full lg:w-6/6 ">
                <div className = "min-w-full overflow-x-auto bg-white shadow-md rounded my-6">
                    <table className ="min-w-full border-collapse table-fixed">
                    <thead>
                            <tr className ="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className ="py-3 px-6 text-left">Nama</th>
                                <th className ="py-3 px-6 text-left">Jam</th>
                                <th className ="py-3 px-6 text-left">Hari</th>
                                <th className ="py-3 px-6 text-left">Waktu Kunjungan</th>
                                <th className ="py-3 px-6 text-center">Actions</th>
                              

                            </tr>
                        </thead>
                        <tbody className ="text-gray-600 text-sm font-light">
                            {guest &&  paginationData(getFiltered(guest.guest , filter), activePage, 10).map((guest , index) => (
                                   <tr key={index} className ="border-b border-gray-200 hover:bg-gray-100">
                                   <td className ="py-3 px-6 text-left whitespace-nowrap">
                                       <div className ="flex items-center">
                                           <span className ="font-medium">{guest.name}</span>
                                       </div>
                                   </td>
                                   
                                   <td className ="py-3 px-6 text-left">
                                       <span >{moment(guest.date).format('LT')}</span>
                                   </td>
                                   <td className ="py-3 px-6 text-left">
                                       <span >{moment(guest.date).format('dddd')}</span>
                                   </td>
                                   <td className ="py-3 px-6 text-left">
                                       <span >{moment(guest.date).format('LL')}</span>
                                   </td>
                           
                                   <td className ="py-3 px-6 text-center">
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

export default TableTime
