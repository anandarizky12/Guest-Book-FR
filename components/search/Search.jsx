import React from 'react'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

function Search({filter , setFilter}) {
    return (
        <div>
            <div className="pr-2 relative flex w-full  sm:h-full flex-wrap items-stretch mb-3 ">
                     <FaSearch className="z-10 h-full leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-5 md:w-8 pl-2 py-1"/>
                <input onChange={(e)=>setFilter(e.target.value)} type="text" placeholder="Search" className="z-2 px-2 py-1 placeholder-blueGray-300 border-2 text-blueGray-600 relative bg-gray-30  rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
            </div>
        </div>
    )
}


export default Search
