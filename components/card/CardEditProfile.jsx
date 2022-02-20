import React from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../../actions/admin";
import { checkImage } from "../utils/image";
import axios from "axios";
import MLoader from "../loader/MoonLoader";
import { local } from "../utils/link";
import Swal from "sweetalert2";

export default function CardEditProfile({ data }) {
  const dispatch = useDispatch();
  const [uploading, setUploading] = React.useState(false);
  // const { adminInfo } = data;
  const [payload, setPayload] = React.useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    profile: data.profile,
  });

  const [image, setImage] = React.useState(!image && data.profile);

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile(data.id, payload));
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    try {
      const link = URL.createObjectURL(e.target.files[0]);

      const formData = new FormData();
      formData.append("image", file);
      setUploading(true);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const res = await axios.post(`${local}/upload`, formData, config);
      setImage(link);
      setPayload({ ...payload, profile: res.data });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
      Swal.fire("Error!", `${err}`, "error");
    }
  };

  return (
    <div className="font-sans relative border border-gray-300  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-400 text-xl font-semibold">My account</h6>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h6 className="text-gray-600 text-sm mt-3 mb-6 font-semibold ">
            Foto Profil
          </h6>
          <div className="w-full lg:w-full px-4">
            <div className="relative w-full">
              {uploading ? (
                <MLoader />
              ) : (
                <img
                  alt="Change Fotos"
                  htmlFor="attachment"
                  src={checkImage(image)}
                  className="shadow-xl mt-8 rounded-md h-32 md:h-56 align-middle border-none max-w-150-px cursor-pointer"
                />
              )}
              <div className="my-5">
                <label
                  htmlFor="file-upload"
                  className="bg-red-500 text-xs md:text-sm cursor-pointer py-2 px-5 font-semibold text-gray-100 rounded-md"
                >
                  Unggah Gambar
                </label>
                <label className="hidden md:inline-block text-xs md:text-sm text-gray-500 ml-2">
                  Pilih Gambar Dari Komputer
                </label>
                <input
                  onChange={uploadImage}
                  id="file-upload"
                  type="file"
                  accept="image/png, image/jpeg, mage/jpg"
                  hidden
                />
              </div>
            </div>
          </div>

          <h6 className="text-gray-600 text-sm mt-12 mb-6 font-semibold ">
            User Information
          </h6>

          <div className="flex flex-col w-full">
            <div className="w-full lg:w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block  text-gray-600 text-xs font-semibold mb-2"
                  htmlFor="grid-password"
                >
                  Nama
                </label>
                <input
                  type="text"
                  value={payload.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  className="border-0 px-3 py-3 placeholder-gray-100 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="lucky.jesse"
                />
              </div>
            </div>
            <div className="w-full lg:w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block  text-gray-600 text-xs font-semibold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={payload.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="border-0 px-3 py-3 placeholder-gray-100 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="jesse@example.com"
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-gray-100" />

          <h6 className="text-gray-600 text-sm mt-3 mb-6 font-semibold ">
            Contact Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block  text-gray-600 text-xs font-semibold mb-2"
                  htmlFor="grid-password"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  value={payload.address}
                  onChange={(e) => handleChange(e)}
                  name="address"
                  className="border-0 px-3 py-3 placeholder-gray-100 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="Lucky"
                />
              </div>
            </div>
            <div className="w-full lg:w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block  text-gray-600 text-xs font-semibold mb-2"
                  htmlFor="grid-password"
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  value={`${payload.phone}`}
                  onChange={(e) => handleChange(e)}
                  name="phone"
                  className="border-0 px-3 py-3 placeholder-gray-100 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue="Jesse"
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-gray-100" />
          <div className="flex items-end flex-col">
            <button
              className="bg-green-500 active:bg-gray-100 text-white font-semibold  text-xs md:text-base px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
