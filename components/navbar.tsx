"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Heart } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-pink-50/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 flex items-center">
            AT
            <Heart className="ml-1 text-pink-400" size={16} fill="currentColor" />
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`relative text-sm uppercase tracking-wider font-medium transition-colors ${
                    pathname === item.path ? "text-pink-600" : "text-pink-400 hover:text-pink-600"
                  }`}
                >
                  {pathname === item.path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-gradient-to-r from-pink-400 to-purple-400"
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-pink-600" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-pink-50/95 backdrop-blur-md"
        >
          <nav className="container mx-auto px-4 py-5">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`block py-2 text-lg ${
                      pathname === item.path ? "text-pink-600 font-medium" : "text-pink-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
