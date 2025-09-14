"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { href: "/materials", label: "Materials" },
    { href: "/nature", label: "Nature" },
    { href: "/subjects", label: "Subjects" },
    { href: "/lab", label: "Lab" },
  ]

  return (
    <nav className="w-full bg-white shadow-md py-4 px-8">
      <div className="flex justify-center">
        <ul className="flex gap-10 text-lg font-mono text-gray-700">
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
      </div>
    </nav>
  )
}

export default Navbar
