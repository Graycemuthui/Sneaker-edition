import React, { useContext, useState } from "react";
import { product } from "../pages/Productdata.js";
import { RoomContext } from "../Context";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Product = () => {
  const { addCart, counter, removeFromArray } = useContext(RoomContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [setCurrentImageIndex] = useState(0);

  const handleIncrement = () => {
    addCart(product);
  };

  const handleDecrement = () => {
    removeFromArray(product.id);
  };

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    console.log("Next image clicked");
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    console.log("Previous image clicked");
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto max-w-2xl px-4 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-10 lg:px-8 lg:pb-24 ">
          <div className=" aspect-h-4 aspect-w-4 rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-3/4 w-4/9 object-cover object-center rounded-lg "
            />
            <div className="hidden lg:block">
              <div className=" lg:grid lg:grid-cols-4 lg:gap-y-4 gap-3 pt-9 ">
                {product.images
                  .filter((image, index) => index % 2 === 0)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="h-20 w-20 object-cover object-center rounded-lg cursor-pointer"
                      onClick={() => openModal(image.src, image.id)}
                    />
                  ))}
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  {/* Background overlay, show/hide based on modal state. */}
                  <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                  ></div>

                  <div>
                    <button
                      onClick={handlePrevImage}
                      className="absolute bottom-80 left-80 bg-white text-[#FF7D1A] p-2 rounded-full cursor-pointer z-10"
                    >
                      {"<"}
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="absolute bottom-80 right-80 bg-white text-[#FF7D1A] p-2 rounded-full cursor-pointer z-10"
                    >
                      {">"}
                    </button>
                  </div>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  {/* Modal panel, show/hide based on modal state. */}

                  <div
                    className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="sm:px-6 sm:flex sm:flex-row-reverse">
                      <XMarkIcon
                        onClick={closeModal}
                        className="h-6 w-6 text-[#FF7D1A] cursor-pointer"
                      />
                    </div>

                    {/* Image */}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <img
                          src={selectedImage}
                          alt="modal"
                          className="h-3/4 w-4/9 object-cover object-center rounded-lg "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
