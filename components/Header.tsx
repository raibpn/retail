import React from "react";
import Image from "next/image";
import logo from "../asset/logo.jpg";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="sticky flex w-full items-center justify-center bg-black">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-10 cursor-pointer transition hover:opacity-100">
            <Image src={logo} alt="image" fill className="object-cover" />
          </div>
        </Link>
        <div className="flex text-white">
          <p>NepRetail</p>
        </div>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Clothes</a>
        <a className="headerLink">Shoes</a>
        <a className="headerLink">Sports</a>
        <a className="headerLink">Beauty</a>
        <a className="headerLink">Sale</a>
        <a className="headerLink">Foods</a>
      </div>
      <div>
        <SearchIcon className="headerIcon" />
      </div>
    </header>
  );
};

export default Header;
