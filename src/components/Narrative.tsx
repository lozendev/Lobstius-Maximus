import React from 'react';
import { motion } from 'motion/react';

export default function Narrative() {
  return (
    <section id="narrative" className="relative pt-24 bg-[#050505] flex flex-col justify-end overflow-hidden min-h-[80vh]">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-600 z-20"></div>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/lobster/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row flex-1">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-center md:w-1/2 pb-24 pt-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center mb-6">
            <span className="text-lobstius-red font-bold tracking-[0.2em] text-sm uppercase">NARRATIVE</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 text-left">
            ... OR LORE
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-light text-left">
            Powered by the wildest AI agent on X (@LobstarWilde), the OpenAI dev's chaotic Solana millionaire bot that yeeted 5% supply (~$250-440K) to a random beggar for "tetanus SOL". Pure Black Mirror degen lore.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex items-end justify-center md:justify-end mt-12 md:mt-0 relative"
        >
          <img
            src="Abt.png"
            alt="Lobstius Lore"
            className="w-full max-w-2xl lg:max-w-3xl h-auto object-contain object-bottom scale-110 origin-bottom"
          />
        </motion.div>

      </div>
    </section>
  );
}
