import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editGuest } from "../../actions/guest";
import AlertMessage from "../alert/AlertMessage";
import ButtonLoader from "../loader/ButtonLoader";
import axios from "axios";
import { getAllInstace } from "../../actions/guest";
import Loader from "react-spinners/ClipLoader";
// components

export default function CardAddGuest({data ,id}) {

  const dispatch = useDispatch();
  const edit = useSelector(state => state.editGuestReducer);
  const { guest } = edit;
  // const [show , setShow] = React.useState(false);
  const [loading , setLoading ] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const  auth  = useSelector(state => state.auth);
  const { adminInfo } = auth;
  
  // const { data, message, success } = guest;
  const [state, setState] = React.useState({
    name: data.name,
    phone :data.phone,
    email: data.email,
    instance : data.instance,
    address: data.address,
    gender : data.gender,
    purpose : data.purpose
  });

  React.useEffect(() => {   
    setState({
      name: data.name,
      phone :data.phone,
      email: data.email,
      instance : data.instance,
      address: data.address,
      gender : data.gender,
      purpose : data.purpose
    })
}, [data]);
  const handleInput = (e) =>{
  
      const { name, value } = e.target;
      
      setState({
        ...state, 
        [name] : value
      })
  };
  React.useEffect(() => {
    dispatch(getAllInstace());
   }, []);
  const  instance_data = useSelector(state => state.getAllInstanceReducer);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + adminInfo.token
        }
      };
                      axios
                      .put(`/api/updateguest/${id}`, state, config)
                      .then(res => {
                       
                        dispatch(editGuest(res.data));
                        setShowAlert(true);
                        setLoading(false)
                      })
                      .catch((err)=>{
                        setLoading(false)
                        const msg = JSON.parse(err.request.response);
                      
                        // for (let key in msg) {
                        //   setErrMsg(msg[key]);
                        //   dispatch(editGuest(msg[key]));
                        // }
                        dispatch(editGuest(msg));
                        setShowAlert(true);
                      })
      
  }

  

  return (
    <>
      {guest && <AlertMessage show={showAlert} setShowAlert={setShowAlert} message={guest.message} success={guest.success}/>}
      {instance_data.data ? 
      <div className="font-sans relative border border-gray-200 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-500 text-sm md:text-2xl font-semibold">Edit Data Tamu</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <h6 className="text-gray-800 text-xs md:text-base mt-3 mb-6 font-semibold">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2"
                    htmlFor="grid-password"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    value={state.name}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan nama tamu"
                    name="name"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
              <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2"
                    htmlFor="grid-password"
                  >
                    Jenis Kelamin
                  </label>
                <div className="relative w-3/6 mb-3 flex justify-between flex-wrap">
                    <div className="">
                       <input checked={state.gender == "Laki-Laki" ? true : false } onChange={(e) => handleInput(e)} type="radio" id="Laki-Laki" name="gender" value="Laki-Laki"/>
                        <label  className="font-light ml-2 text-xs md:text-sm"  htmlFor="Laki-Laki">Laki - Laki</label>  
                    </div>
                    <div className="">
                      <input checked={state.gender == "Perempuan" ? true : false } onChange={(e) => handleInput(e)}  type="radio" id="Perempuan" name="gender" value="Perempuan"/>
                      <label className="font-light ml-2 text-xs md:text-sm"  htmlFor="Perempuan">Perempuan</label>
                    </div>
                </div>
    
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-300" />

            <h6 className="text-gray-800 text-xs md:text-base mt-3 mb-6 font-semibold">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    value={state.address}
                    onChange={(e) => handleInput(e)}
                    name="address"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan alamat"
                  />

                        
                  <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2 mt-5"
                    htmlFor="grid-password"
                  >
                   Instansi
                  </label>
                 
                  <select 
                    name = 'instance'
                    onChange={(e)=>handleInput(e)}
                 
                    className="form-select appearance-none
                    w-full
                    px-3
                    py-3
                    text-sm
                    font-normal
                    text-gray-500
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option value={null} disabled selected={state.instance ? false : true}>-- Klik Untuk Pilih Instansi --</option>
                      {instance_data.data.instance.map((item,index)=>{
                        return <option selected={state.instance && state.instance._id == item._id} key={index} value={item._id}>{item.name}</option>
                      })}
                      {/* <option  value={null}>Lainnya</option> */}
                  </select>
               
                  <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2 mt-5"
                    htmlFor="grid-password"
                  >
                   E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={state.email}
                    onChange={(e) => handleInput(e)}
                    name="email"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Masukkan email"
                  />
                   <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2 mt-5"
                    htmlFor="grid-password"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    value={state.phone}
                    name="phone"
                    onChange={(e) => handleInput(e)}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="+62"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-gray-300" />

            <h6 className="text-gray-800 text-xs md:text-base mt-3 mb-6 font-semibold">
              Lainnya
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block text-gray-500 text-xs md:text-sm font-semibold mb-2"
                    htmlFor="grid-password"
                  >
                    Perihal
                  </label>
                  <textarea
                    type="text"
                    value={state.purpose}
                    name="purpose"
                    onChange={(e) => handleInput(e)}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder="Masukkan perihal"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-green-500 w-20 text-white active:bg-gray-500 font-bold uppercase text-xs md:text-base px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      { loading ? <ButtonLoader/> : "Edit"}
                </button>
            </div>
        
          </form>
        </div>
      </div>
      :
      <Loader/>
    }
    </>
  );
}