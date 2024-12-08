"use client";
import { useEffect, useRef } from "react";
import ArrowButton from "../animata/button/button";
import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useAnimation, useInView, motion } from "motion/react";

export default function TrouserCollection() {
  const Products = [
    {
      productName: "White Lycra Trouser with Three Black Stripes",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00996_360x.jpg?v=1733477561",
      currentPice: 3000,
      discountedPrice: 2100,
      discription: "",
      id: 1,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Black Interlock Wide Leg Cargo Trouser",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00978_360x.jpg?v=1733477432",
      currentPice: 3000,
      discountedPrice: 2100,
      discription: "",
      id: 2,
      sizes: ["S", "M", "L", "XL"],
    },

    {
      productName: "Gray Wide Leg Trouser with Front Stitch",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00976_360x.jpg?v=1733477301",
      currentPice: 2550,
      discountedPrice: 1790,
      discription: "",
      id: 1,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Navy with Gray Piping Premium Micro Stretch Tech Pants",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00876_ce25d59e-d6ab-47c6-94f1-a31c807ab9c3_360x.jpg?v=1732961100",
      currentPice: 2250,
      discountedPrice: 1790,
      discription: "",
      id: 2,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Maroon with White Piping Premium Micro Stretch Tech Pants",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00868_570d93b3-f5c6-40e3-8b9d-b019734b652f_360x.jpg?v=1732961035",
      currentPice: 2550,
      discountedPrice: 1790,
      discription: "",
      id: 1,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "Gray with Black Piping Premium Micro Stretch Tech Pants",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00853_360x.jpg?v=1732960962",
      currentPice: 2290,
      discountedPrice: 1010,
      discription: "",
      id: 2,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productName: "White Realistic Oversize Hoodie",
      imagePath:
        "https://radstore.pk/cdn/shop/files/DSC00794_da7bc2d1-5151-4db6-8d44-05369a38c3a6_360x.jpg?v=1732961254",
      currentPice: 2550,
      discountedPrice: 1790,
      discription: "",
      id: 1,
      sizes: ["S", "M", "L", "XL"],
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
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

  useEffect(() => {
    if (isInView) {
      mainControls.start("opened");
    }
  }, [isInView]);

  return (
    <div className="trouser-container" ref={containerRef}>
      <h1>Trousers</h1>
      <ScrollArea className="w-full ">
        <motion.div
          className="card-container"
          variants={listVarient}
          initial="closed"
          animate={mainControls}
        >
          <motion.div variants={listItemVariant} className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/bundle_329d86f2-3ec5-4284-983f-e822a0875340_360x.jpg?v=1717490353"
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
              <motion.div className="tshirt-card overflow-hidden relative" variants={listItemVariant}>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  SALE
                </div>
                <a href="#">
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
                        <del>Rs.{product.currentPice}</del>
                      </span>
                      <span className="text-[14px]">
                        Rs.{product.discountedPrice}
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
                    {product.sizes.map((size, sizeIndex) => {
                      return (
                        <button
                          key={sizeIndex}
                          className=" bg-[#f3f3f3] px-2 py-1 "
                          disabled
                        >
                          {size}
                        </button>
                      );
                    })}
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
