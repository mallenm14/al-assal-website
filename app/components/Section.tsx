import React from 'react'

const Section = ({children, className} : {children : React.ReactNode, className? : string}) => {
  return (
    <section className={`w-screen min-h-screen relative ${className}`}>
      {children}
    </section>
  )
}

export default Section
