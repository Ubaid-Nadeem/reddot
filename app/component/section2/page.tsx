"use client";
import "./style.css";
import image1 from "../../../public/DSC00506-alt_360x.webp";
import image2 from "../../../public/DSC00378_200x.jpg";
import image3 from "../../../public/DSC00375_160x.jpg";
import image4 from "../../../public/DSC00357_180x.jpg";
import image5 from "../../../public/DSC00354_100x.jpg";
import Image from "next/image";
import {  motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section() {
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className=" section2" ref={containerRef}>
      <motion.h2
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
      >
        We design durable <b>&quot; all day everyday activewear &quot;</b> with
        a conscience — <b>100% made in Pakistan.</b>
      </motion.h2>
      <div className="section2-child flex">
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              x: -700,
            },
            visible: {
              x: 0,
            },
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="flex  relative w-[100%]  flex-1 "
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={image1} className="section2-image-1" alt="" />
          <Image src={image2} alt="" className="absolute section2-image-2" />
          <Image src={image3} alt="" className="absolute section2-image-3" />
          <Image src={image4} alt="" className="absolute section2-image-4" />
          <Image src={image5} alt="" className="absolute section2-image-5" />
        </motion.div>
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              x: 700,
            },
            visible: {
              x: 0,
            },
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          className="flex-1 image-layout-right"
        >
          <div className="image-layout-right-child">
            <p
              style={{
                textTransform: "uppercase",
              }}
            >
              Brand new
            </p>
            <h3>Active-Wear</h3>
            <p>Check out our comfy t-shirts, raglans, trousers and more.</p>
            <button className="btn">Men Tops</button>
            <button className="btn ml-3">Men Bottoms</button>
          </div>
        </motion.div>
      </div>

      {/* <div className="bg-[black] flex-1 h-[300px]">hello</div> */}
    </div>
  );
}
