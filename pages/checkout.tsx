import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import Currency from "react-currency-formatter";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Stripe from "stripe";
import getStripe from "../utils/get-stripe";
import { fetchPostJSON } from "../utils/api-helpers";

const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const basketTotal = useSelector(selectBasketTotal);
  const [loading, setLoading] = useState<boolean>(false);
  const [groupedItemsBasket, setGroupedItemsBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });
    setGroupedItemsBasket(groupedItems);
  }, [items]);

  const createCheckoutSession = async () => {
    setLoading(true);

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_sessions",
      {
        items: items,
      }
    );

    // Internal Server Error
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }

    // Redirect to checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);

    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="p-2">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}

            <div className="my-12 mx-5 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                      <Currency quantity={basketTotal} currency="DKK" />
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>Free</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for: {""}
                      <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Enter zip code
                      </p>
                      <ChevronDownIcon className="h-6 w-6" />
                    </div>
                    <p>Kr -</p>
                  </div>
                </div>
                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>
                    <Currency quantity={basketTotal} currency="DKK" />
                  </h4>
                </div>
              </div>
              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">
                  How would you like to check out?
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div
                    className="flex flex-1 flex-col items-center space-y-8 rounded-xl  bg-[#dcecf1f6]
                    p-8 py-12 md:order-2"
                  >
                    <h4 className="mb-4 flex flex-col text-center text-xl font-semibold text-blue-500">
                      Mobile Pay
                      <span>
                        <Currency quantity={basketTotal} currency="DKK" />
                      </span>
                    </h4>
                    <Button title="Check Out" noIcon />
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center space-y-8 rounded-xl  bg-[#dcecf1f6]
                   p-8 py-12 md:order-2"
                  >
                    <h4 className="mb-4 flex flex-col text-center text-xl font-semibold text-blue-500">
                      Stripe
                      <span>
                        <Currency quantity={basketTotal} currency="DKK" />
                      </span>
                    </h4>
                    {/* <Button title="Check Out" /> */}
                    <Button
                      noIcon
                      loading={loading}
                      title="Check Out"
                      onClick={createCheckoutSession}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
