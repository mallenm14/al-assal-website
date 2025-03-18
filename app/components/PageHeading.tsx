import React from 'react'

const PageHeading = ({className, children} : {children : string, className? : string}) => {
  return (
    <h2 className={`w-full h-20 lg:h-40 flex items-center justify-center text-center text-xl lg:text-3xl font-bold text-secondary ${className}`}>
      {children}
    </h2>
  )
}

export default PageHeading
