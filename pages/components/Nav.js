import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className=" w-screen relative flex items-center justify-center px-2 top-2">
      <nav className=" container flex items-start py-4 relative gap-16 md:gap-0">
        <div className=" relative">
          <h1 className=" text-blue-600 font-bold text-3xl cursor-pointer">
            <Link href="/">DecFundMe</Link>
          </h1>
        </div>
        <div className="sm:gap-8 sm:flex flex-1 justify-end items-center gap-12 text-slate-900 uppercase text-base font-medium md:py-1">
          <button className=" bg-blue-600 text-white px-12 py-2 rounded-md">
            Connect Metamask
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
