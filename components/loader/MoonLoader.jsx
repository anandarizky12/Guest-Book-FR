import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

function MLoader() {
    return (
        <div className='flex w-full items-center justify-center h-full'>
                 <MoonLoader color="blue" size={72} />
        </div>
   
    )
}

export default MLoader
