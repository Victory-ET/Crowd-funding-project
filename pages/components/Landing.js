import React from "react";
import Link from "next/link";

function Landing() {
  return (
    <div className=" w-screen flex justify-center items-center minimum">
      <div className=" sm:pt-0 sm:px-0 container flex w-4/5 md:pt-5 md:px-7 justify-evenly md:gap-64 flex-col lg:flex-row">
        <span className=" relative md:w-3/5 pt-16 w-screen">
          <h2 className="text-3xl md:text-5xl text-blue-500 mb-4">
            Decentralized fund me
          </h2>
          <p className=" mb-6">
            A new way for requesting funding
            <br />
            from friends and the public.To get started click the button
            below.
          </p>
          <button className=" bg-blue-600 text-white px-12 py-4 sm:px-8 sm:py-2 rounded-md btn mb-6">
            <Link href="/Form">Create a Request</Link>
          </button>
          <p className="text-gray-600 opacity-80">
            Committed to helping the community
          </p>
        </span>
        <span className=" relative md:w-2/5 add card md:mt-0 mt-6 w-screen sm:flex sm:items-start">
          <div className=" floater" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
