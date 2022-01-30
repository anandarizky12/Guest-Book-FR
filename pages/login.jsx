import React from "react";
import Link from "next/link";
import axios from "axios";
import ErrorMessage from "../components/alert/ErrorMessage";
import Router  from "next/router";
import { useDispatch } from "react-redux";
import { adminLogin } from "../actions/admin";
import ButtonLoader from "../components/loader/ButtonLoader";

export default function Login() {

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [err, setErr] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);
  const dispatch = useDispatch();

  const [loading,setloading] = React.useState(false);

  let adminDataFromStorage;
  if (typeof window !== 'undefined'){
  
        adminDataFromStorage = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')) 
        : null; 
   
  }
  
  React.useEffect(() => {
     if(adminDataFromStorage) Router.push("/admin/addguest");
  }, [adminDataFromStorage])

 const handleInput = (e) => {
    const {name, value} = e.target;
    setState({
        ...state,
        [name]: value,
    });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        const data = JSON.stringify(state);
    
        const config = {
          headers: {
              'Content-Type': 'application/json'
          }
        };
          axios
          .post("/api/login", data, config )
          .then((res) => {
            dispatch(adminLogin(res.data));
            setloading(false);
          })
    
          .catch((err) => {
            setloading(false);
            const msg = JSON.parse(err.request.response);
              for (let key in msg) {
                setErrMsg(msg[key]);
              }
        
            setErr(true);
          });
    }
  return (
    <div className="flex items-center h-screen bg-gray-200">

     {err && <ErrorMessage message = {errMsg} setShowAlert={setErr}/>}

      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
              <div className="mt-6">
                <div className="text-center">
                  <h6 className="text-gray-500 text-2xl font-light">
                    Welcome
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-400 text-center mb-3 font-bold">
                  <p className="text-xl font-light">Login</p>
                </div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-400 text-xs font-light mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name= "email"
                      required
                      value={state.email}
                      onChange={(e)=>handleInput(e)}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-400 text-xs font-light  mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name = "password"
                      required
                      value={state.password}
                      onChange={(e)=>handleInput(e)}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-800 text-white font-light active:bg-gray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {loading ? <ButtonLoader /> : "Login"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-gray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

