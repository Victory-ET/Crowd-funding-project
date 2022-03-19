import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div className=" w-screen flex justify-center items-center minimum">
      <div className=" container flex w-4/5 pt-5 px-7 justify-evenly flex-col lg:flex-row">
        <span className=" relative w-3/5 pt-16">
          <h2 className=" text-5xl text-blue-500 mb-4">
            Decentralized fund me
          </h2>
          <p className=" mb-6">
            A new way for requesting funding
            <br />
            from friends and the public. <br /> To get started click the button
            below.
          </p>
          <button className=" bg-blue-600 text-white px-12 py-4 rounded-md btn mb-6">
            Create a Request
          </button>
          <p className="text-gray-600 opacity-80">Committed to helping the community</p>
        </span>
        <span className=" relative w-2/5 add">
          <Image
            src="/1x/asset.png"
            height={450}
            width={550}
            className=""
            alt="Crypto Card"
          />
        </span>
      </div>
    </div>
  );
}

export default Landing;
