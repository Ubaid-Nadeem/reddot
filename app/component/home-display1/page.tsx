"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../../public/bg-1.jpg";
import bg2 from "../../../public/bg-2.jpg";
import bg3 from "../../../public/bg-3.jpg";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkless";
import BlurryBlob from "../animata/background/blurry-blob";
import { BackgroundGradientAnimation } from "../animata/background/gradient-animation";

const words = ["The adventurous.", "And the fearless.", "For the explorers."];
const backgroundImages = [bg1, bg2, bg3, bg1];

export default function HomeDisplay1() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundGradientAnimation>
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" font-bold text-white text-center text-shadow-lg"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </BackgroundGradientAnimation>

    // <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    //   <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
    //     <div className="relative z-10 flex h-full items-center justify-center">
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={index}
    //         initial={{ y: 50, opacity: 0 }}
    //         animate={{ y: 0, opacity: 1 }}
    //         exit={{ y: -50, opacity: 0 }}
    //         transition={{ duration: 0.5, ease: 'easeOut' }}
    //         className="text-6xl font-bold text-white text-center text-shadow-lg"
    //       >
    //         {words[index]}
    //       </motion.div>
    //     </AnimatePresence>
    //     </div>
    //   </h1>
    //   <div className="w-[40rem] h-40 relative">
    //     {/* Gradients */}
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

    //     {/* Core component */}
    //     <SparklesCore
    //       background="transparent"
    //       minSize={0.4}
    //       maxSize={1}
    //       particleDensity={1200}
    //       className="w-full h-full"
    //       particleColor="#FFFFFF"
    //     />

    //     {/* Radial Gradient to prevent sharp edges */}
    //     <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    //   </div>
    // </div>

    // <WavyBackground className="absolute mx-auto ">
    //   <div className="relative z-10 flex h-full items-center justify-center">
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={index}
    //         initial={{ rotateX: -90, opacity: 0 }}
    //         animate={{ rotateX: 0, opacity: 1 }}
    //         exit={{ rotateX: 90, opacity: 0 }}
    //         transition={{ duration: 0.5 }}
    //         className="text-6xl font-bold text-white text-center"
    //       >
    //         {words[index]}
    //       </motion.div>
    //     </AnimatePresence>
    //   </div>
    // </WavyBackground>
  );
}
