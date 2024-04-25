import React from 'react'
import logo from '../assets/logo.png'; // Import the image

export default function Header() {
  return (
    <div
      className='sm:p-5 p-3'>
      <img src={logo} className='sm:w-[90px] sm:h-[90px] w-[70px] h-[70px] ' alt="Logo" />
    </div>
  )
}
