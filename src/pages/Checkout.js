import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import { product } from "./Productdata";

function Checkout() {
  const { saved } = useContext(RoomContext);
  const { removeFromArray } = useContext(RoomContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (saved.length > 0) {
      let total = 0;
      saved.forEach((product) => {
        total += Number(product.product_price);
      });
      setTotalPrice(total);
    }
  }, [saved]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Price
                  </th>
                </tr>
              </thead>
              {saved.map((products) => (
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      <img
                        src={product.images.src}
                        alt={product.images.alt}
                        className="h-12 w-12 object-cover object-center rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link className="text-decoration-none text-dark fw-bold">
                        View Product
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="d-flex justify-center my-3">
              <h3>Total Price: ${totalPrice}</h3>
              <div className="flex gap-4 justify-center">
                <button
                  className="bg-[#FF7D1A] text-white px-8 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white"
                  onClick={() => {
                    if (totalPrice > 0)
                      alert(
                        "Thank you for shopping with us! Your order has been placed."
                      );
                    else alert("Please add items to cart before checking out.");
                  }}
                >
                  Checkout
                </button>
                <button
                  onClick={() => removeFromArray(product.id)}
                  className="bg-[#FF7D1A] text-white px-8 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
