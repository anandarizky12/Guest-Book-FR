import React from "react";

function ErrorMessage({ message, setShowAlert }) {
  return (
    <div className="fixed z-50 top-10 mx-2 md:mx-0 md:right-10 text-white px-6 py-4 border-0 rounded mb-4 bg-red-500">
      <span className="inline-block align-middle mr-8">
        <b className="capitalize">Error</b> {message}
      </span>
      <button
        onClick={() => setShowAlert(false)}
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
      >
        <span>×</span>
      </button>
    </div>
  );
}

export default ErrorMessage;
