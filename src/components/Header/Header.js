'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  let navigationClasses = 'md:bg-white md:not-sr-only md:w-auto md:h-auto md:flex-row flex justify-center md:space-x-8';

  if (menuIsOpen) {
    navigationClasses += ' absolute bg-red-500 top-[65px] left-0 w-screen h-screen flex-col text-center';
  } else {
    navigationClasses += ' sr-only';
  }

  function handleMenuToggle() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleSwitchToggle() {
    console.log('toggle');
  }

  return (
    <header className="bg-white p-4">
      <div className="max-w-[1140px] mx-auto grid grid-cols-5 sm:grid-cols-3 items-center">
        <div className="md:hidden flex">
          <button onClick={handleMenuToggle} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            {menuIsOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className="col-span-3 sm:col-span-1 text-center md:text-left">
          <h1 className="text-2xl font-black italic">irwineguiluz</h1>
        </div>

        <div className="md:hidden flex justify-end">
          <button onClick={handleSwitchToggle} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            Switch
          </button>
        </div>

        <nav className={navigationClasses}>
          <Link href="/" className="font-bold italic text-black hover:text-gray-900">
            Home
          </Link>
          <Link href="#" className="text-black hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex justify-end space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            FB
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            X
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            IG
          </Link>
        </div>
      </div>
    </header>
  );
};
