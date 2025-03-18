import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className='w-full max-w-[2560px] flex flex-col gap-5 pt-10 px-10 bg-secondary text-gray-300'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-36'>
            <div className='flex gap-5 flex-1'>
                <img className='shrink-0 w-20 h-20' src="/logo.png" alt="Logo"  />
                <div>
                    <p className='text-lg'>Al Assal Manpower, Inc.</p>
                    <p className='text-sm'>One of the leading manpower provider in its current market in the Philippines</p>
                </div>
            </div>

            <div className='flex-1 flex flex-col items-start gap-2 '>
                    <p className='text-lg'>Connect With Us</p>
                    <p>Finding the right people is our business</p>
                    <div className='flex gap-5'>
                    <Image src="/facebook-logo-fill.svg" alt="facebook logo" width={30} height={10} />
                    <Image src="/linkedin-logo-fill.svg" alt="linkedin logo" width={30} height={10} />
                    </div>
                    
            </div>

            <div className='flex-1 items-start gap-2 '>
                <p className='text-lg'>Visit Us</p>
                <p>G/F, 3/F & 8/F Jayyah Building #2013 President Quirino Avenue, Corner San Pascual Street, Malate 1004 Manila Philippines</p>
                <p>+632 8 526-6680</p>
                <p>+632 8 523-9006</p>
            </div>

           
    
     
        </div>
        <hr className='border-gray-400'/>
        <div className='flex gap-20 w-full items-center justify-between'>
        <p className='text-center py-5 text-sm'>&copy; {new Date().getFullYear()} Al Assal Manpower, Inc. All rights reserved. </p><p className='text-sm'>Privacy Policy</p>
        </div>
        

</footer>

  )
}

export default Footer
