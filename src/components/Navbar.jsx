// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { NavLink } from "react-router-dom"

export default function Navbar() {

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/menu', label: 'Menu' },
        { to: '/locations', label: 'Locations' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="font-display text-lg tracking-wide text-expresso">
                    Idili &amp; Expresso
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a 
                    href="https://www.idiliespresso.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest font-medium uppercase bg-espresso text-cream px-5 py-2 hover:bg-mocha transition-colors duration-200"
                    >
                        Order Online
                    </a>
                </nav>

            </div>

        </header>
    )
}