// https://github.com/briancodex/tailwindcss-react-v1

import React, { useState, useEffect, useRef, EventHandler } from 'react';
import './Navigation.scss'

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(Boolean(false));
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(Number(0));
  const navigationBar = React.useRef<HTMLDivElement>(null);
  const navigationBarTop = React.useRef<HTMLDivElement>(null);


  const getNavigationMode = () => {
    let menuConstant = 'flex flex-col justify-center items-center bg-gray-800 text-white absolute top-0 w-screen h-screen transitionEaseLeft md:h-auto md:flex-row md:static md:w-min md:bg-transparent';
    return isMenuActive
      ? `${menuConstant} left-0`
      : `${menuConstant} left-full`
  }

  useEffect(() => {
    const onScroll = (e: any) => {
      setIsScrollingDown(e.target.documentElement.scrollTop <= scrollPosition);
      setScrollPosition(e.target.documentElement.scrollTop);
    }
    
    window.addEventListener('scroll', onScroll);
  }, [scrollPosition]);

  useEffect(() => {
    if (navigationBar.current == null || navigationBarTop.current == null) {
      return;
    }

    let isScrollInBottomOfScreen = scrollPosition > window.innerHeight;
    if (isScrollInBottomOfScreen) {
      navigationBarTop.current.classList.add('fixed');
      navigationBarTop.current.classList.remove('absolute');
      if (isScrollingDown) {
        navigationBar.current.classList.add('bg-gray-700');
        navigationBar.current.classList.remove('transparent');
        navigationBar.current.classList.remove('hidden');
      } else {
        navigationBar.current.classList.remove('bg-gray-700');
        navigationBar.current.classList.remove("transparent");
        navigationBar.current.classList.add('hidden');
      }
    } else {
      navigationBarTop.current.classList.remove('fixed');
      navigationBarTop.current.classList.add('absolute');
      navigationBar.current.classList.remove('bg-gray-700');
      navigationBar.current.classList.remove('hidden');
      navigationBar.current.classList.add("transparent");
    }
    
  }, [scrollPosition, isScrollingDown])

  return (
    <nav ref={navigationBarTop} className="absolute left-0 top-0 w-full h-auto block z-50">
      <div ref={navigationBar} className="flex items-center justify-center w-full min-h-0">
        <div className="flex items-center justify-between w-full h-full py-1 px-3 my-2 md:my-0 md:py-0">
          <div>
            <a href="#hero"><h1 className="text-2xl text-white">Logo</h1></a>
          </div>
          <div>
            <div onClick={() => setIsMenuActive(!isMenuActive)} className="relative text-white w-full h-full flex justify-center items-center z-20 mr-4 cursor-pointer hover:text-red-600 md:hidden">
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
              <li><a href="#hero" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600 md:inline-block md:text-lg md:font-normal">Home</a></li>
              <li><a href="#services" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600 md:inline-block md:text-lg md:font-normal">Services</a></li>
              <li><a href="#projects" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600 md:inline-block md:text-lg md:font-normal">Projects</a></li>
              <li><a href="#about" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600 md:inline-block md:text-lg md:font-normal">About</a></li>
              <li><a href="#contact" className="text-white font-medium text-4xl tracking-widest block p-5 hover:text-red-600 md:inline-block md:text-lg md:font-normal">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;