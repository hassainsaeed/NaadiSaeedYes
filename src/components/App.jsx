import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Events from './Events/Events';
import Contact from './Contact/Contact';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, eventsData, contactData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [events, setEvents] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setEvents([...eventsData]);
    setContact({ ...contactData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, events, contact }}>
      <Hero />
      <About />
      <Events />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
