import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-8 py-4 bg-slate-200">
      <div className="w-full h-full flex">
        <div className="flex gap-4">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={40} height={40} alt="logo" />
          </Link>
          <div className="flex justify-center items-center">
            <h2 className="font-medium text-xl ">BIGBRAIN</h2>
          </div>
          <Link className="flex justify-center items-center" href={"/dashboard/documents"}>
            <p>Dashboard</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
