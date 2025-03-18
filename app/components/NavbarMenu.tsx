'use client';

import React from 'react'
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import CustomBtn from './CustomBtn';


const NavbarMenu = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    
    return <div className={`block lg:hidden absolute right-0 top-0 flex flex-col transition-all  ${isOpen ? 'w-[100vw]' : 'w-18'}`}>
        <div className='p-5 w-full flex h-18'>
            <div className='flex-1'></div>
            <Image src={"/list.svg"} alt={"menu"} width={30} height={30} onClick={() => {setIsOpen(!isOpen)}}/>
        </div>
        <ul className={`bg-white flex flex-col list-none w-[100vw] px-10 py-10 text-xl text-secondary font-semibold gap-10 ${!isOpen && 'hidden'}`}>
            <NavLinks/>
            <li><Link href={'/contact-us'}>Contact Us</Link></li>
            <li>
            <CustomBtn className="flex gap-2 bg-white rounded-2xl px-2 py-1 items-center border border-secondary-pale text-secondary text-base"><img src={'/united-kingdom.png'} className='w-5 h-5' alt="flag"/><span>English</span></CustomBtn>
          </li>
        </ul>
        
    </div>
}

export default NavbarMenu
