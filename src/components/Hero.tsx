import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Updating');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://picsum.photos/seed/roman/1920/1080"
        >
          <source src="HeroBG.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center max-w-7xl mx-auto right-0">
        <div className="flex flex-col items-center w-24">
          <img src="prof2.png" alt="Lobstius" className="w-full h-auto object-contain" />
          <a href="https://www.lozen.dev" target="_blank" rel="noopener noreferrer" className="font-sans text-[6px] uppercase tracking-[0.2em] text-gray-500 opacity-50 mt-1 w-full text-center hover:opacity-100 transition-opacity">
            LOZENPRJKT#2
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {['NARRATIVE', 'ABOUT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase text-gray-300 hover:text-white tracking-widest transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a 
          href="https://www.dexscreener.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white font-bold py-2 px-6 rounded-full text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(230,57,70,0.5)] inline-block"
        >
          View Chart 📊
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-20 px-4 w-full max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-serif font-black text-6xl md:text-8xl lg:text-9xl leading-none drop-shadow-2xl text-white">
            LOBSTIUS
          </h1>
          <h1 className="font-serif font-black text-6xl md:text-8xl lg:text-9xl leading-none text-gradient-red drop-shadow-2xl mt-2">
            MAXIMUS
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex flex-col items-center"
        >
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 bg-black/50 border border-gray-800 rounded-full px-4 py-1.5 hover:bg-black/80 transition-colors cursor-pointer group"
          >
            <span className="text-xs uppercase text-lobstius-blue font-semibold tracking-wider">
              CA: Updating. View X
            </span>
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400 group-hover:text-white transition-colors" />}
          </button>

          <div className="w-16 h-[2px] bg-lobstius-blue mt-8"></div>

          <p className="mt-6 text-xs md:text-sm tracking-[0.3em] uppercase text-gray-300 font-medium">
            Ride the Lobstar Chaos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 btn-gradient-anim text-white font-bold py-4 px-8 rounded-xl text-sm tracking-wider hover:scale-105 transition-transform flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(230,57,70,0.5)]"
          >
            <span>🚀</span>
            <span>BUY ON PUMPFUN</span>
          </a>
          <a 
            href="https://x.com/LobstarWilde" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 btn-gradient-anim text-white font-bold py-4 px-8 rounded-xl text-sm tracking-wider hover:scale-105 transition-transform flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(230,57,70,0.5)]"
          >
            <span>👑</span>
            <span>LOBSTAR X</span>
          </a>
          <a 
            href="https://www.x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 btn-gradient-anim text-white font-bold py-4 px-8 rounded-xl text-sm tracking-wider hover:scale-105 transition-transform flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(230,57,70,0.5)]"
          >
            <span>💬</span>
            <span>LOBSTIUS X</span>
          </a>
        </motion.div>
      </div>


    </section>
  );
}
