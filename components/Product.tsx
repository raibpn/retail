import Link from "next/link";
import React from "react";
import headphone from "../asset/head1.jpg";
import logo from "../public/asset/logo.jpg";
import Image from "next/image";
import Button from "./Button";

const Product = () => {
  return (
    <div className="m-4 flex items-center justify-center">
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="relative h-[335px] w-[260px] max-w-md overflow-hidden rounded shadow-lg transition hover:scale-105 md:h-[610px] lg:w-[410px]">
          <img
            className="object-fit h-[200px] w-[260px] md:h-[470px] lg:w-[610px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-3">
            <p className="text-base text-gray-700">Great to have headphone</p>
          </div>
          <div className=" flex items-center space-y-2 px-3 pt-3">
            <div className="w-1/2">
              <Button title="Add To Cart" />
            </div>
            <div className="w-1/2">
              <Button title="Buy Now" />
            </div>
          </div>
        </div>
        <div className="h-[335px] w-[260px] max-w-md overflow-hidden rounded shadow-lg transition hover:scale-105 md:h-[610px] lg:w-[410px]">
          <img
            className="object-fit h-[200px] w-[260px] md:h-[470px] lg:w-[610px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-3">
            <p className="text-base text-gray-700">Great to have headphone</p>
          </div>
          <div className="h-5 px-6 pt-4 pb-2 md:h-20 lg:h-20">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #photography
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #travel
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
        <div className=" h-[335px] w-[260px] max-w-md overflow-hidden rounded shadow-lg transition hover:scale-105 md:h-[610px] lg:w-[410px]">
          <img
            className="object-fit h-[200px] w-[260px] md:h-[470px] lg:w-[610px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-3">
            <p className="text-base text-gray-700">Great to have headphone</p>
          </div>
          <div className="h-5 px-6 pt-4 pb-2 md:h-20 lg:h-20">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #photography
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #travel
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
        <div className=" h-[335px] w-[260px] max-w-md overflow-hidden rounded shadow-lg transition hover:scale-105 md:h-[610px] lg:w-[410px]">
          <img
            className="object-fit h-[200px] w-[260px] md:h-[470px] lg:w-[670px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-3">
            <p className="text-base text-gray-700">Great to have headphone</p>
          </div>
          <div className="h-5 px-6 pt-4 pb-2 md:h-20 lg:h-20">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #photography
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #travel
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
