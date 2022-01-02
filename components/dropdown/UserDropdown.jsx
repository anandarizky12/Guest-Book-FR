import React from "react";
import { createPopper } from "@popperjs/core";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { checkImage } from "../utils/image";
import { getAdmin } from "../../actions/admin";

const UserDropdown = () => {

  const state = useSelector(state => state.getAdmin);
  const { data } = state;
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const Router = useRouter();

  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const ref =useDetectClickOutside({ onTriggered: closeDropdownPopover });
   
const logout = ()=> {
    localStorage.removeItem('auth')
    Router.push("/login");
};

const auth = useSelector(state => state.auth);
const { adminInfo } = auth;

const dispatch = useDispatch();

React.useEffect(() => {
  if(adminInfo){
    dispatch(getAdmin(adminInfo.adminData.id));
  }
}, []);


  return (
    <div ref={ref}>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          {/* <span className="w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full"> */}
            {data &&
            <img
              alt="..."
              className="inline-block md:w-12 w-9 rounded-full "
              src={checkImage(data.profile)}
            />
          }
          {/* </span> */}
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
      <Link href="/admin/editprofile">
          <a
            href="#pablo"
            className={
               "flex items-center hover:text-gray-400 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-600"
            }
           
          >
            <FaUserAlt className="mr-2" />
            Admin Profile
          </a>
        </Link>
        <button
          onClick={() => logout()}
          className={
            "flex items-center hover:text-gray-400 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-600"
          }
         
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
     
      </div>
    </div>
  );
};

export default UserDropdown;