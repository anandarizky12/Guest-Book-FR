import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserPlus } from "@react-icons/all-files/fa/FaUserPlus";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";
import { FaChartBar } from "@react-icons/all-files/fa/FaChartBar";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import UserDropdown from "../../dropdown/UserDropdown";
import { FaGripLines } from "@react-icons/all-files/fa/FaGripLines";
import { FaBuilding } from "@react-icons/all-files/fa/FaBuilding";
import { FaClock } from "@react-icons/all-files/fa/FaClock";


export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  return (
    <div
    hidden={
      !router.pathname.includes('admin')
      ? true
      : false
    }>
      <nav  className="z-50 font-sans md:left-0 bg-white md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden flex flex-wrap items-center justify-between relative md:w-64 py-4 px-6"
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
              <FaGripLines /> 
          </button>
          {/* Brand */}
          <Link href="/admin/addguest">
            <a
              className= "flex flex-row items-center md:pb-2 text-gray-500 mr-0  text-xs md:text-base font-semibold p-4 px-0"
            >
              <img src="/onlylogo.png" className="md:mr-2 mr-1" width={30}/> Badan Pusat Statistik
            </a>
               {/* <img src="/logobps.png" alt="" className="w-60" /> */}
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative md:hidden">
              <UserDropdown />
            </li> 
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-500 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-gray-500 mr-0 inline-block whitespace-nowrap text-sm  font-bold p-4 px-0"
                    >
                      Buku Tamu
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes/>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
         

            {/* Divider */}
            <hr className="mb-4 md:min-w-full" />
    
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/addguest">
                  <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/addguest") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                   <FaUserPlus className="text-xl mr-5"/> 
                    Tambah Tamu
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/guestdata">
                  <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/guestdata") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                   <FaUserFriends  className="text-xl mr-5"/>
                    Data Pengunjung 
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/visitdata">
                  <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/visitdata") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                   <FaChartBar  className="text-xl mr-5"/>
                    Bagan Kunjungan
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/visitpurpose">
                  <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/visitpurpose") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                   <FaFileAlt  className="text-xl mr-5"/>
                    Perihal Kunjungan
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/visittime">
                  <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/visittime") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                   <FaClock  className="text-xl mr-5"/>
                     Waktu Kunjungan
                  </a>
                </Link>
              </li>
              <li className="items-center my-1">
                <Link href="/admin/getalladmin">
                <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/getalladmin") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                    <FaUserTie className="text-xl mr-5"/>
                    Data Admin
                  </a>
                </Link>
              </li>
         
              <li className="items-center my-1">
                <Link href="/admin/instancesvisit">
                <a
                    href="#pablo"
                    className={
                      "text-xs md:text-sm  py-3 font-semibold flex items-center " +
                      (router.pathname.indexOf("/admin/instancesvisit") !== -1
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-gray-500 hover:text-gray-400")
                    }
                  >
                    <FaBuilding className="text-xl mr-5"/>
                    Kunjungan Instansi
                  </a>
                </Link>
              </li>
         
            </ul>
            <div className="hidden md:inline-block md:absolute bottom-2">
                <hr className="mb-4 md:min-w-full " />
                <p className="text-xs text-center text-gray-400">Badan Pusat Statistik <br/>
                Jalan Gatot Subroto No. 5 Banjarmasin 70235 <br/>
                Telpon (0511) 6773031, 6773932 <br/> 
                email : bps6371@bps.go.id, bps6371@gmail.com <br/>
                  (BPS - Statistics Indonesia) <br/>
                </p>
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
}