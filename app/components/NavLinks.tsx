
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = () => {

  const pathname = usePathname();

    return (
      <>
        <li className="cursor-pointer hover:text-secondary"><Link className={`p-1 hover:border-b-3 border-secondary transition-all duration-100 ${pathname === '/' && 'border-b-3 border-secondary'}`} href={'/'}>Home</Link></li>
        <li className="cursor-pointer hover:text-secondary"><Link className={`p-1 hover:border-b-3 border-secondary transition-all duration-100 ${pathname === '/about-us' && 'border-b-3 border-secondary'}`} href={'/about-us'}>About Us</Link></li>
        <li className="cursor-pointer hover:text-secondary"><Link className={`p-1 hover:border-b-3 border-secondary transition-all duration-100 ${pathname === '/services' && 'border-b-3 border-secondary'}`} href={'/services'}>Services</Link> </li>
        <li className="cursor-pointer hover:text-secondary"><Link className={`p-1 hover:border-b-3 border-secondary transition-all duration-100 ${pathname === '/careers' && 'border-b-3 border-secondary'}`} href={'/careers'}>Careers</Link></li>
      </>
    )
  };
  
  export default NavLinks;
  