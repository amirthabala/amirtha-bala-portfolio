"use client";

import { useEffect, useRef } from "react";
import style from "../styles/header.module.css";

const MENU = ["about", "work", "contact"];

const Header = ({
  scrollToSection,
  isShrink,
}: {
  scrollToSection: (section: string) => void;
  isShrink: boolean;
}) => {
  return (
    <div
      className="h-[80px] container sticky top-0 bg-white/30 z-[999] backdrop-blur-sm flex items-center justify-end"
      id="home"
    >
      <div className={isShrink ? style.scrollBody : style.headerBody}>
        {MENU.map((item: string) => (
          <div
            key={"header-menu-" + item}
            className="cursor-pointer capitalize"
            onClick={() => scrollToSection(item)}
          >
            {item}
          </div>
        ))}
        <button className="btn btn-primary">
          <a href="/amirtha-resume.pdf" download rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
