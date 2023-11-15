import React, { useContext } from "react";
import { RoomContext } from "../Context";
import { product } from "../pages/Productdata.js";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  const { saved, counter, removeFromArray, totalPriceWithQuantity } =
    useContext(RoomContext);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleRemoveFromCart = (productId) => {
    removeFromArray(productId);
  };

  if (saved.length === 0) {
    return (
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              href="/#"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              No items in your cart
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          {saved.map((products) => {
            return (
              <div
                className="flex flex-col justify-center items-center px- py-1 content-center text-sm text-black"
                key={product.id}
              >
                <div className="flex gap-4">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-12 w-12 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-bold">{product.name}</p>
                    <div className="flex flex-row">
                      <p className="text-md">${product.price}</p>
                      <p className="text-md"> x </p>
                      <p className="text-md">{counter[product.id] || 0}</p>
                      <p className="text-md font-bold pl-4">
                        Total: ${totalPriceWithQuantity(product)}
                      </p>
                      <TrashIcon
                        className="h-4 w-4 ml-2 cursor-pointer"
                        onClick={() => handleRemoveFromCart(product.id)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to="/checkout"
                    className="d-flex justify-content-center mx-4 text-decoration-none text-dark fw-bold"
                  >
                    <button className="bg-[#FF7D1A] text-white px-20 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Cart;
