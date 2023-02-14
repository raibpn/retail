import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { ShoppingCartIcon } from "@heroicons/react/outline";

interface Props {
  products: Product[];
}
const Product = ({ products }: Props) => {
  return (
    <div className="m-4 flex items-center justify-center">
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product, id) => (
          <div
            className="relative h-[335px] w-[260px] max-w-md overflow-hidden rounded shadow-lg transition md:h-[480px] lg:w-[410px]"
            key={id}
          >
            <Image
              className="h-[200px] w-[260px] md:h-[360px] lg:w-[610px]"
              src={`${product.image}`}
              alt="image"
              width={product.width}
              height={product.height}
            />
            <div className="px-6 py-3">
              <p className="text-base text-gray-700">{product.description}</p>
              <p className="text-base text-gray-700">{product.price} kr</p>
            </div>
            <div className="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer rounded-full pb-2 md:h-[70px] md:w-[70px] ">
              <span
                className="z-50 flex h-9 w-9 items-center justify-center rounded-full bg-[#a3d3c3] text-[14px]
                font-bold text-[#1f3d10] transition group-hover:bg-black group-hover:text-[#F3E5AB] md:h-[44px] md:w-[44px]"
              >
                <ShoppingCartIcon className=" xs:h-[15px] xs:w-[15px] h-6 w-6 text-black sm:h-[25px] sm:w-[25px] md:h-[32px] md:w-[32px] " />
              </span>
              {/* <ShoppingCartIcon className=" xs:h-[15px] xs:w-[15px] h-6 w-6 text-black sm:h-[25px] sm:w-[25px] md:h-[32px] md:w-[32px] " /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
