import { FaSignInAlt } from "@react-icons/all-files/fa/FaSignInAlt";
import React from "react";
import { FaGripLines } from "@react-icons/all-files/fa/FaGripLines";
import Router from "next/router";
import { useDetectClickOutside } from "react-detect-click-outside";
import Image from "next/image";

function LandingNav({ about, contact, home }) {
  const [scrool, setScrool] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const nav = React.useRef();

  const handleNav = (val) => {
    val.current.scrollIntoView({ behavior: "smooth" });
  };

  const closeDropdownPopover = () => {
    setShow(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdownPopover });

  React.useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 30) {
        setScrool(true);
        setShow(false);
      } else {
        setScrool(false);
      }
    };
  }, []);

  return (
    <div
      ref={nav}
      className={` ${
        scrool
          ? "bg-gray-100  transition-all md:h-14 ease-in  duration-200  shadow-md"
          : "bg-gray-100  shadow-sm transition-color  ease-out  duration-200"
      } h-20 w-full fixed sm:h-20 flex justify-center items-center z-50`}
    >
      <div
        style={{ maxWidth: "1322px" }}
        className="flex justify-between items-center w-80 sm:w-80vw "
      >
        <div className="bg-none top-0 p-0  text-blue-800 flex items-center text-base md:text-xl font-semibold">
          <Image
            height={38}
            width={38}
            alt="buku tamu bps"
            src="/onlylogo.png"
          />
          <div className="flex flex-col ml-1 md:ml-2">
            <p className="font-normal my-0 py-0">
              Badan <span className="text-yellow-600 my-0 py-0">Pusat</span>{" "}
              <span className="text-green-600 my-0 py-0">Statistik</span>
            </p>
          </div>
        </div>

        <div ref={ref}>
          <FaGripLines
            onClick={() => setShow(!show)}
            className="md:hidden inline-block text-xl text-gray-500"
          />
          <ul
            className={`${
              show
                ? "h-72 transition-all duration-300"
                : "h-0 transition-all duration-300"
            }  
            overflow-hidden  right-0 shadow-md w-full bg-gray-100 ease-in flex md:hidden absolute flex-col text-gray-500 top-20  font-light items-center`}
          >
            <li
              className="p-5 px-12  cursor-pointer font-light w-full border-t border-gray-200"
              onClick={() => handleNav(home)}
            >
              Home
            </li>
            <li
              className="p-5 px-12  cursor-pointer font-light w-full border-t border-gray-200"
              onClick={() => handleNav(about)}
            >
              Tentang
            </li>
            <li
              className="p-5 px-12 border-b cursor-pointer font-light w-full border-t border-gray-200"
              onClick={() => handleNav(contact)}
            >
              Contact
            </li>
            <li
              onClick={() => Router.push("/login")}
              className="cursor-pointer m-6 hover:bg-green-400 bg-green-600 px-8 p-2 rounded-full h-32 flex justify-between items-center text-white "
            >
              <FaSignInAlt className="mr-2" /> Admin
            </li>
          </ul>
        </div>

        {/* resposive desktop*/}
        <ul
          style={{ width: "30rem" }}
          className={` justify-between ease-in  hidden  top-12 md:flex items-center `}
        >
          <li onClick={() => handleNav(home)} className="mr-5 cursor-pointer">
            Home
          </li>
          <li onClick={() => handleNav(about)} className="mr-5 cursor-pointer">
            Tentang
          </li>
          <li
            onClick={() => handleNav(contact)}
            className="mr-5 cursor-pointer"
          >
            Contact
          </li>
          <li
            onClick={() => Router.push("/login")}
            className=" cursor-pointer hover:bg-green-400 bg-green-600 px-6 p-2 rounded-full flex items-center text-white"
          >
            <FaSignInAlt className="mr-2" /> Admin
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingNav;
