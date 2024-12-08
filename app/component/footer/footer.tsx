import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import "./footer.css"
export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-12 px-4 md:px-6">
      <div className="w-[90%] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Need help?</h3>
          <ul className="space-y-2">
            <li className="font-bold">Reach us at</li>
            <li>SUPPORT@RADSTORE.PK</li>
            <li>
              <span className="font-bold">
                Call/Whatsapp : {' '}
                <span className="hover:underline transition-all duration-300 ease-in-out">
                  03022994444
                </span>
              </span>
            </li>
            <li>Our timings are Mon-Sat 9am-5pm</li>
            <li>Address: 84 Westwood, Canal Road, Thokar Niaz Beg, Lahore.</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Explore</h3>
          <ul className="space-y-2">
            {['⚡ Sale', 'Men Tops', 'Men Bottoms', 'Best Sellers', 'New Arrivals'].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Information</h3>
          <ul className="space-y-2">
            {[
              'About us',
              'Contact us',
              'Returns & Exchanges',
              'Shipping Policy',
              'Terms of Service',
              'Privacy Policy',
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Column - Social Media */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="mt-8 pt-8 ">
        <p className="text-center text-sm">
          © 2024 Rad Clothing Store All Rights Reserved Developed by Ubaid Nadeem
        </p>
      </div>
    </footer>
  )
}

