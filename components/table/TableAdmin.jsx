import React from 'react'
import { getFiltered, paginationData } from '../utils/filtered'

function TableAdmin( { admin, filter, setFilter, activePage, setActivePage} ) {
    

    return (
                <div className=' w-full'>
                    <div className ="w-full lg:w-6/6 ">
                        <div className = "min-w-full overflow-x-auto bg-white shadow-md rounded my-6">
                            <table className ="min-w-full border-collapse table-fixed">
                                <thead>
                                    <tr className ="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                                        <th className ="py-3 px-6 text-left">Nama</th>
                                        <th className ="py-3 px-6 text-left">Email</th>
                                        <th className ="py-3 px-6 text-left">Telepon</th>
                                        <th className ="py-3 px-6 text-left">Alamat</th>
                                    </tr>
                                </thead>
                                <tbody className ="text-gray-600  text-xs md:text-sm font-light">
                                    {admin  &&  paginationData(getFiltered(admin.adminData , filter), activePage, 10).map((admin , index) => (
                                           <tr key={index} className ="border-b border-gray-200 hover:bg-gray-300">
                                                <td className ="py-3 px-6 text-left">
                                                    <div className ="flex items-center ">
                                                        <span className ="font-medium">{admin.name}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 text-center">
                                                    <div className ="flex">
                                                        <span className ="bg-red-500 tracking-wide text-gray-100 py-1 px-3 rounded-full text-xs">{admin.email}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 text-center">
                                                    <div className ="flex ">
                                                        <span className ="bg-green-500 tracking-wide text-gray-100 py-1 px-3 rounded-full text-sm">{admin.phone}</span>
                                                    </div>
                                                </td>
                                                <td className ="py-3 px-6 ">
                                                    <span >{admin.address}</span>
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

export default TableAdmin
