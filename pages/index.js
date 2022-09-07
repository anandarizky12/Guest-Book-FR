import React, { useEffect, createRef } from 'react';
import { useSelector } from 'react-redux';
import Router  from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingNav from '../components/navigation/Navbar/LandingNav';
import AboutCard from '../components/card/AboutCard';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

function Index() {
  const  auth  = useSelector((state) => state.auth);
  const { adminInfo } = auth;
  
  const aboutRef = createRef();
  const contactRef = createRef();
  const homeRef = createRef();

  useEffect(() =>{
    AOS.init();
  },[]);


  useEffect(() => {
     if(adminInfo) Router.push("/admin/addguest");
  }, [adminInfo]);

  return (
      <div className='bg-gray-100 '>

        <LandingNav home={homeRef} about={aboutRef} contact={contactRef}/>
        
        <main>
        <section ref={homeRef}>
          <div className="flex flex-col md:flex-row h-screen items-center justify-between">

            <div className="w-5/6 mt-52 md:mt-0 md:px-10 px-2 ">
              <div className="items-center flex flex-wrap">
                <div className="w-full px-4 ml-auto mr-auto text-center lg:text-left">
                  <div>
                    <h1  data-aos="slide-up" className="text-blue-800 font-semibold md:font-bold text-2xl md:text-4xl">
                      Selamat Datang Di <br/> 
                      <span className="text-yellow-500">Badan</span> <span className="text-green-600">Pusat </span> 
                        <span className='text-blue-400'>Statistik</span>.
                    </h1>
                    <p onClick={()=>handleNav(aboutRef)}  data-aos="slide-right" className="my-4 text-xs md:text-base text-gray-600">
                      Silahkan isi data diri Anda. #MelayaniDenganHati❤️
                    </p>
                   
                    <button 
                          data-aos="fade-in"  
                          data-aos-duration="950"
                          data-aos-dellay="100"
                          onClick={()=>Router.push('/inputguest')} 

                          className='cursor-pointer hover:bg-indigo-500 p-2 px-12 
                          rounded-full  font-normal md:font-semibold text-gray-200 bg-blue-700 w-'>Isi Data</button>
                  </div>
                </div>
              </div>
            
            </div>
            <div data-aos="sPlide-left" className="hidden md:inline-block w-full h-screen bg-gray-100 bg-bps_login bg-center bg-cover"/>
            <div data-aos="slide-up" className=" md:hidden w-full h-2/6  bg-gray-100 bg-wave  bg-cover"/>
          
          </div>
        </section>
        <section ref={aboutRef} className='px-6 md:px-12  pt-28 '>  
          <AboutCard/>
        </section>

        <section ref={contactRef} className='px-6 md:px-12  pt-32 '>  
          <Contact/>
        </section>
       
        </main>
          <Footer/>
        </div>
    
    )
}

export default Index;
