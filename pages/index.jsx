import React, { useEffect, createRef } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingNav from "../components/navigation/Navbar/LandingNav";
import AboutCard from "../components/card/AboutCard";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";

function Index() {
  const auth = useSelector((state) => state.auth);
  const { adminInfo } = auth;

  const aboutRef = createRef();
  const contactRef = createRef();
  const homeRef = createRef();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (adminInfo) Router.push("/admin/addguest");
  }, [adminInfo]);

  return (
    <div className="bg-gray-100 ">
      <LandingNav home={homeRef} about={aboutRef} contact={contactRef} />
      <main>
        <section ref={homeRef}>
          <Banner />
        </section>
        <section ref={aboutRef} className="px-6 md:px-12  pt-28 ">
          <AboutCard />
        </section>
        <section ref={contactRef} className="px-6 md:px-12  pt-32 ">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
