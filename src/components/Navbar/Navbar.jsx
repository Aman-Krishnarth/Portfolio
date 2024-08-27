import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex flex-col md:flex-row items-start md:items-center justify-between pt-16 z-10 mx-[10%]">
      <a href="#/" className="font-semibold text-3xl text-white font-[outfit]">
        Portfolio
      </a>
      <div className="flex absolute right-0  md:static mr-[10%] md:mr-0 flex-col md:flex-row items-end md:items-[normal] gap-3 md:gap-0 z-20">
        {menuOpen ? (
          <X 
          className="text-white cursor-pointer block md:hidden"
          onClick={()=>{
            setMenuOpen(!menuOpen)
          }}
          />
        ) : (
          <Menu className="text-white cursor-pointer block md:hidden" 
          onClick={()=>{
            setMenuOpen(!menuOpen)
          }}
          />
        )}

        <ul
          className={`${menuOpen? "": "hidden"} md:flex md:gap-11 font-[outfit] text-white  flex-col text-center md:flex-row gap-3 rounded-lg md:rounded-none bg-[#19376d] md:bg-transparent py-6 md:py-0 px-8 md:px-0`}
          onClick={()=>{
            setMenuOpen(false)
          }}
        >
          <li>
            <a href="#about" className="text-2xl">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-2xl">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-2xl">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-2xl">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
