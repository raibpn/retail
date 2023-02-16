import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketTotal } from "../redux/basketSlice";

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ id, items }: Props) => {
  //   const totalPrice = useSelector(selectBasketTotal);

  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`${items[0].title} removed from basket`, {
      position: "bottom-center",
    });
  };
  console.log("items in checkout:", items);
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 p-4 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          className="p-2 transition delay-150 ease-in-out hover:scale-125"
          src={`${items[0].image}`}
          alt="image"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 p-4 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>

          <p className="flex max-w-fit cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency
              quantity={items?.reduce((total, item) => total + item.price, 0)}
              currency="DKK"
            />
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
