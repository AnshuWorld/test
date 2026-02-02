import Image from "next/image";
import {Menu, X} from "lucide-react";
import Menubar from "../components/Menubar";
import Header from "../components/Header";  
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";

export default function Home() { 
  return (
    <main className="min-h-screen">
      <Carousel />
      <Header />
          
      <Contact />
      
      
    </main>
  );
}
