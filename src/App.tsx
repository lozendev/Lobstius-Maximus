/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio('/LobstarSpeech.mp3');
      audio.play().catch(e => console.error("Audio playback failed:", e));
      // Remove event listeners after first interaction
      document.removeEventListener('click', playAudio);
      document.removeEventListener('keydown', playAudio);
    };

    document.addEventListener('click', playAudio);
    document.addEventListener('keydown', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('keydown', playAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-lobstius-red selection:text-white">
      <Hero />
      <Narrative />
      <About />
      <Footer />
    </div>
  );
}
