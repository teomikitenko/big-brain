import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-8 py-4 bg-primary">
      <div className="w-full h-full flex">
        <div className="flex gap-4">
          <Link className="flex gap-4" href={"/"}>
            <Image src={"/logo.png"} width={40} height={40} alt="logo" />
            <div className="flex justify-center items-center">
            <h2 className="font-medium text-xl text-slate-50 ">BIGBRAIN</h2>
          </div>
          </Link>
          <Link className="flex justify-center items-center" href={"/dashboard/documents"}>
            <p className="text-slate-50">Dashboard</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
