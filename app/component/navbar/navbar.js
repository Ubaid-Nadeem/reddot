"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import logoBlack from "@/public/logo-black_100x.png";
import { CartBar } from "../cartbar/cart-bar";
import Image from "next/image";
import "./style.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  // When the user scrolls, check the scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // If scrolled more than 100px, make navbar sticky
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <nav
      className={`transition-all duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
          : ` ${
              pathname == "/"
                ? "absolute text-[white]"
                : "text-[black] border-b-2"
            } top-0 left-0 right-0`
      }`}
      style={{
        fontSize: "17px",
      }}
    >
      <div className="w-[90%] mx-auto sm:px-4 py-5">
        <div className="flex items-center justify-between">
          {/* navigations */}

          <div
            className="left-nav hidden md:flex space-x-6 items-center flex-1"
            style={{}}
          >
            <ul
              className="flex item-center flex-1 gap-5"
              style={{
                fontSize: "18px",
              }}
            >
              <li className="flex gap-2">
                Shop{" "}
                <svg
                  className="w-3 h-6 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
                <ul className="nested-nav">
                  <li>Best Sellers</li>
                  <li>New Arrivals</li>
                  <li>Premium Tracksuits</li>
                  <li>Sweatshirts & Hoodies</li>
                  <li>Full Sleeves T-Shirts</li>
                  <li>Trousers</li>
                  <li>T-Shirts</li>
                  <li>Shorts</li>
                </ul>
              </li>
              <li>
                ⚡ <span className="ml-1">Sale</span>
              </li>
              <li className="flex gap-1">
                {" "}
                🔥<span>Bundle Deals</span>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Menu with navigation*/}

          <div className="md:hidden flex-1">
            <Sheet>
              <SheetTrigger>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent
                side={"left"}
                style={{
                  width: "100%",
                }}
              >
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                    <ScrollArea className="h-[100vh] pb-10">
                      <motion.ul
                        variants={listVarient}
                        initial="closed"
                        animate="opened"
                        className="mt-5 p-3"
                      >
                        <motion.li variants={listItemVariant}>
                          <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger
                                style={{
                                  textDecoration: "none",
                                  fontSize: "20px",
                                }}
                              >
                                Shop
                              </AccordionTrigger>
                              <AccordionContent
                                style={{
                                  fontSize: "20px",
                                  textAlign: "left",
                                }}
                              >
                                <ul
                                  style={{
                                    marginLeft: "5px",
                                  }}
                                  className="mobile-nav"
                                >
                                  <li>Best Sellers</li>
                                  <li>New Arrivals</li>
                                  <li>Premium Tracksuits</li>
                                  <li>Sweatshirts & Hoodies</li>
                                  <li>Full Sleeves T-Shirts</li>
                                  <li>Trousers</li>
                                  <li>T-Shirts</li>
                                  <li>Shorts</li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </motion.li>

                        <motion.li variants={listItemVariant}>
                          <Accordion>
                            <AccordionItem
                              value="item-1"
                              style={{
                                fontSize: "20px",
                                padding: "20px 0",
                                cursor: "pointer",
                              }}
                            >
                              <div className="flex ">
                                {" "}
                                🔥<span className="ml-1">Bundle Deals</span>
                              </div>
                            </AccordionItem>
                          </Accordion>
                        </motion.li>

                        <motion.li variants={listItemVariant}>
                          <Accordion>
                            <AccordionItem
                              value="item-1"
                              style={{
                                fontSize: "20px",
                                padding: "20px 0",
                                cursor: "pointer",
                              }}
                            >
                              <div className="flex ">
                                {" "}
                                ⚡ <span className="ml-1">Sale</span>
                              </div>
                            </AccordionItem>
                          </Accordion>
                        </motion.li>

                        <motion.li variants={listItemVariant}>
                          <Accordion>
                            <AccordionItem
                              value="item-1"
                              style={{
                                fontSize: "20px",
                                padding: "20px 0",
                                cursor: "pointer",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Login
                            </AccordionItem>
                          </Accordion>
                        </motion.li>

                        <motion.li variants={listItemVariant}>
                          <div className="flex pt-5 gap-2">
                            <svg
                              className="w-8 h-8 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <svg
                              className="w-8 h-8"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </motion.li>
                      </motion.ul>
                    </ScrollArea>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* logo */}

          <div className=" flex-1 ">
            {
              <Link href={"/"}>
                <Image
                  src={
                    isSticky
                      ? logoBlack
                      : pathname === "/"
                      ? "https://radstore.pk/cdn/shop/files/logo-small_7d4c07ae-d941-4a8c-9c59-a5a91127162b_100x.png?v=1613726347"
                      : logoBlack
                  }
                  alt="logo"
                  width={100}
                  height={100}
                  className="logo m-auto"
                />
              </Link>
            }
          </div>

          {/* Desktop Navbar Links */}

          <div
            className="flex right-nav gap-2 space-x-6 items-center flex-1 text-right"
            style={{
              justifyContent: "right",
            }}
          >
            <span>
              <svg
                className="w-6 h-6  inline hidden md:inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <span>
              <svg
                className="w-6 h-6  inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>
            <span className="relative">
              <CartBar />
            </span>

            {/* cart */}

            {/* <Sheet>
              <SheetTrigger>
                <svg
                  className="w-6 h-6  inline"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent side={"right"}>
                <SheetHeader>
                  <div className="cart-slide-top">
                    <h2 className="font-bold text-2xl py-5 absolute top-0 border-b-2 w-[100%]">
                      Cart
                    </h2>
                  </div>
                  <div className="cart-slide-content"></div>
                  <div>
                     
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
