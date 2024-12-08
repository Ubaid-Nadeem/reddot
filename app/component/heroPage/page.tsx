"use client";
import { motion } from "framer-motion";
import "./style.css";
import "animate.css";
import { Scale } from "lucide-react";

export default function HeroComponet() {
  return (
    <motion.div className="hero-page h-screen md:h-['50%']">
      <div className="child-container">
        <h1 className="animate__animated animate__fadeInLeft text-[white] font-bold ">
          Pakistan &apos; s Favorite <br /> Active-wear.
        </h1>
        <button className="animate__animated animate__fadeInUp text-[white]">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
}
