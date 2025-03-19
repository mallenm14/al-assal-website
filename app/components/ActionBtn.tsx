'use client';
import React from 'react'

type Props = {
    color: "primary" | "secondary" | "tertiary" | "clear",
    clickHandler?: () => void,
    children: React.ReactNode
    className?: string
    
}

const colorClass = {
    primary: "bg-primary hover:bg-primary-strong text-white py-2 px-4 font-bold shadow-lg",
    tertiary: "bg-tertiary hover:bg-tertiary-strong text-white py-2 px-4 font-bold shadow-lg",
    secondary: "bg-secondary hover:bg-secondary-strong text-white py-2 px-4 font-bold shadow-lg",
    clear: "bg-gray-200 hover:bg-white text-black/90 py-2 px-4 font-bold shadow-lg",
}

const ActionBtn : React.FC<Props> = ({color, className, children}) => {

  return (
    <button  className={`${colorClass[color]} ${className} cursor-pointer`}>
      {children}
    </button>
  )
}

export default ActionBtn
