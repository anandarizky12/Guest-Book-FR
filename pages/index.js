import React from 'react'
import { useSelector } from 'react-redux'
import AddByUser from '../components/card/CardAddByUser'
import Router  from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";


function Index() {
  const  auth  = useSelector((state) => state.auth);
  const { adminInfo } = auth;
  
  React.useEffect(() =>{
    AOS.init();
  },[])
 
  function Scrool (){
    window.scrollTo({ top: 680, behavior: 'smooth' })
  }

  React.useEffect(() => {
     if(adminInfo) Router.push("/admin/addguest");
  }, [adminInfo])

  return (
        <div className='bg-gray-100 '>
        <div className=''>
            <div className="bg-none absolute z-50 top-0 p-5 text-blue-800 flex items-center text-base md:text-xl font-semibold">
                <img src="/onlylogo.png" className='mr-1 md:mr-2 w-12 md:w-18' />
                <p>Badan Pusat Statistik</p>
            </div>
        </div>
        <main>
        <div className="relative  flex flex-col md:flex-row content-center items-center justify-between h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover "
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute "
            ></span>
          </div>
          <div className="container relative mt-52 md:mt-0">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-full px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1  data-aos="slide-up" className="text-blue-800 font-semibold text-2xl md:text-4xl">
                    Selamat Datang Di Badan Pusat Statistik
                  </h1>
                  <p  data-aos="slide-right" className="my-4 text-xs md:text-base text-gray-600">
                    Silahkan isi data diri Anda Dibawah. #MelayaniDenganHati❤️
                  </p>
                  <button 
                        data-aos="fade-in"  
                        data-aos-duration="950"
                        data-aos-dellay="100"
                        onClick={()=>Scrool()} 
                        className='cursor-pointer hover:bg-indigo-500 p-2 px-12 
                        rounded-full  font-normal md:font-semibold text-gray-200 bg-blue-700 w-'>Isi Data</button>
                </div>
              </div>
            </div>
          
          </div>
          <div data-aos="slide-left" className="hidden md:inline-block w-full h-full bg-gray-100 bg-bps_login bg-center bg-cover"></div>
          <div data-aos="slide-up" className=" md:hidden w-full h-2/6  bg-gray-100 bg-wave  bg-cover"></div>
        
        </div>
       
          <section id="form" className="relative md:p-6">
              <AddByUser/>
          </section>
    
        </main>
        </div>
          

       
    )
}

export default Index
