import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const LANDING_URL = "https://me99office.net/RFLANDINGPAAGE";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ME99 App", href: LANDING_URL },
    { label: "Online Pokies", href: LANDING_URL },
    { label: "Live Casino", href: LANDING_URL },
    { label: "Sports Betting", href: LANDING_URL },
    { label: "Promotions", href: LANDING_URL },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "nav-glass-scrolled" : "nav-glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          rel="noopener noreferrer"
          className="flex-shrink-0 group"
        >
          <img
            src="https://storage.readdy-site.link/project_files/484b0ff4-cd13-4160-813b-582f838a1bee/efbeda29-69a6-4a30-82a3-90ba0580f22f_b49de24fa2596829d46a7.png?v=cca49b97ad42d55899b5ed5c9d880cad"
            alt="ME99 Logo"
            className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-me99-600 transition-all duration-300 whitespace-nowrap hover:bg-me99-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-premium"
          >
            Login
          </a>
          <a
            href={LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium text-white"
          >
            Register
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-me99-50 transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "ri-close-line text-me99-600 text-xl" : "ri-menu-line text-me99-600 text-xl"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-me99-100 px-4 pb-5 pt-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-gray-600 hover:text-me99-600 text-sm font-medium border-b border-gray-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href={LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-me99-600 border-2 border-me99-200 hover:border-me99-400 hover:bg-me99-50 transition-all whitespace-nowrap cursor-pointer"
            >
              Log In
            </a>
            <a
              href={LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-orange text-white hover:shadow-lg hover:shadow-me99-500/30 transition-all whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}