'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Services', href: '/Services' },
  { name: 'Contact', href: '/Contact' },
  { name: 'Sign In', href: '/login' },
  { name: 'Sign Up', href: '/signup' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const activeClass = 'text-gray-800 font-semibold';
  const inactiveClass = 'text-gray-500 hover:text-gray-700 transition-colors duration-200';

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Nextjs  <span className="text-blue-600">App</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={path === link.href ? activeClass : inactiveClass}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-lg font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
