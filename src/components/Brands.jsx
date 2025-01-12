import React from "react";
import dante from "../images/dante.png";
import bella from "../images/bella.jpg";
import massaro from "../images/Massaro-vini.png";
import amigos from "../images/amigos.png";
import Footer from "./Footer";
const Brands = () => {
  const imgArray = [
    {
      image: dante,
      title: "Olio Dante",
    },
    {
      image: bella,
      title: "Bella Contadina",
    },
    {
      image: massaro,
      title: "Massaro wine",
    },
    {
      image: amigos,
      title: "Amigos Coffe",
    },
  ];
  console.log(imgArray[0].image);
  return (
    <>
      <div className="container mt-20 p-8 bg-slate-200">
        <h1 className="text-4xl font-bold text-center">
          Brands we work with:
        </h1>
        <div className="brands my-4 w-3/4 m-auto border">
          <div className="brand flex gap-4 justify-center items-center">
            <div className="brand w-1/2 flex flex-col items-center my-4 py-4">
              <img src={imgArray[0].image} alt="" className="mix-blend-multiply"/>
              <h1 className="text-3xl font-semibold">{imgArray[0].title}</h1>
            </div>
            <p className="w-1/2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consectetur ducimus incidunt quo suscipit minus nemo eius enim
              optio soluta, distinctio ad repudiandae nihil! Earum fuga,
              dignissimos cupiditate architecto amet velit. Molestiae cum
              nesciunt iste quod adipisci voluptas, omnis accusantium commodi
              neque maxime molestias odit.
            </p>
          </div>
          <div className="brand flex gap-4 justify-center items-center">
            <p className="w-1/2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consectetur ducimus incidunt quo suscipit minus nemo eius enim
              optio soluta, distinctio ad repudiandae nihil! Earum fuga,
              dignissimos cupiditate architecto amet velit. Molestiae cum
              nesciunt iste quod adipisci voluptas, omnis accusantium commodi
              neque maxime molestias odit.
            </p>
            <div className="brand w-1/2 flex flex-col items-center my-4 py-4">
              <img src={imgArray[1].image} alt="" className="mix-blend-multiply"/>
              <h1 className="text-3xl font-semibold">{imgArray[1].title}</h1>
            </div>
          </div>
          <div className="brand flex gap-4 justify-center items-center">
            <div className="brand w-1/2 flex flex-col items-center my-4 py-4">
              <img src={imgArray[2].image} alt="" className="mix-blend-multiply"/>
              <h1 className="text-3xl font-semibold">{imgArray[2].title}</h1>
            </div>
            <p className="w-1/2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consectetur ducimus incidunt quo suscipit minus nemo eius enim
              optio soluta, distinctio ad repudiandae nihil! Earum fuga,
              dignissimos cupiditate architecto amet velit. Molestiae cum
              nesciunt iste quod adipisci voluptas, omnis accusantium commodi
              neque maxime molestias odit.
            </p>
          </div>
          <div className="brand flex gap-4 justify-center items-center">
            <p className="w-1/2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consectetur ducimus incidunt quo suscipit minus nemo eius enim
              optio soluta, distinctio ad repudiandae nihil! Earum fuga,
              dignissimos cupiditate architecto amet velit. Molestiae cum
              nesciunt iste quod adipisci voluptas, omnis accusantium commodi
              neque maxime molestias odit.
            </p>
            <div className="brand w-1/2 flex flex-col items-center my-4 py-4">
              <img src={imgArray[3].image} alt="" className="mix-blend-multiply" />
              <h1 className="text-3xl font-semibold">{imgArray[3].title}</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brands;
