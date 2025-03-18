
import Link from "next/link";


const NavLinks = () => {
    return (
      <>
        <li className="cursor-pointer hover:text-secondary"><Link href={'/about-us'}>About Us</Link></li>
        <li className="cursor-pointer hover:text-secondary"><Link href={'/services'}>Services</Link> </li>
        <li className="cursor-pointer hover:text-secondary"><Link href={'/careers'}>Careers</Link></li>
      </>
    )
  };
  
  export default NavLinks;
  