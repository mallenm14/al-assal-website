import ContactForm from '@/app/components/ContactForm'
import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className=' flex flex-col w-full max-w-[2560px] pt-18'>
      <section className='w-full max-w-[2560px] mx-auto bg-white'>
        <div className='h-[70vh] w-full overflow-hidden relative flex flex-col lg:flex-row'>
          <div className='h-1/2 lg:h-full w-full bg-secondary-dark absolute lg:-skew-x-20 lg:-translate-x-1/2 lg:z-10'></div>
          
          <div className='w-2/3 px-16 lg:px-32 h-full flex lg:justify-center items-center text-gray-100 font-bold z-20 flex-col gap-5'>
            
            <p className='w-full text-start text-xl lg:text-4xl pt-16'>Ask Us,</p>
            <p className='w-full text-start text-2xl lg:text-6xl'>We’d Love to Hear from You!</p>
          </div>
          <div className='w-full h-full relative flex justify-center items-center'>
          <Image fill src="/images/stocks/samson-ZGjbiukp_-A-unsplash.jpg" alt="Buildings" className='absolute m-auto right-[-9999px] left-[-9999px] top-[-9999px] bottom-[-9999px] object-cover' />
          <div className='absolute z-10 w-full'>
          <ContactForm/>
          </div>
          </div>
          
        </div>
      </section>
      {/* <section className='w-full max-w-[2560px] mx-auto px-10 pb-20 md:px-30 bg-[#E7E7E7]'>
        
      </section> */}
    </div>
  )
}

export default ContactUs
