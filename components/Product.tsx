import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";

interface Props {
  products: Product[];
}
const Product = ({ products }: Props) => {
  const dispatch = useDispatch();

  const addItemToBasket = (id: string) => {
    console.log("addToBasket", id);
    const product: Product = products.find((prod) => prod.id === id);
    dispatch(addToBasket(product));

    toast.success(`${product?.title} added to basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="m-2 flex items-center justify-center">
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
              <Link href="/product">
                {" "}
                <p className="cursor-pointer text-base font-semibold text-gray-700 hover:underline">
                  {product.description}
                </p>
              </Link>

              <p className="text-base text-gray-700">{product.price} kr</p>
            </div>
            <div
              className="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer rounded-full pb-2 md:h-[70px] md:w-[70px] "
              onClick={(): void => addItemToBasket(product.id)}
            >
              <span
                className="z-50 flex h-9 w-9 items-center justify-center rounded-full bg-[#a3d3c3] text-[14px]
                font-bold text-[#1f3d10] transition group-hover:bg-black group-hover:text-[#F3E5AB] md:h-[44px] md:w-[44px]"
              >
                <ShoppingCartIcon className="xs:h-[15px] xs:w-[15px] h-6 w-6 text-black transition delay-150 ease-in-out hover:scale-125 sm:h-[25px] sm:w-[25px] md:h-[32px] md:w-[32px] " />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
