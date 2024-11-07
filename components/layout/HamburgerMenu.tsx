'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-neon-hotPink hover:bg-neon-pink 
                   text-neon-paleBlue rounded-md focus:outline-none transition-colors duration-300"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-neon-paleBlue"></span>
          <span className="block w-6 h-0.5 bg-neon-paleBlue"></span>
          <span className="block w-6 h-0.5 bg-neon-paleBlue"></span>
        </div>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed z-40 rounded-2xl transition-all duration-500 ease-in-out
                   bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                   backdrop-blur-sm ${isOpen ? 'scale-100' : 'scale-0'}`}
        style={{
          top: '10px',
          left: '10px',
          right: '10px',
          bottom: '10px',
          transformOrigin: '16px 16px',
          boxShadow: isOpen ? '0 0 30px rgba(39, 253, 245, 0.15)' : 'none',
        }}
      >
        <nav className={`
          h-full w-full 
          flex items-center justify-center 
          text-neon-cyan
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}>
          <ul className="flex flex-col items-center space-y-8">
            <li>
              <Link 
                href="/" 
                onClick={toggleMenu}
                className="text-3xl font-bold hover:text-neon-lightCyan transition-all duration-200
                         hover:shadow-lg relative group"
              >
                Home
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-neon-cyan transform scale-x-0 
                               group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={toggleMenu}
                className="text-3xl font-bold hover:text-neon-lightCyan transition-all duration-200
                         hover:shadow-lg relative group"
              >
                About
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-neon-cyan transform scale-x-0 
                               group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                onClick={toggleMenu}
                className="text-3xl font-bold hover:text-neon-lightCyan transition-all duration-200
                         hover:shadow-lg relative group"
              >
                Projects
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-neon-cyan transform scale-x-0 
                               group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}