import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import { styles } from "../styles";
import { sticker } from "../assets";

import AuthContext from '../context/AuthContext'
import { LanguageContext } from '../context/LangContext';

import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

const Hero = () => {
  let {isMobile} = useContext(AuthContext) || {}
  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;

  return (
    <section className="relative w-full h-auto mx-auto overflow-hidden">
      <MatrixBackground speed = {35}/>
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
        <div className="max-w-7xl mx-auto md:px-24 px-3 flex flex-row items-center gap-5 md:py-36 pt-36">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-[25rem] h-64 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> 
              <span className='text-[#915EFF]'>Gabriel Diaz</span> <br />{content.heroInfo.title}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {content.heroInfo.textUp}<br className='sm:block hidden' />
              {content.heroInfo.textDown}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="w-full md:mx-0 flex justify-center items-center mb-24 md:mb-0 md:px-24 px-3">
          <Terminal />
        </div>
      </div>
    </section>
  );
};

function Terminal() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState([]);
  const [gameState, setGameState] = React.useState(null);
  const terminalRef = useRef(null);

  const handleCommand = (command) => {
    let response;
    switch (command.toLowerCase()) {
      case "help":
        response = [
          "Availables commands:",
          " - help",
          " - contact",
          " - whoami",
          " - uname",
          " - clear",
        ].join("\n");   
        break;
      case "contact":
        response = "Email: alfons.diaz97@gmail.com | GitHub: GoroGabox";
        break;
      case "whoami":
        response = "Gabriel diaz, software developer";
        break;
      case "uname":
        response = "Linux Gabriel-Machine 5.15.0-75-generic x86_64";
        break;
      case "clear":
        setOutput([]);
        return;
      default:
        response = "Unknown command. Type 'help' to see all commands.";
    }
    setOutput([...output, `> ${command}`, response]);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="border-2 border-solid border-slate-600 w-full">
      <div className="w-full h-4 bg-slate-600 flex justify-end items-center gap-2 px-3">
        <div className="w-2 h-2 rounded bg-green-500"></div>
        <div className="w-2 h-2 rounded bg-yellow-500"></div>
        <div className="w-2 h-2 rounded bg-red-500"></div>
      </div>
      <div className="bg-black text-green-400 p-4 rounded shadow-md w-full">
        <div ref={terminalRef} className="h-48 overflow-auto mb-2">
          {output.map((line, index) => (
            <pre key={index} className="whitespace-pre-wrap">{line}</pre>
          ))}
        </div>
        <input
          className="w-full bg-black text-green-400 border-none outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCommand(input);
              setInput("");
            }
          }}
          placeholder="Type a command or help to see all commands."
        />
      </div>
    </div>
  );
}

const MatrixBackground = ({ speed = 50 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 14);
    const drops = Array(columns).fill(1);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()".split("");

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 14, drops[i] * 14);
        if (drops[i] * 14 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      setTimeout(() => requestAnimationFrame(drawMatrix), speed);
    };

    drawMatrix();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default Hero;
