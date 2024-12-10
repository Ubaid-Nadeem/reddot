"use client";

import Navbar from "./component/navbar/navbar";
import HeroComponet from "./component/heroPage/page";
import Section from "./component/section2/page";
import { Outfit } from "@next/font/google";
import TshirtCollection from "./component/tshirt-collection/page";
import TrouserCollection from "./component/trousers-collection/page";
import FullSleeveTshirt from "./component/full-sleeve-t-shirts/page";
import HomeDisplay1 from "./component/home-display1/page";
import HomeFooter2 from "./component/home-footer-1/page";
import Footer from "./component/footer/footer";
import { useEffect, useState } from "react";
import Loading from "./component/loading/page";
import { useStore } from "../zustand/store";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [isloaded, setIsloaded] = useState(false);
  const { cart, addToCart } = useStore();

  useEffect(() => {
    setIsloaded(true);
    addToCart({
      id: 1,
      name: "shirt",
    });
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      {isloaded ? (
        <div className={outfit.className}>
          <>
            <HeroComponet />
            <div
              style={{
                width: "100%",
                height: "20px",
              }}
            />
            <Section />
            <TshirtCollection />
            <TrouserCollection />
            <FullSleeveTshirt />
            <HomeDisplay1 />
            <HomeFooter2 />
          </>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
