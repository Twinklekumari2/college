"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // hamburger + close icon

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {href:"/", label:"Home"},
    { href: "/materials", label: "Materials" },
    { href: "/nature", label: "Nature" },
    { href: "/subjects", label: "Subjects" },
    { href: "/lab", label: "Lab" },
  ]

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-blue-600">MySite</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-mono text-gray-700">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-md transition-colors duration-200 
                  ${
                    pathname === href
                      ? "bg-blue-600 text-white"
                      : "hover:text-blue-600"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-50 border-t py-4 px-6">
          <ul className="flex flex-col gap-4 text-lg font-mono text-gray-700">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)} // close menu after click
                  className={`block px-4 py-2 rounded-md transition-colors duration-200 
                    ${
                      pathname === href
                        ? "bg-blue-600 text-white"
                        : "hover:text-blue-600"
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
