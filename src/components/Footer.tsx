import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] py-12 flex flex-col items-center text-center px-6">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-600 z-20"></div>
      
      <p className="text-gray-500 text-xs max-w-2xl mb-6 leading-relaxed">
        DISCLAIMER: $LOBSTIUS is a meme coin created for entertainment purposes only. It has no intrinsic value and no expectation of financial return. Cryptocurrency investments are highly volatile and risky. Please do your own research (DYOR) and only invest what you can afford to lose.
      </p>
      
      <a 
        href="https://www.x.com/lozendev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-semibold"
      >
        A LOZEN PRJKT
      </a>
    </footer>
  );
}
