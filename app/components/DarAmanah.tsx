import React from 'react'
import Image from 'next/image'

const DarAmanah = () => {
  return (
    <section className='w-full max-w-[2560px] mx-auto min-h-[70vh] bg-secondary-strong relative flex flex-col justify-center'>
      <div className='absolute bg-[repeating-linear-gradient(to_bottom_right,transparent_300px,#607189_800px)] w-full h-full opacity-10 pointer-events-none'></div>

    <div className='w-[70vw] h-full mx-auto flex flex-col lg:flex-row justify-center items-center pt-10 gap-16'>
      <div className='flex-1 flex flex-col h-full gap-5 justify-center'>
        <h3 className='text-3xl font-bold text-gray-100'>Our Corporate Social Responsibility</h3>
        <p className='text-gray-300 py-5 text-lg'>What makes us Special? We Care.
            <br />
            Al Assal believes in giving back to the community. Al Assal is proud of its corporate efforts and strives to make a difference in the recruitment industry by operating Dar Amanah Children’s Village Foundtion, Inc. an orphanage and a school that takes care to the well being of Muslims children and an NKP, Elementary and High School Educating our children including the children in the nearby community and agriculture providing livelihood to its community.</p>
        <a href='https://staging.dar-amanah.sds.dev/' target='_blank' className='py-5 px-10 text-secondary hover:bg-[#005041] text-lg bg-gray-200 text-center font-bold hover:text-white cursor-pointer' color='clear'>
          Visit Dar Amanah
        </a>
      </div>
      <div className='flex-1 h-full flex flex-col justify-center items-center'>
      <div className=' h-1/2 w-full'>
      <Image unoptimized={true} width={250} height={200} src="/images/dar-amanah/dar-amanah-2.jpg" alt="" className='object-cover w-full h-full' />
      
      </div>
      <div className='h-1/3 w-full'>
        <Image unoptimized={true} width={250} height={250} src="/images/dar-amanah/dar-amanah-logo-2.png" alt="" className='object-cover w-full ' />
      </div>
      
      
      </div>
    </div>
    
  </section>
  )
}

export default DarAmanah
