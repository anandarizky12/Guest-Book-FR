import React from 'react';
import { FaPrint } from "@react-icons/all-files/fa/FaPrint";
import ReactToPrint from 'react-to-print';

function ButtonPrint({componentRef}) {
    return (
        <ReactToPrint 
            documentTitle = "Cetak Laporan"
            trigger={() => <button className="bg-green-500 p-2 md:w-45 text-gray-100 font-semibold rounded-sm flex items-center justify-center"><FaPrint className="lg:mr-2"/> <span className='hidden lg:inline-block'>Cetak Data</span></button>}
            content={() => componentRef.current}
     />
    )
}

export default ButtonPrint
