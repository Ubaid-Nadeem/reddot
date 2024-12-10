"use client";

import "./style.css";
import ArrowButton from "../animata/button/button";
import { motion, useAnimation, useInView } from "motion/react";
import { useRef, useEffect } from "react";

export default function HomeFooter2() {
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
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const listVarient = {
    closed: {
      // x: "100vw",
    },
    opened: {
      // x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="flex HomeFooter2-container">
      <div className="HomeFooter2-child1">
        <img
          src="https://radstore.pk/cdn/shop/files/File0702_square_d9d6de80-9230-4ff1-ba12-5761f2a716c0_750x.jpg?v=1613737436"
          alt=""
        />
      </div>
      <div className="HomeFooter2-child2">
        <div ref={containerRef}   />
        <motion.div
          variants={listVarient}
          initial="closed"
          animate={mainControls}
          transition={{
            // delay: 2,
          }}
        >
          <motion.p variants={listItemVariant}>A good change</motion.p>
          <motion.h2 variants={listItemVariant}>WHY SHOP WITH US</motion.h2>

          <motion.p variants={listItemVariant}>
            Along with hundreds of online stores, you might think as to what
            makes Rad any different? <br /> And the difference is how we treat
            our customers. Developing a long-term relationship demands that we
            give our best. The quality of our products speaks for itself!
          </motion.p>
          <motion.div variants={listItemVariant}>
            <ArrowButton
              text={"Shop Now"}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "15px 35px",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
