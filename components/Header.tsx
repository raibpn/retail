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
      <div className="flex items-center justify-start px-4 pt-1 md:w-1/5">
        <Link href="/">
          <div className="relative flex h-10 w-12 cursor-pointer items-center justify-between transition hover:opacity-100">
            <Image src={logo} alt="image" fill className="object-cover" />
          </div>
          <div className="relative float-right text-white">
            <p>BuyKin</p>
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
          <div className="group relative cursor-pointer text-white transition">
            <span
              className="absolute -top-2 -left-2 z-50 flex h-4 w-4 items-center justify-center rounded-full 
            bg-[#6aa7f7] text-[14px] font-bold text-[#1f3d10] transition group-hover:bg-black group-hover:text-[#F3E5AB]"
            >
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
