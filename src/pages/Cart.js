import React, { useContext } from "react";
import { RoomContext } from "../Context";
import { product } from "../pages/Productdata.js";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

function Cart() {
  const { saved } = useContext(RoomContext);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="w-full text-sm text-left rtl:text-right px-1">
              {saved.map((products) => {
                return (
                  <div
                    className="flex flex-row justify-center items-center px-1 py-1 content-center text-sm text-black"
                    key={product.id}
                  >
                    <div className="flex flex-row gap-4">
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        className="h-12 w-12 object-cover object-center rounded-lg"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">{product.name}</p>
                        <p className="text-xs">{product.price}</p>
                      </div>
                    </div>
                    <Link
                      to="/checkout"
                      className="d-flex justify-content-center mx-4 text-decoration-none text-dark fw-bold"
                    >
                      <button className="bg-[#FF7D1A] text-white px-4 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white">
                        Checkout
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
