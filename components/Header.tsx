import React from "react";
import Image from "next/image";
import logo from "../asset/logo.jpg";
import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const session = false;
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-black">
      <div className="flex items-center justify-start px-1 md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-10 cursor-pointer transition hover:opacity-100">
            <Image src={logo} alt="image" fill className="object-cover" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Clothes</a>
        <a className="headerLink">Shoes</a>
        <a className="headerLink">Sports</a>
        <a className="headerLink">Beauty</a>
        <a className="headerLink">Sale</a>
        <a className="headerLink">Foods</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 px-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative h-8 w-3 cursor-pointer text-white">
            <span className="-right-1 -top-1 z-50 flex h-1 w-1 items-center justify-center pt-1 text-sm text-slate-300">
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={""}
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
          />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
};

export default Header;
