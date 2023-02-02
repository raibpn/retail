import Link from "next/link";
import React from "react";
import headphone from "../asset/head1.jpg";
import logo from "../public/asset/logo.jpg";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="m-4 flex items-center justify-center">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="h-[410px] max-w-[420px] overflow-hidden rounded shadow-lg md:h-[610px]">
          <img
            className="h-[160px] w-full object-fill md:h-[380px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mountain</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
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
        <div className="h-[410px] max-w-[420px] overflow-hidden rounded shadow-lg md:h-[610px]">
          <img
            className="h-[160px] w-full object-fill md:h-[380px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mountain</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
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
        <div className="h-[410px] max-w-[420px] overflow-hidden rounded shadow-lg md:h-[610px]">
          <img
            className="h-[160px] w-full object-fill md:h-[380px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mountain</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
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
        <div className="h-[410px] max-w-[420px] overflow-hidden rounded shadow-lg md:h-[610px]">
          <img
            className="h-[160px] w-full object-fill md:h-[380px]"
            src="/asset/head1.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mountain</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
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

export default Landing;
