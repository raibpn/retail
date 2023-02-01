import React from "react";
import Image from "next/image";
import logo from "../asset/logo.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div className="relative h-10 w-10 cursor-pointer opacity-80 transition hover:opacity-100">
          <Image src={logo} alt="image" fill className="object-fill" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
