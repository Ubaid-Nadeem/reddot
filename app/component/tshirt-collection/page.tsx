"use client";

import { useEffect, useRef } from "react";
import ArrowButton from "../animata/button/button";
import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion, useAnimation, useInView } from "motion/react";
import { Opacity } from "@tsparticles/engine";
export default function TshirtCollection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("opened");
    }
  }, [isInView]);

  const Products = [
    {
      productName: "Black Premium Micro Track Upper",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00180_360x.jpg?v=1731059375",
      currentPice: 3750,
      discountedPrice: 2630,
      discription: "",
      id: 1,
      sizes: ["S", "M", "L","XL"],
    },
    {
      productName: "Spider-M Oversize Sweatshirt",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00744_360x.jpg?v=1732960422",
      currentPice: 2290,
      discountedPrice: 1010,
      discription: "",
      id: 2,
      sizes: ["S", "M", "XL"],
    },
    {
      productName: "Bat-Signal Oversize Sweatshirt",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00766_360x.jpg?v=1732960128",
      currentPice: 2900,
      discountedPrice: 1010,
      discription: "",
      id: 3,
      sizes: ["S", "L", "XL"],
    },
    {
      productName: " White Realistic Oversize Hoodie",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569",
      currentPice: 3800,
      discountedPrice: 2600,
      discription: "",
      id: 4,
      sizes: ["S", "M", "L"],
    },
    {
      productName: "Striped Sleeves Black & Olive Baseball Raglan",
      imagePath:
        "https://radstore.pk/cdn/shop/products/1C1A9074_360x.jpg?v=1676539370",
      currentPice: 2300,
      discountedPrice: 1590,
      discription: "",
      id: 5,
      sizes: ["S", "M", "L"],
    },
    {
      productName: "Dark Green Sweatshirt With Black Panels",
      imagePath:
        "https://radstore.pk/cdn/shop/files/IMG_0106-green-noface_1_360x.jpg?v=1698404687",
      currentPice: 2800,
      discountedPrice: 1960,
      discription: "",
      id: 6,
      sizes: ["S", "M", "L"],
    },
    {
      productName: "Navy Sweatshirt With Embroidered Logo",
      imagePath:
        "https://radstore.pk/cdn/shop/files/1C1A8499_150e6dd5-828a-42e2-8a60-8ec296da5cc5_360x.jpg?v=1732700491",
      currentPice: 2800,
      discountedPrice: 1960,
      discription: "",
      id: 7,
      sizes: ["S", "M", "L"],
    },
  ];

  const listItemVariant = {
    closed: {
      // x: 100,
      opacity: 0,
    },
    opened: {
      // x: 0,
      opacity: 1,
    },
  };

  const listVarient = {
    closed: {
      Opacity: 0,
    },
    opened: {
      Opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div className="tshirt-container" ref={containerRef}>
      <h1>T-Shirts</h1>
      <ScrollArea className="w-full scroll">
        <motion.div
          className="card-container"
          variants={listVarient}
          initial="closed"
          animate={mainControls}
          
        >
          <motion.div
            className="tshirt-card relative"
            variants={listItemVariant}
          >
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/bundle_80e2cf19-d72d-42ef-805a-66497be60de6_360x.jpg?v=1726824029"
                alt="product image"
              />
            </a>

            <h5 className=" card-title ">
              Bundle Pack of Any 3 T-Shirts (Flat 50% Off)
            </h5>

            <div className="card-prices flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <span className="text-[14px]">Rs.3,660</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </motion.div>

          {Products.map((product, index) => {
            return (
              <motion.div
                key={index}
                variants={listItemVariant}
                className="tshirt-card overflow-hidden relative"
              >
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  SALE
                </div>
                <div>
                  <a href="#" className="sale-image">
                    <img
                      className="w-full"
                      src={product.imagePath}
                      alt="product image"
                    />
                  </a>

                  <div>
                    <h5 className=" card-title ">{product.productName}</h5>

                    <div className="card-prices flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-[14px]">
                          <del>Rs. {product.currentPice}</del>
                        </span>
                        <span className="text-[14px]">
                          Rs. {product.discountedPrice}
                        </span>
                      </div>
                      <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                        Save Rs. {product.currentPice - product.discountedPrice}
                      </span>
                    </div>

                    <div
                      className="flex gap-2 sizes-tag-container"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {product.sizes.map((size,sizeIndex) => {
                        return (
                          <button key={sizeIndex} className="bg-[#f3f3f3] px-2 ">{size}</button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="tshirt-section-footer">
        <ArrowButton text={"View all"} />
      </div>
    </div>
  );
}
