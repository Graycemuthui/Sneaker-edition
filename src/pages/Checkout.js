import React, { useContext } from "react";
import { RoomContext } from "../Context";
import { product } from "./Productdata";

function Checkout() {
  const { saved, totalPriceWithQuantity } = useContext(RoomContext);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Sneakers
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
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
                <tbody className="divide-y divide-gray-200" key={product.id}>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        className="h-12 w-12 object-cover object-center rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {product.price}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="d-flex justify-center my-3">
              <h3>Total Price: ${totalPriceWithQuantity}</h3>
              <div className="flex gap-4 justify-center">
                <button
                  className="bg-[#FF7D1A] text-white px-8 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white"
                  onClick={() => {
                    if (totalPriceWithQuantity > 0)
                      alert(
                        "Thank you for shopping with us! Your order has been placed."
                      );
                    else alert("Please add items to cart before checking out.");
                  }}
                >
                  Checkout
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
