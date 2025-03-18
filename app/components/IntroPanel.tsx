import React, { ReactNode } from 'react'

const IntroPanel = ({children, className} : {children : ReactNode, className? : string}) => {
  return (
    <div className={`flex-1 lg:h-[500px] bg-gray-100 px-10 py-5 flex flex-col space-y-5 ${className}`}>
        {children}
    </div>
  )
}

export default IntroPanel
