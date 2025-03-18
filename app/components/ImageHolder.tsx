import React from 'react'
import Image from 'next/image'

const ImageHolder = ({src, alt, name} : {src : string, alt :string, name : string}) => {
  return (
    <div className='w-full h-48 relative overflow-hidden hover:scale-110 hover:relative hover:z-10 transition-all duration-300 cursor-pointer'>
    <Image className='object-cover' src={src} alt={alt} fill/>
    <div className='w-full h-full absolute bg-gradient-to-b from-transparent to-black/60 hover:opacity-0 flex justify-center items-end text-gray-200 text-center p-5'>
        <h5 className='h-10 font-bold text-sm text-wrap'>{name}</h5>
    </div>
  
    </div>
  )
}

export default ImageHolder
