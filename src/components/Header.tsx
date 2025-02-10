"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
          SYIGEN
        </Link>
        <div className="flex items-center">
          <button
            className="md:hidden mr-2 text-text-light dark:text-text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <Link
                  href="#about"
                  className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#ceylon"
                  className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ceylon
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

