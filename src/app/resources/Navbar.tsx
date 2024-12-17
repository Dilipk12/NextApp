"use client";
import { ModeToggle } from "@/components/ModeToggle";
import ConfiLogo from "@/app/images/ConfiLogo.png"
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ishide, setIshide] = useState(true);
  

  const handleclickhidden = () => {
    setIshide(!ishide);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-1">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-14">
        <div className="flex justify-between items-center py-4">
    
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
            <Image 
            src={ConfiLogo}
            className="w-24 sm:w-28"
            alt="Logo"
             />
              {/* <h1 className="text-2xl font-bold text-[#00607d]">ConfiDental</h1> */}
            </Link>
          </div>

        

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                Home
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                About
              </h1>
            </Link>
            <div className="relative">
              <Link href="/services" onClick={handleclickhidden}>
                <div className="flex items-center hover:text-[#00607d]">
                  <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                    Services
                  </h1>
                  <div className="text-xl">
                    { ishide ? <MdKeyboardArrowDown className="dark:text-gray-600" /> : <MdKeyboardArrowUp className="dark:text-gray-600" /> }
                  </div>
                </div>
              </Link>
              <div  className={`${ishide ? "hidden" : "block"} absolute top-10 w-[200px] border-[1px] border-gray-300 bg-white shadow-md rounded-lg flex flex-col gap-3 p-5`}>
                <Link href="/services" onClick={()=>{setIshide(!ishide)}}>
                  
                  <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                    General Dentistry
                  </h1>
                </Link>
                <Link href="/services" onClick={()=>{setIshide(!ishide)}}>
                  
                  <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                    Cosmetic Dentistry
                  </h1>
                </Link>
                <Link href="/services" onClick={()=>{setIshide(!ishide)}}>
                  
                  <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                    Pediatric Dental Care
                  </h1>
                </Link>
              </div>
            </div>
            <Link href="/contact">
              <h1 className="text-gray-600 hover:text-[#00607d] font-semibold">
                Contact
              </h1>
            </Link>

            <Link href="/contact">
              <button className="hover:bg-zinc-900 bg-transparent text-zinc-900 hover:text-white hover:border-zinc-900 hover:border-2 border-2 border-zinc-900 px-8 py-3 font-semibold text-sm rounded-full">
                Book Appointment
              </button>
            </Link>
             <ModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
          <div className="mr-4">
            <ModeToggle />
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <h1 className="text-3xl text-black">
                  <IoClose />
                </h1>
              ) : (
                <h1 className="text-3xl text-black">
                  <IoMenu />
                </h1>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden">
            <div className="flex flex-col gap-4 pb-4">
              <Link href="/">
                <h1
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-[#00607d] font-semibold"
                >
                  Home
                </h1>
              </Link>
              <Link href="/about">
                <h1
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-[#00607d] font-semibold"
                >
                  About
                </h1>
              </Link>
              <Link href="/services">
                <h1
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-[#00607d] font-semibold"
                >
                  Services
                </h1>
              </Link>
              <Link href="/contact">
                <h1
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-[#00607d] font-semibold"
                >
                  Contact
                </h1>
              </Link>

              <Link href="/contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-black hover:bg-transparent hover:text-black hover:border-black hover:border-2 border-2 border-white px-8 py-4 sm:px-20 sm:py-5 font-semibold text-sm text-white rounded-full mb-3"
                >
                  Book Appointment
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
