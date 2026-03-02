/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-lobstius-red selection:text-white">
      <Hero />
      <Narrative />
      <About />
      <Footer />
    </div>
  );
}
