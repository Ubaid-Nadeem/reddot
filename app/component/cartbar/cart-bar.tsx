"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { CartItem } from "./cart-item";

// Mock data for cart items
const initialCartItems = [
  {
    id: "1",
    name: "Black Premium Micro Track Upper",
    price: 19.99,
    quantity: 2,
    image: "https://radstore.pk/cdn/shop/files/DSC00180_360x.jpg?v=1731059375",
  },
  {
    id: "2",
    name: "Product 2",
    price: 29.99,
    quantity: 1,
    image: "https://radstore.pk/cdn/shop/files/DSC00180_360x.jpg?v=1731059375",
  },
  {
    id: "3",
    name: "Product 3",
    price: 39.99,
    quantity: 3,
    image: "https://radstore.pk/cdn/shop/files/DSC00180_360x.jpg?v=1731059375",
  },
];

export function CartBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const cartRef = useRef<HTMLDivElement>(null);

  const toggleCart = () => setIsOpen(!isOpen);

  const closeCart = () => setIsOpen(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const increaseQuantity = (id: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <button onClick={toggleCart} className="" aria-label="Open cart">
        <ShoppingCart className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background z-40"
              aria-hidden="true"
            />
            <motion.div
              ref={cartRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-xl z-50 flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold text-black">Cart</h2>
                <button
                  onClick={closeCart}
                  className="p-2 rounded-full hover:bg-muted"
                  aria-label="Close cart"
                >
                  <X className="w-6 h-6 text-black" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4">
                {!cartItems.length && <p className="text-left font-light text-[14px] p-5">Your cart is currently empty.</p>}
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-black">TSUBTOTAL:</span>
                    <span className="font-semibold text-black">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
