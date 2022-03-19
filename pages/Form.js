import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function Form() {
  return (
    <div className="container">
      <Nav />
      <div className=" container flex w-full h-full justify-center items-center">
        <div className=" shadow-2xl px-8 py-10 flex flex-col gap-8 sm:w-4/5 md:w-2/5">
          <h2 className=" text-blue-600 text-4xl">Fund Request Form</h2>
          <p className=" text-lg">Only one more step to get started, fill the form below</p>

          <input
            type="text"
            placeholder="Enter your name"
            className=" focus:outline-none px-2 py-3 rounded-md text-black border-b-2 border-blue-600"
          />
          <input
            type="text"
            placeholder="Enter title of fund request"
            className=" focus:outline-none px-2 py-3 rounded-md text-black border-b-2 border-blue-600"
          />
          <input
            type="number"
            placeholder="Enter amount"
            className=" focus:outline-none px-2 py-3 rounded-md text-black border-b-2 border-blue-600"
          />
            <textarea rows="8" className=" px-4 py-3 focus:outline-none rounded-md text-black border-2 border-blue-600"/>
            <input type="file"/>
            <button className=" bg-blue-600 text-white px-12 py-4 sm:px-8 sm:py-2 rounded-md btn">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
