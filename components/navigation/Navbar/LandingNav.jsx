import { FaSignInAlt } from '@react-icons/all-files/fa/FaSignInAlt';
import React from 'react'
import { FaGripLines } from "@react-icons/all-files/fa/FaGripLines";
import Router  from "next/router";

function LandingNav() {
    const [scrool, setScrool] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const nav = React.useRef()
    React.useEffect(()=>{
    
        window.onscroll = function() {
            if (window.pageYOffset > 30) {
              setScrool(true)
            } else {
              setScrool(false)
            }
          };
    },[])

    return (
    <div ref={nav} className={` ${ scrool ? "bg-gray-100  transition-all md:h-14 ease-in  duration-200  shadow-md" : "bg-gray-100  shadow-sm transition-color  ease-out  duration-200" } h-12 fixed sm:h-16 z-50 flex w-full justify-between items-center p-4 sm:px-6`}>
        <div className="bg-none top-0 p-0 sm:p-5 text-blue-800 flex items-center text-base md:text-xl font-semibold">
            <img src="/onlylogo.png" className='mr-1 md:mr-2 w-12 md:w-18' />
            <p>Badan Pusat Statistik</p>
        </div>
        {!show ?
        <FaGripLines onClick={()=>setShow(!show)} className='md:hidden inline-block text-xl text-gray-600'/>
          :
        <div className='text-3xl' onClick={()=>setShow(!show)}>&times;</div>
      }
           <ul className={`${show ? ' bg-blue-300 h-72 transition-all duration-100' : 'h-0  '}  
            overflow-hidden  right-0 justify-around w-full bg-gray-100 ease-in flex md:hidden absolute flex-col text-gray-100 top-12  font-semibold items-center`}>
             <li >Home</li>
             <li >Tentang</li>
             <li >Contact</li>
             <li className=' cursor-pointer hover:bg-green-400 bg-green-600 px-4 p-1 rounded-md flex items-center text-white'><FaSignInAlt className="mr-2"/> Login</li>
           </ul>

           <ul className={`w-fullease-in  hidden  text-gray-500 top-12 md:flex font-semibold items-center`}>
             <li className='mr-5'>Home</li>
             <li className='mr-5'>Tentang</li>
             <li className='mr-5'>Contact</li>
             <li onClick={()=>Router.push('/login')} className='mr-5 cursor-pointer hover:bg-green-400 bg-green-600 px-4 p-1 rounded-md flex items-center text-white'><FaSignInAlt className="mr-2"/> Admin</li>
           </ul>
    </div>
    )
}

export default LandingNav
