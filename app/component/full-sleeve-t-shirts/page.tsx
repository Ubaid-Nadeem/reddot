"use client";

import { useEffect, useRef } from "react";
import ArrowButton from "../animata/button/button";
import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion, useAnimation, useInView } from "motion/react";

export default function FullSleeveTshirt() {
  const Products = [
    {
      productName: "Striped Sleeves Black & Olive Baseball Raglan",
      imagePath:
        "https://radstore.pk/cdn/shop/products/1C1A9074_360x.jpg?v=1676539370",
      currentPice: 2300,
      discountedPrice: 1590,
      discription: "",
      id: 1,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Dark Brown Thermal Full Sleeves Waffle-Knit",
      imagePath:
        "https://radstore.pk/cdn/shop/files/1C1A3403-half_360x.jpg?v=1704188417",
      currentPice: 2500,
      discountedPrice: 1750,
      discription: "",
      id: 2,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "White Thermal Full Sleeves Waffle-Knit",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00506-alt_360x.jpg?v=1731923858",
      currentPice: 2500,
      discountedPrice: 1750,
      discription: "",
      id: 3,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Olive Thermal Full Sleeves Waffle-Knit",
      imagePath:
        "https://radstore.pk/cdn/shop/files/1C1A8986_360x.jpg?v=1699522839",
      currentPice: 2500,
      discountedPrice: 1750,
      discription: "",
      id: 4,
      sizes: ["S", "M", "L", "XLF"],
    },
    {
      productName: "Navy Thermal Full Sleeves Waffle-Knit",
      imagePath:
        "https://radstore.pk/cdn/shop/products/1C1A8583_360x.jpg?v=1667489372",
      currentPice: 2500,
      discountedPrice: 1750,
      discription: "",
      id: 5,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Striped Sleeves White Baseball Raglan",
      imagePath:
        "https://radstore.pk/cdn/shop/products/IMG_6011_360x.jpg?v=1689095079",
      currentPice: 2300,
      discountedPrice: 1590,
      discription: "",
      id: 6,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Striped Sleeves Black & Olive Baseball Raglan",
      imagePath:
        "https://radstore.pk/cdn/shop/products/1C1A8604_360x.jpg?v=1667489244",
      currentPice: 2500,
      discountedPrice: 1750,
      discription: "",
      id: 7,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Powder Blue Thermal Full Sleeves Waffle-Knit",
      imagePath:
        "https://radstore.pk/cdn/shop/files/1C1A8583_360x.jpg?v=1730198487",
      currentPice: 2500,
      discountedPrice: 1750,
      discription: "",
      id: 8,
      sizes: ["S", "M", "L", "XL"],
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("opened");
    }
  }, [isInView]);

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
      <h1>Full Sleeve T-Shirts</h1>
      <ScrollArea className="w-full ">
        <motion.div
          className="card-container"
          variants={listVarient}
          initial="closed"
          animate={mainControls}
        >
          {Products.map((product, index) => {
            return (
              <motion.div
                className="tshirt-card relative overflow-hidden"
                key={index}
                variants={listItemVariant}
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
                    <h5 className=" card-title ">
                      Navy Thermal Full Sleeves Waffle-Knit
                    </h5>

                    <div className="card-prices flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-[14px]">
                          <del>Rs.2,500</del>
                        </span>
                        <span className="text-[14px]">Rs.1,750</span>
                      </div>
                      <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                        Save Rs.750
                      </span>
                    </div>

                    <div
                      className="flex gap-2 sizes-tag-container"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                        S
                      </button>
                      <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">
                        M
                      </button>
                      <button className="bg-[#f3f3f3] px-2 ">L</button>
                      <button className="bg-[#f3f3f3] px-2 ">XL</button>
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
