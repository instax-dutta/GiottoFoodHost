import React from "react";
import img2 from "../images/oil-bottle-with-new-label-w.jpg";
import img3 from "../images/shutterstock_674598577.jpg";

const Collections = () => {
  const imageArray = [img2, img3, img2, img3, img2, img3];
  return (
    <>
      <div className="px-10 mt-10">
        <h1 className="text-5xl font-bold text-center mb-6">Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageArray.map((image, index) => (
            <div key={index} className="card overflow-hidden bg-white border shadow-md rounded-lg hover:border-green-300">
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  src={image}
                  alt={`Image ${index}`}
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  eligendi!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collections;
