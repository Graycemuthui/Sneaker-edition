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
      <div className="bg-gray-100' : '', 'block px-4 py-2 text-sm text-black">
        {saved.map((products) => {
          return (
            <div key={product.id} className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img
                  src={product.images.src}
                  alt={product.images.alt}
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
                <button className="bg-[#FF7D1A] text-white px-5 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white">
                  Checkout
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cart;
