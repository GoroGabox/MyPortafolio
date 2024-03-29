import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';
import { logo, menu, close, cv_en, cv_es } from "../assets";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;
  const cv = language === 'en' ? cv_en : cv_es;
  const descargaTexto = language === 'en' ? 'Download Resume' : 'Descargar CV';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Gabriel &nbsp;
            <span className='sm:block hidden'> | FullStack Web Developer</span>
          </p>
        </Link>

        

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <LanguageSwitcher/>
          {content.navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <a
            href={cv}
            download="Gabriel Diaz CV" 
            target="_blank"
            className=" rounded-full bg-sky-500 text-white px-4 py-2 cursor-pointer hover:scale-120 min-w-fit"
          >
            {descargaTexto}
          </a>
        </ul>

        <div className='sm:hidden sm:flex-row-reverse flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <LanguageSwitcher/>
              {content.navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <a
                href={cv}
                download="Gabriel Diaz CV" 
                target="_blank"
                className=" rounded-full bg-sky-500 text-white px-4 py-2 cursor-pointer"
              >
                {descargaTexto}
              </a>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
