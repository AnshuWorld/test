"use client";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import { useState } from "react";
export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative z-10 w-full fixed top-0 bg-gradient-to-r from-purple-600 to-blue-700 sticky top-0 z-50">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-3xl font-bold p-5">OurEcom</h1>
        <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden px-4 py-2 bg-blue-700 text-amber-200 shadow-lg rounded">
          {isOpen?<X />:<Menu />}
        </button>
        <ul className="hidden md:flex flex-row space-x-6 font-medium text-amber-200">
          <li><Link href="/" className="p-4 hover:bg-blue-900">Home</Link></li>
          <li><a href="#" className="p-4 hover:bg-blue-900">Products</a></li>
          <li><a href="#" className="p-4 hover:bg-blue-900">Services</a></li>
          <li><a href="#" className="p-4 hover:bg-blue-900">Testinomials</a></li>
          <li><Link href="/shop" className="p-4 hover:bg-blue-900">Shop</Link></li>
        </ul>
      </div>
      {isOpen && 
        <ul className="flex flex-col md:hidden space-y-2 font-medium text-amber-200">
          <li><Link href="/" className="block p-4 hover:bg-blue-900">Home</Link></li>
          <li><a href="#" className="block p-4 hover:bg-blue-900">Products</a></li>
          <li><a href="#" className="block p-4 hover:bg-blue-900">Services</a></li>
          <li><a href="#" className="block p-4 hover:bg-blue-900">Testinomials</a></li>
          <li><Link href="/shop" className="p-4 hover:bg-blue-900">Shop</Link></li>
        </ul>
      }
    </nav>
  );
}
