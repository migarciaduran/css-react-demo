// https://github.com/briancodex/tailwindcss-react-v1

import React, { useState } from 'react';
import './Navigation.css'

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(Boolean(false));

  const getNavigationMode = () => {
    let menuConstant = 'flex flex-col justify-center items-center bg-gray-800 text-white absolute top-0 w-screen h-screen transitionEaseLeft';
    return isMenuActive
      ? `${menuConstant} left-0`
      : `${menuConstant} left-full`
  }

  return (
    <nav className="fixed left-0 top-0 w-screen h-auto block">
      <div className="flex items-center justify-center bg-gray-700 w-full min-h-0">
        <div className="flex items-center justify-between w-full h-full py-0 px-3 my-2">
          <div>
            <a href="#hero"><h1 className="uppercase text-2xl text-white">Mike</h1></a>
          </div>
          <div>
            <div onClick={() => setIsMenuActive(!isMenuActive)} className="relative text-white w-full h-full flex justify-center items-center z-20 p-1 cursor-pointer hover:text-red-600">
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>

            <ul className={`${getNavigationMode()}`}>
              <li><a href="#hero" data-after="Home" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600">Home</a></li>
              <li><a href="#services" data-after="Service" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600">Services</a></li>
              <li><a href="#projects" data-after="Projects" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600">Projects</a></li>
              <li><a href="#about" data-after="About" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600">About</a></li>
              <li><a href="#contact" data-after="Contact" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;