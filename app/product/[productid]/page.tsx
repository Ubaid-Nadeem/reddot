"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from "@/components/ui/label";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [product, setProduct] = useState({
    id: "0",
    name: "Black Premium Micro Track Upper",
    price: 199.99,
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology and an impressive 30-hour battery life, these headphones are perfect for music enthusiasts and professionals alike.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Comfortable over-ear design",
      "Built-in microphone for calls",
      "Touch controls for easy operation",
    ],
    specs: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 Ohm",
      Weight: "250g",
    },
    images: [
      "https://radstore.pk/cdn/shop/files/DSC00180_360x.jpg?v=1731059375",
      "https://radstore.pk/cdn/shop/files/DSC00744_360x.jpg?v=1732960422",
      "https://radstore.pk/cdn/shop/files/DSC00766_360x.jpg?v=1732960128",
    //   "https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569",
    ],
    rating: 4.5,
    reviews: 128,
    inStock: true,
  });
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="grid md:grid-cols-2 gap-8 w-[100%] m-auto p-12">
      <div className="space-y-4">
        <div className="relative aspect-square ">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              className="relative aspect-square"
              onClick={() => setMainImage(image)}
            >
              <Image
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </button>
          ))}
        </div>

      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        <p className="text-gray-600">{product.description}</p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="size" className="text-base font-semibold">
              Size
            </Label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger id="size" className="w-full mt-2 border-2">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div
            className="flex gap-3"
            style={{
              flexDirection: "column",
            }}
          >
            <Button className="p-5">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="secondary" >
              Buy Now
            </Button>
          </div>
        </div>
        {product.inStock ? (
          <Badge className="bg-green-500">In Stock</Badge>
        ) : (
          <Badge variant="destructive">Out of Stock</Badge>
        )}
        <Tabs defaultValue="description" className="mt-6">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <p>{product.description}</p>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specs" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
