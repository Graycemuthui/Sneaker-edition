import React, { useContext, useState } from "react";
import { product } from "../pages/Productdata.js";
import { RoomContext } from "../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Lightbox from "lightbox.js-react";
import "lightbox.js-react/style.css"; // Don't forget to import the styles

const Product = () => {
  const { addCart, counter, removeFromArray } = useContext(RoomContext);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleIncrement = () => {
    addCart(product);
  };

  const handleDecrement = () => {
    removeFromArray(product.id);
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:pt-18 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-10 lg:px-8 lg:pb-24 ">
          <div className=" aspect-h-4 aspect-w-4 rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-3/4 w-4/9 object-cover object-center rounded-lg "
            />
            <div className=" lg:grid lg:grid-cols-4 lg:gap-y-4 gap-3 pt-9">
              <div className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg">
                <img
                  onClick={() => openLightbox(1)}
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center hover:blur-sm"
                />
              </div>
              <div className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg">
                <img
                  onClick={() => openLightbox(2)}
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center hover:blur-sm"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  onClick={() => openLightbox(4)}
                  src={product.images[4].src}
                  alt={product.images[4].alt}
                  className="h-full w-full object-cover object-center hover:blur-sm"
                />
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  onClick={() => openLightbox(6)}
                  src={product.images[6].src}
                  alt={product.images[6].alt}
                  className="h-full w-full object-cover object-center hover:blur-sm"
                />
              </div>
            </div>
            {isLightboxOpen && (
              <Lightbox
                mainSrc={product.images[photoIndex].src}
                nextSrc={
                  product.images[(photoIndex + 1) % product.images.length].src
                }
                prevSrc={
                  product.images[
                    (photoIndex + product.images.length - 1) %
                      product.images.length
                  ].src
                }
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + product.images.length - 1) %
                      product.images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % product.images.length)
                }
              />
            )}
          </div>
          {/* Description and details */}
          <div className="pt-1 text-start">
            <h3 className="text-sm font-bold  text-[#FF7D1A]">
              SNEAKER COMPANY
            </h3>
            <h1 className="text-3xl font-extrabold">
              {" "}
              Fall Limited Edition <br />
              Sneakers
            </h1>
            <div className="space-y-4 mt-3">
              <p className="text-sm text-gray-900">{product.description}</p>
            </div>
            <div className="mt-4">
              <div className=" flex flex-row gap-4 text-center">
                <p className="text-2xl tracking-tight text-gray-900">
                  ${product.price}
                </p>
                <p className="text-md bg-[#FFEDE0] text-[#FF7D1A] px-1">50%</p>
              </div>
              <p className="text-md text-gray-500 line-through"> $250.00</p>
            </div>
            <div className="mt-8">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-6 text-center bg-gray-100 px-4 py-2 rounded-lg content-center">
                  <button
                    onClick={handleDecrement}
                    className="text-2xl text-[#FF7D1A]"
                  >
                    -
                  </button>
                  <p className="text-md content-center text-center text-black">
                    {counter[product.id] || 0}
                  </p>
                  <button
                    onClick={handleIncrement}
                    className="text-2xl text-[#FF7D1A]"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addCart(product)}
                  className="bg-[#FF7D1A] text-white px-8 py-2 rounded-lg hover:bg-[#FF7D1A] hover:text-white flex flex-row gap-2"
                >
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
