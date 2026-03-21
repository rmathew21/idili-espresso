import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/locations", label: "Locations" },
  ];

  const isLight = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`font-display text-lg tracking-wide transition-colors duration-300 ${
            isLight ? "text-espresso" : "text-cream"
          }`}
        >
          Idili &amp; Espresso
        </Link>

        <nav className="hidden md:flex items-center gap-10 ">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-link transition-colors duration-300 ${
                    isLight 
                    ? isActive ? "!text-gold" : "!text-espresso" 
                    : isActive ? "!text-gold/80" : "!text-cream"
                }`
              }
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-px  transition-all duration-300 ${isLight ? "bg-espresso" : "bg-cream"} ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px  transition-all duration-300 ${isLight ? "bg-espresso" : "bg-cream"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px  transition-all duration-300 ${isLight ? "bg-espresso" : "bg-cream"} ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-sm ${
          menuOpen ? "max-h-72 border-t border-gold-light" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-gold" : "text-espresso"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.idiliespresso.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest font-medium uppercase bg-espresso text-cream px-5 text-center hover:bg-mocha transition-colors duration-200"
          >
            Order Online
          </a>
        </nav>
      </div>
    </header>
  );
}
