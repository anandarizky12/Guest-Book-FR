import React from 'react'
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

function MLoader() {
    return (
        <div className='flex '>
                 <MoonLoader color="blue" size={72} />
        </div>
   
    )
}

export default MLoader
