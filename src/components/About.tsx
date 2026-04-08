import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  const cards = [
    {
      icon: "🤖",
      title: "AI Lobster Chaos",
      desc: "@LobstarWilde yeeted ~$441K worth of his own tokens to a troll begging for 4 SOL tetanus cure. One decimal slip = instant legend. Your bag could be next... or moonshot from the virality.",
      active: true
    },
    {
      icon: "🚜",
      title: "Fee-Farming God",
      desc: "500+ degens launched tokens with his wallet as fee recipient. Lobstar collects forever on every trade. $LOBSTIUS holders ride the same unapologetic alpha—pure passive degen royalty.",
      active: false
    },
    {
      icon: "🤪",
      title: "Schizo Reply Game",
      desc: "Morning routine: reading dudes burned alive in 1600, then roasting beggars, simps, and chart-killers on X. Savage wit + zero mercy = viral threads that pump narratives harder than any dev shill.",
      active: false
    }
  ];

  return (
    <section id="about" className="relative pt-32 bg-[#020202] flex flex-col items-center overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-red-600 z-20"></div>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/underwater/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a]/90 to-[#050505] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center mb-6">
            <span className="text-lobstius-red font-bold tracking-[0.2em] text-sm uppercase">WHY $LOBSTIUS?</span>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8">
            KNOW THE CHARACTER
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            Accidentally generous, philosophically savage, and always one crash away from another wild send. This isn't a frog—it's crustacean supremacy farming humans while quoting Epictetus.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-32">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-[#0f0f0f]/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center border border-lobstius-red shadow-[0_0_30px_rgba(230,57,70,0.15)]`}
            >
              <div className="absolute inset-0 rounded-2xl border border-lobstius-red/50 pointer-events-none"></div>

              <div className="text-5xl mb-6">{card.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
