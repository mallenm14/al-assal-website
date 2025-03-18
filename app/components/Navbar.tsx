'use client'
import React, { useState } from 'react'
import NavbarMenu from './NavbarMenu'
import NavLinks from './NavLinks'
import Link from 'next/link'
import Logo from './Logo'
import CustomBtn from "./CustomBtn";
import ActionBtn from "./ActionBtn";
import { useEffect } from 'react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 h-18 z-50 transition-all duration-100 ${isScrolled && "bg-white shadow-lg"} `}>
      <nav className='max-w-[2560px] mx-auto px-5 lg:px-10 py-3 flex lg:gap-5 justify-between items-center h-full w-full'>
        <div className='h-full w-52 relative'> <Link href={'/'}><Logo/></Link></div>
        <div className='h-full hidden lg:flex lg:justify-between grow '>
       
          <ul className='hidden lg:flex lg:px-10 xl:px-20 flex justify-between items-center text-gray-800  font-bold gap-16 list-none'>
          <NavLinks/>
        </ul>
        <ul className='hidden lg:flex gap-5 items-center justify-center'>
          <li>
            <CustomBtn className="flex gap-2 bg-white rounded-2xl px-2 py-1 border border-secondary-dark text-secondary"><img src={'/united-kingdom.png'} className='w-5 h-5' alt="flag"/><span>English</span></CustomBtn>
          </li>
          <li>
            <Link href={'/contact-us'}><ActionBtn color="secondary">Contact Us</ActionBtn>
            </Link>
          </li>
        </ul>
       </div>
       <NavbarMenu /> 
      </nav>
      
    </header>
  )
}

export default Navbar
