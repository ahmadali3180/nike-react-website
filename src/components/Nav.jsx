import React, { useEffect, useRef, useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const [isTabSize, setIsTabSize] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuEnabled(!menuEnabled);
  };

  const closeMenu = () => {
    setMenuEnabled(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabSize(window.innerWidth <= 1024 && window.innerWidth >= 768);
      if (window.innerWidth > 1024) {
        setMenuEnabled(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuEnabled) {
      window.addEventListener("click", handleClickOutside);
      document.body.classList.add("overflow-hidden"); // Disable scrolling
    } else {
      window.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("overflow-hidden"); // Enable scrolling
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuEnabled]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block" ref={menuRef}>
          <img
            src={hamburger}
            alt="Menu"
            width={25}
            height={25}
            onClick={toggleMenu}
            className={`absolute top-8 right-8 z-10`}
          />
          {menuEnabled && (
            <div
              className={`fixed top-0 ${
                isTabSize ? "right-0" : "left-0"
              } h-full ${isTabSize ? "w-[40%]" : "w-full"} ${
                isTabSize ? "bg-coral-red/90" : "bg-white/90"
              }`}
            >
              <ul
                className={`absolute w-full h-full flex flex-col items-center justify-start mt-40 gap-10 z-10`}
              >
                {navLinks.map((link) => (
                  <li key={link.label} onClick={() => setMenuEnabled(false)}>
                    <a
                      href={link.href}
                      className="font-montserrat leading-normal font-semibold text-lg text-black/80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
