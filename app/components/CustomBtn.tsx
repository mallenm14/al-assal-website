'use client';
import React from 'react'

type Props = {
    onClick ?: () => void,
    children : React.ReactNode,
    className? : string
}

const CustomBtn : React.FC<Props> = ({ children, className}) => {
  return (
    <button className={`${className}`}>
      {children}
    </button>
  )
}

export default CustomBtn
