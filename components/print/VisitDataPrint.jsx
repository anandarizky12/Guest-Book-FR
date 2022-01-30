import React from 'react'

function VisitDataPrint({ year, report}) {

    const allmonth = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    return (
        <div className='flex flex-col w-full p-5 items-center my-2'>
            <div className="flex bb-2">
                <img src="/onlylogo.png" alt="BPS" width={70} />
                <div className="text-center">
                    <p className='text-xl'>BADAN PUSAT STATISTIK KOTA BANJARMASIN</p>
                    <p className='text-sm'>Jalan Gatot Subroto No. 5 Banjarmasin 70235, Telpon (0511) 6773031, 6773932</p>
                </div>
            
            </div>
            <hr className="mb-4 md:min-w-full b-2 text-red-600 bg-red-500" />

                <div className ="w-full lg:w-6/6">
                        <div className ="bg-white shadow-md rounded my-6 ">
                            <table className ="min-w-full  table-auto border">
                                <thead>
                                    <tr className ="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className ="py-3 px-6 text-left">Bulan</th>
                                        <th className ="py-3 px-6 text-left">Total Kunjungan Perbulan</th>
                            
                                    </tr>
                                </thead>
                                <tbody className ="text-gray-600 text-sm font-light">
                                    {report.map((month , index) => (
                                        <tr key={index} className ="border-b border-gray-200 hover:bg-gray-100">
                                            <td className ="py-3 px-6 text-left w-3/6 ">
                                                <div className ="flex items-center">
                                                    <span className ="font-medium">{allmonth[index]}</span>
                                                </div>
                                            </td>
                                            <td className ="py-3 px-6 text-left">
                                                <div className ="flex items-center">
                                                    <span className =" py-1 px-3  text-sm">{month} Orang</span>
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

export default VisitDataPrint
