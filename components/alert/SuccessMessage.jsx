import React from 'react'

function SuccessMessage({ message , setShowAlert}) {
    return (
        <div className= "fixed z-50 top-20 ml-5 md:mx-0 md:right-10 text-white px-6 py-4 border-0 rounded mb-4 bg-green-500">
            <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell"></i>
            </span>
            <span className="inline-block align-middle mr-8">
            <b className="capitalize">Success</b> {message}
            </span>
            <button onClick={()=>setShowAlert(false)} className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
               <span>×</span>
            </button>
      </div>
    )
}

export default SuccessMessage
