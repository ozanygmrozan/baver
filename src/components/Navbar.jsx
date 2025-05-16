import React, { useEffect, useState } from "react";
import logo from "./img/asgard.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-white text-xl font-bold hover:text-gray-300">
          <a href="navbar">
            <img
              src={logo}
              className="w-20 h-auto"
              style={{ maxHeight: "60px" }}
              alt="Logo"
            />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <NavItem to="/" text="Anasayfa" />
        <NavItem to="/hizmetlerimiz" text="Hizmetlerimiz" />
        <NavItem to="/hakkimizda" text="Hakkımızda" />
        <NavItem to="/iletisim" text="İletişim" />
      </div>
      <div className="lg:hidden">
        <button
          type="button"
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 w-full h-full bg-gray-800 z-[999]">
            <div className="flex justify-end p-4">
              <button type="button" className="text-white" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-end space-y-4 pr-4">
              <MobileNavItem to="/" text="Ana Sayfa" onClick={toggleMenu} />
              <MobileNavItem to="/blog" text="Bloglar" onClick={toggleMenu} />
              <MobileNavItem
                to="/hakkimizda"
                text="Hakkında"
                onClick={toggleMenu}
              />
              <MobileNavItem
                to="/iletisim"
                text="İletişim"
                onClick={toggleMenu}
              />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <div>
    <Link to={to} className="text-white hover:text-gray-300">
      {text}
    </Link>
  </div>
);

const MobileNavItem = ({ to, text, onClick }) => (
  <li>
    <Link to={to} className="text-white hover:text-gray-300" onClick={onClick}>
      {text}
    </Link>
  </li>
);

export default NavBar;
