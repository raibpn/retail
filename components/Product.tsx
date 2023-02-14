import Link from "next/link";
import React from "react";
import headphone from "../asset/head1.jpg";
import logo from "../public/asset/logo.jpg";
import Image from "next/image";
import Button from "./Button";

interface Props {
  products: Product[];
}
const Product = ({ products }: Props) => {
  return (
    <div className="m-4 flex items-center justify-center">
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            className="relative h-[335px] w-[260px] max-w-md overflow-hidden rounded shadow-lg transition hover:scale-105 md:h-[480px] lg:w-[410px]"
            key={product._id}
          >
            <Image
              className="contain h-[200px] w-[260px] md:h-[360px] lg:w-[610px]"
              src={`${product.image}`}
              alt="image"
              width={product.width}
              height={product.height}
            />
            <div className="px-6 py-3">
              <p className="text-base text-gray-700">{product.description}</p>
              <p className="text-base text-gray-700">{product.price} kr</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
