import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, contactData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, contact }}>
      <Hero />
      <About />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
